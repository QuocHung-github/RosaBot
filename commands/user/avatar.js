const { MessageEmbed} = require('discord.js');
module.exports = {
    name: 'avatar',
    category: 'user',
    aliases: ['avt'],
    run: (client, message, args) =>{
            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
            const URL = member.user.avatarURL({format: 'jpg', dynamic : true, size: 1024});
            const avatarEmbed = new MessageEmbed()
                .setImage(URL)
                .setURL(URL)
                .setTitle('Download now')
            message.channel.send(avatarEmbed);
}
}