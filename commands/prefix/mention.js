module.exports = {
  name: "mentions",

  async execute(message) {

    try { await message.delete(); } catch {}

    await message.channel.send({
  "content": "Avoid mentioning users without a valid reason to do so. Additionally, do **not** ping **Desired** without a valid reason. Moderation actions may be taken against you. Mass mentioning users is strictly prohibited."
});

  }
};