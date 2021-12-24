# steam-awards-farming
nodejs tool to quick get steam trading cards for many accs

**Only for SDA connected accs**

1. Download NodeJS
2. Download this repo, unpack
3. in the bot folder open powershell or terminal, enter: `npm i`
4. open `accs.txt`, add accs:
```
username1:password1:shared_secret1:identity_secret1
username2:password2:shared_secret2:identity_secret2
username4:password4:shared_secret3:identity_secret3
```
`shared_secret` and `identity_secret` can be found in the mafile

5. Open the console again, enter: `node index`. Wait some time
6. To get all items open `config.json` enter your main trade offer link. Open the console, enter: `node send_items`. wait some time

