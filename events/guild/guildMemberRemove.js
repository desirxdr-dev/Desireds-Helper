const { ActivityType } = require("discord.js");

module.exports = {
  name: "guildMemberRemove",
  async execute(client, member) {
    const memberCount = member.guild.memberCount.toLocaleString();

    client.user.setPresence({
      activities: [{
        name: `${memberCount} Members`,
        type: ActivityType.Watching
      }],
      status: "online"
    });
  }
};