module.exports = {
  name: "payment",

  async execute(message, args) {
    message.channel.send({
  "flags": 32768,
  "components": [
    {
      "type": 17,
      "components": [
        {
          "type": 10,
          "content": "## Payment Options"
        },
        {
          "type": 14,
          "spacing": 2
        },
        {
          "type": 10,
          "content": "You can view the numerous payment options Desired takes here."
        },
        {
          "type": 1,
          "components": [
            {
              "type": 2,
              "style": 5,
              "label": "Paypal",
              "url": "https://paypal.me/imdylanry",
            },
            {
              "type": 2,
              "style": 5,
              "label": "Robux",
              "url": "https://www.roblox.com/communities/703320653/Desireds-Commissions#!/store",
            },
            {
              "type": 2,
              "style": 5,
              "label": "Buy Me a Coffee",
              "url": "https://buymeacoffee.com/desiredcomm",
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
                "url": "https://media.discordapp.net/attachments/1476517914260541563/1478679346809016391/image.png?ex=69a9efb4&is=69a89e34&hm=6ab8cdc6134fa53923c6dbf8a712a993aa3dde88b6f9f40e58e28aab729fab8f&=&format=webp&quality=lossless"
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