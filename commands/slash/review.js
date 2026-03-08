const { SlashCommandBuilder } = require("discord.js");
const config = require("../../config/config");

const REVIEW_CHANNEL_ID = "1478677363222118611";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("review")
    .setDescription("Leave a review for your recent order.")

    .addStringOption(option =>
      option
        .setName("rating")
        .setDescription("Select a rating from 1-5.")
        .setRequired(true)
        .addChoices(
          { name: "⭐", value: "⭐" },
          { name: "⭐⭐", value: "⭐⭐⭐" },
          { name: "⭐⭐⭐", value: "⭐⭐⭐" },
          { name: "⭐⭐⭐⭐", value: "⭐⭐⭐⭐" },
          { name: "⭐⭐⭐⭐⭐", value: "⭐⭐⭐⭐⭐" }
        )
    )

    .addStringOption(option =>
      option
        .setName("feedback")
        .setDescription("Input feedback for Desired.")
        .setRequired(true)
    ),

  async execute(interaction) {

    const rating = interaction.options.getString("rating");
    const feedback = interaction.options.getString("feedback");

    const reviewChannel = interaction.guild.channels.cache.get(REVIEW_CHANNEL_ID);

    if (!reviewChannel) {
      return interaction.reply({
        content: `${config.EMOJIS.x} Review channel not found.`,
        ephemeral: true
      });
    }

    // Convert rating to stars

    await reviewChannel.send({
      flags: 32768,
      components: [
        {
          type: 17,
          components: [

            {
              type: 12,
              items: [
                {
                  media: {
                    url: "https://media.discordapp.net/attachments/1476517914260541563/1476749594628194304/image.png"
                  }
                }
              ]
            },

            { type: 14, spacing: 2 },

            {
              type: 10,
              content: `**Client**\n${interaction.user}`
            },

            { type: 14, divider: false },

            {
              type: 10,
              content: `**Designer**\n${designer}`
            },

            { type: 14, divider: false },

            {
              type: 10,
              content: `**Product**\n${product}`
            },

            { type: 14, divider: false },

            {
              type: 10,
              content: `**Rating**\n${stars}`
            },

            { type: 14, divider: false },

            {
              type: 10,
              content: `**Feedback**\n${feedback}`
            },

            { type: 14, spacing: 2 },

            {
              type: 12,
              items: [
                {
                  media: {
                    url: "https://media.discordapp.net/attachments/1476517914260541563/1476772972797886579/image.png"
                  }
                }
              ]
            }

          ]
        }
      ]
    });

    return interaction.reply({
      content: `${config.EMOJIS.check} **Successfully** submitted your review. Thanks for ordering with **Clover Customs**.`,
      ephemeral: true
    });
  }
};