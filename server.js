client.on("message", zaid => {
if (zaid.content === "=") {
const bot = new Discord.RichEmbed()
.setAuthor(client.user.username, client.user.avatarURL)
.setColor("#99889")
.addField(
"**____خێرای خەتەکەت____**: ", 
` ${Date.now(ms) - zaid.createdTimestamp}` + "__ ms__ ",
true)  
 
.addField("**__سێرڤەرەکان__** : ", `→ ${client.guilds.size}`, true)
.addField("**__چەناڵەکەن__** : ", `→ ${client.channels.size} `, true)
.addField("**__میمبەرەکان__** : ", `→ ${client.users.size} `, true)
.addField("**__ناوی بۆتەکە__** : ", `→ ${client.user.tag} `, true)
.addField("**دروست کەری بۆتەکە** : ", `→ <@699990440371552356>`,)
​
​
.setImage(
"https://cdn.discordapp.com/attachments/710048021416640563/714248951171121202/20200423_135714.gif"
)
.setFooter(zaid.author.username, zaid.author.avatarURL);
zaid.channel.send(bot);
}
});
client.login("NzY5ODIxOTIxOTgxNDk3MzU1.X5UmiA.6u5htbs8vrt2OsWfwu8x0tjsI7k")


​
