const fs = require("fs");
const path = require("path");

function loadCommands(client) {
  // Slash
  const slashPath = path.join(__dirname, "..", "commands", "slash");
  const slashFiles = fs.existsSync(slashPath) ? fs.readdirSync(slashPath).filter(f => f.endsWith(".js")) : [];

  for (const file of slashFiles) {
    const cmd = require(path.join(slashPath, file));
    if (!cmd?.data?.name || !cmd?.execute) continue;
    client.slashCommands.set(cmd.data.name, cmd);
  }

  // Prefix
  const prefixPath = path.join(__dirname, "..", "commands", "prefix");
  const prefixFiles = fs.existsSync(prefixPath) ? fs.readdirSync(prefixPath).filter(f => f.endsWith(".js")) : [];

  for (const file of prefixFiles) {
    const cmd = require(path.join(prefixPath, file));
    if (!cmd?.name || !cmd?.execute) continue;
    client.prefixCommands.set(cmd.name, cmd);
  }
}

module.exports = { loadCommands };