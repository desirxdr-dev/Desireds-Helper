const { createClient } = require("./core/client");
const { loadCommands } = require("./handlers/commandHandler");
const { loadEvents } = require("./handlers/eventHandler");
const { setupProcessHandlers } = require("./handlers/errorHandler");
const { DISCORD_TOKEN } = require("./config/env");

const client = createClient();

setupProcessHandlers();
loadCommands(client);
loadEvents(client);

client.login(DISCORD_TOKEN);