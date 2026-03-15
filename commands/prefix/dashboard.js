module.exports = {
  name: "dashboard",

  async execute(message) {

    try { await message.delete(); } catch {}

    await message.channel.send({
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
                "url": "https://media.discordapp.net/attachments/1476517914260541563/1482843084336267424/image.png?ex=69b86cbd&is=69b71b3d&hm=c59d4b24be4d5f793e18d187e4bf3c524cb1c89a774ead34f39385aeff23c7ed&=&format=webp&quality=lossless"
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
          "content": "Welcome to **Desired's Commissions** - your go-to bot developer. We offer premium bots and automations for you to level up your server. Additionally, we offer varous types of packages for you to purchase. Order today for a faster, cheaper, and better experience."
        },
        {
          "type": 1,
          "components": [
            {
              "style": 4,
              "type": 2,
              "label": "Support",
              "flow": {
                "actions": []
              },
              "custom_id": "p_280442048509644801"
            },
            {
              "style": 2,
              "type": 2,
              "label": "Guidelines",
              "flow": {
                "actions": []
              },
              "custom_id": "p_280442420720570370"
            },
            {
              "type": 2,
              "style": 5,
              "label": "Roblox Group",
              "url": "https://www.roblox.com/communities/703320653/Desireds-Commissions#!/about",
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
                "url": "https://media.discordapp.net/attachments/1476517914260541563/1482843709887221971/image.png?ex=69b86d52&is=69b71bd2&hm=9d9820c5b7590006d8046f775946f7cc66e77dad92a98aed53fe4a2f652d2112&=&format=webp&quality=lossless"
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