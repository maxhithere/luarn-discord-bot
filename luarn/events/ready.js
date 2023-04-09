const client = require("../index");

client.on("ready", () => {
    console.log(`${client.user.tag} is ready!`)
    client.user.setActivity(`in my sandbox`, { type: 'PLAYING' })

})
