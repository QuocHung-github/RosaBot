const { checkSameRoom } = require('../../utils.js');
module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'music',
    description: 'Rosa hát được các bài ở Youtube, SoundCloud, Spotify',
    run: async(client, message, args) => {
        if (checkSameRoom(message)) return;
        await client.player.play(message, args.join(''), true);
    }
}