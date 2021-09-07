const axios = require('axios');
const { MessageEmbed } = require('discord.js');
const { stripIndent } = require ('common-tags');
module.exports = {
    name: 'instagram',
    category: 'fun',
    aliases: ['IG'],
    run:  async(client, message, args) =>{
        if(!args[0]) return message.channel.send('Nhập tên Instagram vào nè');
        const instagram_id = args.join(' ');
        const url = `https://www.instagram.com/${instagram_id}/?__a=1`;
        // console.log(url);
        let res;
        try {
            res = await axios.get(url)
        } catch(e){
            return message.channel.send('Tên Instagram không hợp lệ!');
        }
        const account = res.data.graphql.user;
        const embed = new MessageEmbed()
            .setColor('RAMROM')
            .setTitle(account.full_name)
            .setURL(`https://www.instagram.com/${instagram_id}/`)
            .setThumbnail(account.profile_pir_url_hd)
            .addField("Thông tin cá nhân", stripIndent `** Tên người dùng:** ${account.username}
            ** Tên đầy đủ: ** ${account.full_name}
            ** Bio: ** ${account.biography.length == 0 ? "Không có": account.biography}
            ** Số bài đăng: ** ${account.edge_owner_to_timeline_media.count}
            ** Người theo dõi bạn: ** ${account.edge_followed_by.count}
            ** Người bạn theo dõi: ** ${account.followed_by_viewer.count}
            ** Tài khoản Private ? ** ${account.is_private ? " có 🔒" : " không 🔓" }` );

            message.channel.send(embed)

    }
}