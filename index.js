const bot = new (require('discord.js')).Client()

const play = conn => {
    let dispatcher = conn.playFile(`./${process.env.NUM}.mp3`, {
        passes: 10,
        volume: 0.1
    })

    dispatcher.on('end', () => {
        setTimeout(() => {
            play(conn)
        }, 2000)
    })

    dispatcher.on('error', () => {
        setTimeout(() => {
            play(conn)
        }, 2000)
    })
}

const rooms = ['473760354787393537','473760521519235072','473760454108512256']

bot.on('ready', () => {
    console.log('authorised as ' + bot.user.tag )

    bot.channels.get(rooms[parseInt(process.env.NUM)-1]).join().then(play)
})

bot.login(process.env.TOKEN)
