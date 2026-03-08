const { log } = require("../../core/logger");

module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    log(`Logged in as ${client.user.tag}`);
  }
};

const { ActivityType } = require("discord.js");

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    console.log(`Logged in as ${client.user.tag}`);

    function updateStatus() {
      const guild = client.guilds.cache.first();
      if (!guild) return;

      const memberCount = guild.memberCount.toLocaleString();

      client.user.setPresence({
        activities: [{
          name: `${memberCount} Members `,
          type: ActivityType.Watching
        }],
        status: "online"
      });
    }

    // Update immediately
    updateStatus();

    // Update every 5 minutes
    setInterval(updateStatus, 5 * 60 * 1000);
  }
};