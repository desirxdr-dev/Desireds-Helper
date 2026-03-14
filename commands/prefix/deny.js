const { PermissionFlagsBits } = require("discord.js");

const REQUIRED_ROLE_ID = "1482030945883263046";
const LOG_CHANNEL_ID = "1476518757324292096";

module.exports = {
  name: "deny",

  async execute(message, args) {

if (
  !message.member.roles.cache.has(REQUIRED_ROLE_ID) &&
  !message.member.permissions.has("Administrator")
) {
      return message.reply("<:xMark:1476780453359780105> You do **not** have the **required** role to execute this command.");
    }

    const userId = args[0];
    if (!userId) {
      return message.reply("<:xMark:1476780453359780105> Failed to **fetch** a valid user ID.");
    }

    const member = await message.guild.members.fetch(userId).catch(() => null);
    if (!member) {
      return message.reply("Failed to **fetch** user.");
    }


    try {
      await message.delete();
    } catch (err) {
    }


    await message.channel.send({
  "flags": 32768,
  "components": [
    {
      "type": 17,
      "components": [
        {
          "type": 10,
          "content": `# <:verified:1482405307585138830> Application Denied\n${member}`
        },
        {
          "type": 14,
          "spacing": 2
        },
        {
          "type": 10,
          "content": "Thanks for showing interest in becoming a moderator at **Desired's Commissions**. Your application has been denied. This may be due to a lack of detail or past experience. Denial reasons will **not** be disclosed."
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
                "url": "https://media.discordapp.net/attachments/1476517914260541563/1478679346809016391/image.png?ex=69b675f4&is=69b52474&hm=20410716bf07221bf920f99144e7dbf7dbc54e0752c557782b5977d8a11fa11b&=&format=webp&quality=lossless"
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