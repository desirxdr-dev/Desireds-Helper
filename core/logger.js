function log(...args) { console.log("[BOT]", ...args); }
function warn(...args) { console.warn("[BOT]", ...args); }
function error(...args) { console.error("[BOT]", ...args); }

module.exports = { log, warn, error };