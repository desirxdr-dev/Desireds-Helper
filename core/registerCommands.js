const { REST, Routes } = require("discord.js");
const fs = require("fs");
const path = require("path");
const { CLIENT_ID, GUILD_ID, DISCORD_TOKEN } = require("../config/env");

(async () => {
  const commands = [];
  const slashPath = path.join(__dirname, "..", "commands", "slash");
  const slashFiles = fs.readdirSync(slashPath).filter(f => f.endsWith(".js"));

  for (const file of slashFiles) {
    const cmd = require(path.join(slashPath, file));
    if (cmd?.data) commands.push(cmd.data.toJSON());
  }

  const rest = new REST({ version: "10" }).setToken(DISCORD_TOKEN);

  await rest.put(
    Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
    { body: commands }
  );

  console.log(`[DEPLOY] Deployed ${commands.length} slash command(s) to guild.`);
})();