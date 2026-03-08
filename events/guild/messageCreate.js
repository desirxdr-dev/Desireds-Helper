const config = require("../../config/config");

module.exports = {
  name: "messageCreate",
  async execute(client, message) {

    // =====================
    // 🔹 LOG INCOMING DMs
    // =====================
    if (!message.guild && !message.author.bot) {

      const LOG_CHANNEL_ID = "1477397670837489796";
      const logChannel = client.channels.cache.get(LOG_CHANNEL_ID);
      if (!logChannel) return;

      logChannel.send({
  "flags": 32768,
  "components": [
    {
      "type": 17,
      "components": [
        {
          "type": 10,
          "content": "# Message Received"
        },
        {
          "type": 14
        },
        {
          "type": 10,
          "content": `A new message has been received by <@${messge.author.id}> (${message.author.id}).`
        },
        {
          "type": 14,
          "divider": false
        },
        {
          "type": 10,
          "content": `**Message**: ${message.content}`
        },
        {
          "type": 14,
          "spacing": 2
        },
        {
          "type": 12,
          "items": [
            {
              "media": {
                "url": "https://media.discordapp.net/attachments/1476517914260541563/1476772972797886579/image.png?ex=69a451c1&is=69a30041&hm=381fe067665f1f7eaf5dffb9d58f99686de9737b9d108a67353eb7336220c99a&=&format=webp&quality=lossless"
              }
            }
          ]
        }
      ]
    }
  ]
});

      return;
    }

    // =====================
    // 🔹 PREFIX COMMANDS
    // =====================
    if (message.author.bot) return;
    if (!message.content.startsWith(config.PREFIX)) return;

    const args = message.content.slice(config.PREFIX.length).trim().split(/\s+/);
    const name = args.shift()?.toLowerCase();
    if (!name) return;

    const cmd = client.prefixCommands.get(name);
    if (!cmd) return;

    try {
      await cmd.execute(message, args, client);
    } catch (err) {
      console.error(err);
      message.reply(`${config.EMOJIS.x} An **error** occured while executing this command.`);
    }
  }
};