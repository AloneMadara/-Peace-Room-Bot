let Discord = require('discord.js');
let client = new Discord.Client();
function play (conn) {
    let dispatcher = conn.playFile(`./${process.env.NUM}.mp3`, {passes: 10}, volume: 0.1
);
    dispatcher.on('end', () => {
        play(conn);
    });
}
let arr = [
'473760354787393537','473760521519235072','473760454108512256'
]
client.on('ready', () => {

    console.log('authorised as ' + client.user.tag );
    client.channels.get(arr[parseInt(process.env.NUM)-1]).join().then(conn => {
        play(conn);
    })
});
client.login(process.env.TOKEN)
