const { Client, GatewayIntentBits, Collection } = require("discord.js");

function createClient() {
  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildMembers
    ]
  });

  client.slashCommands = new Collection();
  client.prefixCommands = new Collection();

  return client;
}

module.exports = { createClient };