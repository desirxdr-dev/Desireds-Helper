const { error } = require("../core/logger");

function setupProcessHandlers() {
  process.on("unhandledRejection", (reason) => error("Unhandled Rejection:", reason));
  process.on("uncaughtException", (err) => error("Uncaught Exception:", err));
}

module.exports = { setupProcessHandlers };