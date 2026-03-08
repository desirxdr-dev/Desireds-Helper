const REQUIRED_ROLE_ID = "1476512430661177436";
const DONOR_ROLE_ID = "1476512440887021639";
const LOG_CHANNEL_ID = "1476518757324292096";

module.exports = {
  name: "donation",

  async execute(message, args) {

 

if (
  !message.member.roles.cache.has(REQUIRED_ROLE_ID) &&
  !message.member.permissions.has("Administrator")
) {
      return message.reply("<:xMark:1476780453359780105> You do **not** have the **required** role to execute this command.");
    }

    const userId = args[0];
    const amount = args[1];

    if (!userId || !amount) {
      return message.reply("<:xMark:1476780453359780105> Ensure to input a valid **user ID** and **amount**.");
    }

    const member = await message.guild.members.fetch(userId).catch(() => null);
    if (!member) {
      return message.reply("Failed to **fetch** user.");
    }

    await member.roles.add(DONOR_ROLE_ID);

    const logChannel = message.guild.channels.cache.get(LOG_CHANNEL_ID);
    if (!logChannel) return;

    try {
      await message.delete();
    } catch (err) {
    }   
    await logChannel.send({
  "flags": 32768,
  "components": [
    {
      "type": 17,
      "components": [
        {
          "type": 10,
          "content": `<:gift:1476806352801370172> Thank you ${member} for donating **${amount} ROBUX**! We greatly appreciate your generous donation to the community.`
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
                "url": "https://media.discordapp.net/attachments/1476517914260541563/1477781364198608966/Screenshot_2026-02-19_212527.png?ex=69a602a5&is=69a4b125&hm=80cf03649f009744135a10f9265a8192b1ee775a650c9201c5a36878daec1fdb&=&format=webp&quality=lossless"
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