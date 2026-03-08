const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "service",

  async execute(message) {

    message.channel.send({
  "flags": 32768,
  "components": [
    {
      "type": 17,
      "components": [
        {
          "type": 12,
          "items": [
            {
              "media": {
                "url": "https://media.discordapp.net/attachments/1476517914260541563/1478678983577960541/image.png?ex=69abe99e&is=69aa981e&hm=a18f9817c52f335ee2bea0cf4a8367cd886cc00615f8bf248e3390c88a73524d&=&format=webp&quality=lossless"
              }
            }
          ]
        },
        {
          "type": 14,
          "spacing": 2
        },
        {
          "type": 10,
          "content": "If you're looking to order a bot from Desired, ensure to review our Order ToS before ordering. Click 'Order' to open a ticket for your order. Additionally, keep in mind that there may be a queue. The queue is decided on a first come first serve order, however, priority may be purchased to bypass the queue."
        },
        {
          "type": 14,
          "spacing": 1,
          "divider": false
        },
        {
          "type": 1,
          "components": [
            {
              "style": 1,
              "type": 2,
              "label": "Order",
              "flow": {
                "actions": []
              },
              "custom_id": "p_277178048489459713"
            },
            {
              "style": 2,
              "type": 2,
              "label": "Order Terms",
              "flow": {
                "actions": [
                  {
                    "type": 6,
                    "flags": 64,
                    "backupId": "277179759220232193",
                    "backupMessageIndex": 0
                  }
                ]
              },
              "custom_id": "p_277178088477954050"
            }
          ]
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
                "url": "https://media.discordapp.net/attachments/1476517914260541563/1478679346809016391/image.png?ex=69abe9f4&is=69aa9874&hm=a85e38873c36fce47668fd3947172dfff7101cb1a90d47076d6478164a7aec31&=&format=webp&quality=lossless"
              }
            }
          ]
        }
      ]
    }
  ]
});

  }
};