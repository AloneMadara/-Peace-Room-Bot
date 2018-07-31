let Discord = require('discord.js');
let client = new Discord.Client();
function play () {
    let dispatcher = conn.playFile(`./${process.env.NUM}.mp3`);
    dispatcher.on('end', play);
}
let arr = [
'','',''
]
client.on('ready', () => {

    console.log('authorised as ' + client.user.tag );
    client.channels.get(arr[parseInt(process.env.NUM)-1]).join().then(conn => {
        play();
    })
});
client.login(process.env.TOKEN)
