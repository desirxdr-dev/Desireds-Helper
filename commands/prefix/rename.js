const config = require("../../config/config");

module.exports = {
  name: "rename",

  async execute(message, args) {

    const STAFF_ROLE_ID = "1476512428031475843";

    // permission check
    if (
      !message.member.roles.cache.has(STAFF_ROLE_ID) &&
      !message.member.permissions.has("Administrator")
    ) {
      return message.reply(`${config.EMOJIS.x} You do **not** have permission to use this command.`);
    }

    // only allow in tickets


    const newName = args.join("-").toLowerCase();

    if (!newName) {
      return message.reply(`${config.EMOJIS.x} Provide a **new ticket name**.`);
    }

    try {

      const prefix = message.channel.name.startsWith("order-")
        ? "order"
        : "support";

      await message.channel.setName(`${newName}`);

      message.reply(`${config.EMOJIS.check} **Successfully** renamed to **${newName}**.`);

    } catch (err) {

      console.error(err);
      message.reply(`${config.EMOJIS.x} Failed to rename ticket.`);

    }

  }
};