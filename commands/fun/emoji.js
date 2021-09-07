const {Util, MessageEmbed} = require ('discord.js');
const {parse} = require('twemoji-parser');
module.exports = {
    name: 'emoji',
    category: 'fun',
    aliases: ['e'],
    run: (client, message, args) =>{
        const emoji = args[0];
                if (!emoji) return message.channel.send("Bạn chưa nhập emoji nào kìa");
    
                let custom = Util.parseEmoji(emoji);
                const embed = new MessageEmbed()
                    .setTitle(`Phên bản phóng to của emoji: ${emoji}`)
                    .setColor("RAMROM");
    
                if (custom.id){
                    let link = `https"//cdn.discordapp.com/emojis/${custom.animated ? "git" : "png"}`
                    embed.setImage(link)
                        .setFooter(`Emoji ID: ${custom.id}`)
                    return message.channel.send(embed)
                } else {
                    let parsed = parse(emoji, {assetType: 'png'})
                    if (!parsed[0]) return message.channel.send('Emoji không hợp lệ!');
                    embed.setImage(parsed[0].url);
                    return message.channel.send(embed);
                }
    }
}