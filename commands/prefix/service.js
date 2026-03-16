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
                "url": "https://media.discordapp.net/attachments/1476517914260541563/1482843296706596966/image.png?ex=69b915af&is=69b7c42f&hm=483fcb18e589f180eb09b0104f43b6d7b1cb881183741f959a8d5534a1acadf3&=&format=webp&quality=lossless"
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
                "url": "https://media.discordapp.net/attachments/1476517914260541563/1482843709887221971/image.png?ex=69b91612&is=69b7c492&hm=fb456d4ed313b7176fc3515820e0767ea7f50a8656cd8f77e68d039cbda9d3cb&=&format=webp&quality=lossless"
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