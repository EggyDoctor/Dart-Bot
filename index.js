const Discord = require("discord.js")

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

client.on("ready", async function() {
  console.log("ready")
  const gen = await client.channels.fetch("934029386838073357")
})

client.login(process.env.TOKEN)
