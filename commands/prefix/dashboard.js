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
                "url": "https://media.discordapp.net/attachments/1476517914260541563/1478948245966164090/image.png?ex=69aa4163&is=69a8efe3&hm=c3b13cae1c4cc4a4e42c6f4679589f42b1748b339eee8f927ad0620fa1b46b52&=&format=webp&quality=lossless"
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
          "content": "Welcome to **Desired's Commissions** — your go-to bot developer for faster, cheaper, and better services. Desired is an experienced developer who gets commissions done quickly and properly for cheap prices. Level up your server today with a brand new, clean, and fresh bot to help you automate your server further."
        },
        {
          "type": 14,
          "divider": false
        },
        {
          "type": 1,
          "components": [
            {
              "style": 4,
              "type": 2,
              "label": "Support",

              "custom_id": "p_276547220675760129"
            },
            {
              "type": 2,
              "style": 5,
              "label": "Portfolio (Coming Soon)",
              "url": "https://discohook.app/",
              "disabled": true,
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