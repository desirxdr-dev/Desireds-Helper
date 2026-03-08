const { ActivityType, EmbedBuilder } = require("discord.js");

const WELCOME_CHANNEL_ID = "1476518850362216582";

module.exports = {
  name: "guildMemberAdd",
  async execute(client, member) {

    // ======================
    // Update Bot Status
    // ======================
    const memberCount = member.guild.memberCount.toLocaleString();

    client.user.setPresence({
      activities: [{
        name: ` ${memberCount} Members`,
        type: ActivityType.Watching
      }],
      status: "online"
    });

    // ======================
    // Welcome Message
    // ======================
    const channel = member.guild.channels.cache.get(WELCOME_CHANNEL_ID);
    if (!channel) return;

    channel.send({
  "content": `Welcome ${member} to **Desired's Commissions**, your go-to developer. Level up your server by ordering a bot. Cheaper, faster, better - Desired's Commissions.`,
  "components": [
    {
      "type": 1,
      "components": [
        {
          "style": 2,
          "type": 2,
          "label": `${memberCount}`,
          "emoji": {
            "id": "1476805107629686966",
            "name": "members",
            "animated": false
          },
          "disabled": true,
          "flow": {
            "actions": []
          },
          "custom_id": "p_277188872784318465"
        },
        {
          "type": 2,
          "style": 5,
          "label": "Dashboard",
          "url": "https://discord.com/channels/1476512339200184427/1476518418935971895",
        }
      ]
    }
  ]
});
  }
};