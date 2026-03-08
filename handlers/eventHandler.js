const fs = require("fs");
const path = require("path");

function loadEvents(client) {
  const eventsPath = path.join(__dirname, "..", "events");

  function walk(dir) {
    for (const file of fs.readdirSync(dir)) {
      const full = path.join(dir, file);

      if (fs.statSync(full).isDirectory()) {
        walk(full);
        continue;
      }

      if (!file.endsWith(".js")) continue;

      const evt = require(full);
      if (!evt?.name || !evt?.execute) continue;

      if (evt.once) client.once(evt.name, (...args) => evt.execute(client, ...args));
      else client.on(evt.name, (...args) => evt.execute(client, ...args));
    }
  }

  walk(eventsPath);
}

module.exports = { loadEvents };