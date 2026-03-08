const config = require("../../config/config");

module.exports = {
  name: "say",

  async execute(message, args) {

    // optional: delete trigger
    try {
      await message.delete();
    } catch {}

    if (!args.length) {
      return message.reply(`${config.EMOJIS.x} Failed to **fetch** message provided.`);
    }

    const text = args.join(" ");

    await message.channel.send(text);
  }
};