const SteamUser = require('steam-user');
const SteamCommunity = require('steamcommunity');
const SteamTotp = require('steam-totp');
const TradeOfferManager = require('steam-tradeoffer-manager');
const path = require('path');
var fs = require('fs');
var async = require('async');


var text = fs.readFileSync('./accs.txt').toString('utf-8');
var bot = text.split('\n')
config = require(path.resolve("config.json"));
var identity = '';
var n = 1;
let client = new SteamUser();
let community = new SteamCommunity();
let manager = new TradeOfferManager({
	"steam": client, // Polling every 30 seconds is fine since we get notifications from Steam
	"domain": "example.com", // Our domain is example.com
	"language": "en" // We want English item descriptions
});

(async() => {
	for (let i = 0; i < bot.length; i++) {
		n = i+1;
		const logOnOptions = {
			accountName: bot[i].split(":")[0],
			password: bot[i].split(":")[1],
			twoFactorCode: SteamTotp.generateAuthCode(bot[i].split(":")[2]),
		};
		identity = bot[i].split(":")[3];

		client.logOn(logOnOptions);
		await new Promise(r => setTimeout(r, 12000));
		client.logOff()
		await new Promise(r => setTimeout(r, 2000));
	}

})()



client.on('loggedOn', function() {
	console.log("Logged into Steam");
});

client.on('webSession', function(sessionID, cookies) {
	manager.setCookies(cookies, function(err) {
		if (err) {
			console.log(err);
			process.exit(1); // Fatal error since we couldn't get our API key
			return;
		}

		console.log("[%s of %s] Got API key: %s", n, bot.length, manager.apiKey);

		// Get our inventory
		manager.getInventoryContents(753, 6, true, function(err, inventory) {
			if (err) {
				console.log(err);
				return;
			}

			if (inventory.length == 0) {
				// Inventory empty
				console.log("[%s of %s] Steam inventory is empty", n, bot.length);
				return;
			}

			console.log("[%s of %s] Found %s steam items", n, bot.length, inventory.length);

			// Create and send the offer
			let offer = manager.createOffer(config.trade_link);
			offer.addMyItems(inventory);
			offer.setMessage("Here, have some items!");
			offer.send(function(err, status) {
				if (err) {
					console.log(err);
					return;
				}

				if (status == 'pending') {
					// We need to confirm it
					console.log(`Offer #${offer.id} sent, but requires confirmation`);
					community.acceptConfirmationForObject(identity, offer.id, function(err) {
						if (err) {
							console.log(err);
						} else {
							console.log("[%s of %s] Offer confirmed", n, bot.length);
						}
					});
				} else {
					console.log(`Offer #${offer.id} sent successfully`);
				}
			});
		});
	});

	community.setCookies(cookies);
});