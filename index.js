const { Client, MessageEmbed, Util }= require('discord.js');
const client = new Client;
const {token} = require('./config.json');
const { parse } = require('twemoji-parser');
const { default: Collection } = require('@discordjs/collection');
// const { Player } = require('discord-player');
// const player = new Player (client, {
//     ytdDownloadOptions: {fillter: "audioonly"}
// });


// client.player = player;
client.on("ready", ()=> {
    console.log(`${client.user.username} đã sẳn sàng hoạt động`);

    client.user.setPresence({
        activity: {
            name: "Đang code",
            type: 'PLAYING'
        },
        status: 'online'
    })
})

// client.player.on('trackStart', (message, track) => message.channel.send(` Rosa đang hát bài \`${track.title}\`...`));
// client.player.on('trackAdd', (message, queue, track) => message.channel.send(` Đã thêm \`${track.title}\` vào danh sách chờ`));
// client.player.om('playlistAdd', (message, queue, track) => message.channel.send(` Đã thêm \`${playlist.track.length}\` bài hát vào danh sách chờ!`));


client.commands = new Collection;
client.aliases = new Collection;

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});




client.on("message", message => {
    if (message.author.bot) return;
    if (!message.guild) return;
    const prefix = "Rosa"
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd =  args.shift().toLowerCase();
    if (cmd.length === 0) return;
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) command.run(client, message, args);
});

// client.on("message", async message => {
//     if (command){
//         if (command.category === 'music' && !message.member.voice.channel) return message.channel.send('Vui lòng vào room voice để có thể sử dụng lệnh!');
//         command.run(client, message, args);
//     }
// })

client.login(token);