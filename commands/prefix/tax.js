const config = require("../../config/config");

module.exports = {
  name: "tax",

  async execute(message, args) {

    const amount = Number(args[0]);

    if (!amount) {
      return message.reply(`${config.EMOJIS.x} Ensure to **provide** a valid **integer**.`);
    }

    const needed = Math.ceil(amount / 0.7);

    message.reply({
  "flags": 32768,
  "components": [
    {
      "type": 17,
      "components": [
        {
          "type": 10,
          "content": `To receive **${amount} ROBUX**, you need to charge **${needed} ROBUX**.`
        }
      ]
    }
  ]
});
  }
};