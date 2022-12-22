var SteamCommunity = require('steamcommunity');
const SteamTotp = require('steam-totp');
const path = require('path');
var fs = require('fs');
var async = require('async');

var community = new SteamCommunity;

var text = fs.readFileSync('./accs.txt').toString('utf-8');
var bot = text.split("\n");


(async() => {
	for (let i = 0; i < bot.length; i++) {
		const logOnOptions = {
			accountName: bot[i].split(":")[0],
			password: bot[i].split(":")[1],
			twoFactorCode: SteamTotp.generateAuthCode(bot[i].split(":")[2]),
		}; 
		community.login({
			"accountName": logOnOptions.accountName,
			"password": logOnOptions.password,
			"twoFactorCode": logOnOptions.twoFactorCode,
		},
		function (err, sessionID, cookies, steamguard, oAuthToken) {
			if (err) { console.log('[] Unable to auth (Error: %s)'.red, logOnOptions.accountName, err); }
			if (!err) {	
				var options1 = {
					formData: {	sessionid: sessionID, voteid: 72, appid: 1332010, developerid: 0  },
					headers: { Cookie: cookies, Host: 'store.steampowered.com', Origin: 'https://store.steampowered.com' },
					json: true
				};
				var options2 = {
					formData: {	sessionid: sessionID, voteid: 73, appid: 1849900, developerid: 0  },
					headers: { Cookie: cookies, Host: 'store.steampowered.com', Origin: 'https://store.steampowered.com' },
					json: true
				};
				var options3 = {
					formData: {	sessionid: sessionID, voteid: 74, appid: 570, developerid: 0  },
					headers: { Cookie: cookies, Host: 'store.steampowered.com', Origin: 'https://store.steampowered.com' },
					json: true
				};
				var options4 = {
					formData: {	sessionid: sessionID, voteid: 75, appid: 648800, developerid: 0  },
					headers: { Cookie: cookies, Host: 'store.steampowered.com', Origin: 'https://store.steampowered.com' },
					json: true
				};
				var options5 = {
					formData: {	sessionid: sessionID, voteid: 76, appid: 698670, developerid: 0  },
					headers: { Cookie: cookies, Host: 'store.steampowered.com', Origin: 'https://store.steampowered.com' },
					json: true
				};
				var options6 = {
					formData: {	sessionid: sessionID, voteid: 77, appid: 1332010, developerid: 0  },
					headers: { Cookie: cookies, Host: 'store.steampowered.com', Origin: 'https://store.steampowered.com' },
					json: true
				};
				var options7 = {
					formData: {	sessionid: sessionID, voteid: 78, appid: 493520, developerid: 0  },
					headers: { Cookie: cookies, Host: 'store.steampowered.com', Origin: 'https://store.steampowered.com' },
					json: true
				};
				var options8 = {
					formData: {	sessionid: sessionID, voteid: 79, appid: 1237320, developerid: 0  },
					headers: { Cookie: cookies, Host: 'store.steampowered.com', Origin: 'https://store.steampowered.com' },
					json: true
				};
				var options9 = {
					formData: {	sessionid: sessionID, voteid: 80, appid: 1703340, developerid: 0  },
					headers: { Cookie: cookies, Host: 'store.steampowered.com', Origin: 'https://store.steampowered.com' },
					json: true
				};
				var options10 = {
					formData: {	sessionid: sessionID, voteid: 81, appid: 920210, developerid: 0  },
					headers: { Cookie: cookies, Host: 'store.steampowered.com', Origin: 'https://store.steampowered.com' },
					json: true
				};
				var options11 = {
					formData: {	sessionid: sessionID, voteid: 82, appid: 1449850, developerid: 0  },
					headers: { Cookie: cookies, Host: 'store.steampowered.com', Origin: 'https://store.steampowered.com' },
					json: true
				};
				(async() => {
					community.httpRequestPost('https://store.steampowered.com/salevote', options1,	function (err, response, data) {
						if (err) console.log('[%s] Something went wrong: %s', logOnOptions.accountName, err)
						if (!err) console.log('[%s] Voted 1 of 11', logOnOptions.accountName)
					})
					await new Promise(r => setTimeout(r, 2500));
					community.httpRequestPost('https://store.steampowered.com/salevote', options2,	function (err, response, data) {
						if (err) console.log('[%s] Something went wrong: %s', logOnOptions.accountName, err)
						if (!err) console.log('[%s] Voted 2 of 11', logOnOptions.accountName)
					})
					await new Promise(r => setTimeout(r, 2500));
					community.httpRequestPost('https://store.steampowered.com/salevote', options3,	function (err, response, data) {
						if (err) console.log('[%s] Something went wrong: %s', logOnOptions.accountName, err)
						if (!err) console.log('[%s] Voted 3 of 11', logOnOptions.accountName)
					})
					await new Promise(r => setTimeout(r, 2500));
					community.httpRequestPost('https://store.steampowered.com/salevote', options4,	function (err, response, data) {
						if (err) console.log('[%s] Something went wrong: %s', logOnOptions.accountName, err)
						if (!err) console.log('[%s] Voted 4 of 11', logOnOptions.accountName)
					})
					await new Promise(r => setTimeout(r, 2500));
					community.httpRequestPost('https://store.steampowered.com/salevote', options5,	function (err, response, data) {
						if (err) console.log('[%s] Something went wrong: %s', logOnOptions.accountName, err)
						if (!err) console.log('[%s] Voted 5 of 11', logOnOptions.accountName)
					})
					await new Promise(r => setTimeout(r, 2500));
					community.httpRequestPost('https://store.steampowered.com/salevote', options6,	function (err, response, data) {
						if (err) console.log('[%s] Something went wrong: %s', logOnOptions.accountName, err)
						if (!err) console.log('[%s] Voted 6 of 11', logOnOptions.accountName)
					})
					await new Promise(r => setTimeout(r, 2500));
					community.httpRequestPost('https://store.steampowered.com/salevote', options7,	function (err, response, data) {
						if (err) console.log('[%s] Something went wrong: %s', logOnOptions.accountName, err)
						if (!err) console.log('[%s] Voted 7 of 11', logOnOptions.accountName)
					})
					await new Promise(r => setTimeout(r, 2500));
					community.httpRequestPost('https://store.steampowered.com/salevote', options8,	function (err, response, data) {
						if (err) console.log('[%s] Something went wrong: %s', logOnOptions.accountName, err)
						if (!err) console.log('[%s] Voted 8 of 11', logOnOptions.accountName)
					})
					await new Promise(r => setTimeout(r, 2500));
					community.httpRequestPost('https://store.steampowered.com/salevote', options9,	function (err, response, data) {
						if (err) console.log('[%s] Something went wrong: %s', logOnOptions.accountName, err)
						if (!err) console.log('[%s] Voted 9 of 11', logOnOptions.accountName)
					})
					await new Promise(r => setTimeout(r, 2500));
					community.httpRequestPost('https://store.steampowered.com/salevote', options10,	function (err, response, data) {
						if (err) console.log('[%s] Something went wrong: %s', logOnOptions.accountName, err)
						if (!err) console.log('[%s] Voted 10 of 11', logOnOptions.accountName)
					})
					await new Promise(r => setTimeout(r, 2500));
					community.httpRequestPost('https://store.steampowered.com/salevote', options11,	function (err, response, data) {
						if (err) console.log('[%s] Something went wrong: %s', logOnOptions.accountName, err)
						if (!err) console.log('[%s] Voted 11 of 11', logOnOptions.accountName)
					})
				})()
			};
		});
		
		if (i < bot.length) await new Promise(r => setTimeout(r, 35000))
		else  console.log('[%s] End\n------------------', logOnOptions.accountName)
	};


})();

