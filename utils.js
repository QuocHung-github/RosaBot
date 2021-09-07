const checkSameRoom = (message) => {
    if(!message.member.voice.channel) return message.reply(' Mấy anh trai phải vào room voice mới bảo Rosa hát được chứ! ');
    if(!message.guild.me.voice.channelID || message.me.voice.channelID == message.member.voice.channelID) return;
    return message.reply('Ơ kìa phải chung phòng với Rosa thì mới nghe hát được chứ nhỉ');
}

module.exports = {
    checkSameRoom,
}