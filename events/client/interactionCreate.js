const { ChannelType, PermissionFlagsBits } = require("discord.js");

module.exports = {
  name: "interactionCreate",
  async execute(client, interaction) {

    // ===============================
    // CONTACT BUTTON → CREATE TICKET
    // ===============================
    if (interaction.isButton()) {

      // ORIGINAL TICKET BUTTON
      if (interaction.customId === "p_276547220675760129") {

        const CATEGORY_ID = "1476794621441867947";
        const STAFF_ROLE_ID = "1476512428031475843";

        const existing = interaction.guild.channels.cache.find(
          c => c.name === `support-${interaction.user.username}`
        );

        if (existing) {
          return interaction.reply({
            content: "<:xMark:1476780453359780105> You **already** have an **open** ticket.",
            ephemeral: true
          });
        }

const staffRole = interaction.guild.roles.cache.get(STAFF_ROLE_ID);

const channel = await interaction.guild.channels.create({
  name: `support-${interaction.user.username}`,
  topic: `ticket-owner:${interaction.user.id}`,
  type: ChannelType.GuildText,
  parent: CATEGORY_ID,
  permissionOverwrites: [
    {
      id: interaction.guild.id,
      deny: [PermissionFlagsBits.ViewChannel]
    },
    {
      id: interaction.user.id,
      allow: [
        PermissionFlagsBits.ViewChannel,
        PermissionFlagsBits.SendMessages
      ]
    },
    {
      id: staffRole.id,
      allow: [
        PermissionFlagsBits.ViewChannel,
        PermissionFlagsBits.SendMessages
      ]
    }
  ]
});

        await channel.send({
          components: [
            {
              type: 17,
              components: [
                {
                  type: 12,
                  items: [
                    {
                      media: {
                        url: "https://media.discordapp.net/attachments/1476517914260541563/1478952026552537340/image.png?ex=69aa44e8&is=69a8f368&hm=cc4f44bc2cb6405e1a2e2ac703307344a11442482b214bf418d59e2141191952&=&format=webp&quality=lossless"
                      }
                    }
                  ]
                },
                {
                  type: 14,
                  spacing: 2
                },
                {
                  type: 10,
                  content: `${interaction.user} | @everyone\n`
                },
                {
                  type: 10,
                  content: "Your support ticket has been created. Ensure to follow the guidelines listed below."
                },
                {
                  type: 14,
                  divider: false
                },
                {
                  type: 10,
                  content: "**Ticket Guidelines**\n- Do not ping any staff members or Desired; they have already been notified of your ticket being opened.\n- Remain respectful with our team.\n- Remain active and responsive within your ticket.\n- Your ticket may be closed at any time for any reason deemed fit."
                },
                {
                  type: 14,
                  spacing: 2
                },
                {
                  type: 12,
                  items: [
                    {
                      media: {
                        url: "https://media.discordapp.net/attachments/1476517914260541563/1478679346809016391/image.png?ex=69a9efb4&is=69a89e34&hm=6ab8cdc6134fa53923c6dbf8a712a993aa3dde88b6f9f40e58e28aab729fab8f&=&format=webp&quality=lossless"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        });

        return interaction.reply({
          content: `<:check:1476780433864654971>**Successfully** created ticket: ${channel}.`,
          ephemeral: true
        });

      }

      if (interaction.customId === "p_277178088477954050") {
        return interaction.reply({
  flags: 32768,
  ephemeral: true,
  components: [
            {
              type: 17,
              components: [
                {
                  type: 12,
                  items: [
                    {
                      media: {
                        url: "https://media.discordapp.net/attachments/1476517914260541563/1479581763411120365/image.png?ex=69b3cfa5&is=69b27e25&hm=f43024215b78a6f73d9d525400bee80a5ab2f17a4d5b69b8344e561ff23864de&=&format=webp&quality=lossless"
                      }
                    }
                  ]
                },
                {
                  type: 14,
                  spacing: 2
                },
                {
                  type: 10,
                  content: "` #1 ` **Payment Methods**\n- USD payment methods include:\n    - Paypal\n  - Buymeacoffee\n- USD payments automatically receive priority.\n- Robux payment is accepted."
                },
                {
                  type: 14,
                  divider: false
                },
                {
                  type: 10,
                  content: "` #2 ` **Payment Before Start**\n- You will be required to pay before Desired starts working on your order.\n- There are no exceptions; 100% payment is expected."
                },
                {
                  type: 14,
                  divider: false
                },
                {
                  type: 10,
                  content: "` #3 ` **Queue**\n- There may be a queue when ordering. It is based on a first come first serve bias.\n- You can pay extra to bypass the queue."
                },
                {
                  type: 14,
                  divider: false
                },
                {
                  type: 10,
                  content: "` #4 ` **Common Sense**\n- Use your common sense when ordering.\n- Your ticket may be closed for any reason deemed fit.\n- You will **not** be offered a refund if you violate Order Terms and your ticket is closed."
                },
                {
                  type: 14,
                  spacing: 2
                },
                {
                  type: 12,
                  items: [
                    {
                      media: {
                        url: "https://media.discordapp.net/attachments/1476517914260541563/1478679346809016391/image.png?ex=69b3d2f4&is=69b28174&hm=e3ce7b50ae6ddf1aa69728ac5c18fc5abae92308b0f2ea5ba43154a4ec24f442&=&format=webp&quality=lossless"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        });
      }

      // ===============================
      // SERVICE ORDER BUTTON
      // ===============================
      if (interaction.customId === "p_277178048489459713") {

        const CATEGORY_ID = "1476517781368209460";
        const STAFF_ROLE_ID = "1476512428031475843";

        const existing = interaction.guild.channels.cache.find(
          c => c.name === `order-${interaction.user.username}`
        );

        if (existing) {
          return interaction.reply({
            content: "<:xMark:1476780453359780105> You **already** have an **open** ticket.",
            ephemeral: true
          });
        }

const staffRole = interaction.guild.roles.cache.get(STAFF_ROLE_ID);

const channel = await interaction.guild.channels.create({
  name: `support-${interaction.user.username}`,
  topic: `ticket-owner:${interaction.user.id}`,
  type: ChannelType.GuildText,
  parent: CATEGORY_ID,
  permissionOverwrites: [
    {
      id: interaction.guild.id,
      deny: [PermissionFlagsBits.ViewChannel]
    },
    {
      id: interaction.user.id,
      allow: [
        PermissionFlagsBits.ViewChannel,
        PermissionFlagsBits.SendMessages
      ]
    },
    {
      id: staffRole.id,
      allow: [
        PermissionFlagsBits.ViewChannel,
        PermissionFlagsBits.SendMessages
      ]
    }
  ]
});

        await channel.send({
          components: [
            {
              type: 17,
              components: [
                {
                  type: 12,
                  items: [
                    {
                      media: {
                        url: "https://media.discordapp.net/attachments/1476517914260541563/1478678983577960541/image.png?ex=69abe99e&is=69aa981e&hm=a18f9817c52f335ee2bea0cf4a8367cd886cc00615f8bf248e3390c88a73524d&=&format=webp&quality=lossless"
                      }
                    }
                  ]
                },
                {
                  type: 14,
                  spacing: 2
                },
                {
                  type: 10,
                  content: `${interaction.user} | <@1476510465700921457>\n\nThanks for ordering with **Desired's Commissions**. Briefly explain the commands & features you'd like in an ordered list. Additionally, you will be asked to make embeds that the bot sends. Ensure to share the share link of each embed, along with required role IDs, and channel IDs for the bot to send messages to.`
                },
                {
                  type: 14,
                  spacing: 2
                },
                {
                  type: 12,
                  items: [
                    {
                      media: {
                        url: "https://media.discordapp.net/attachments/1476517914260541563/1478679346809016391/image.png?ex=69abe9f4&is=69aa9874&hm=a85e38873c36fce47668fd3947172dfff7101cb1a90d47076d6478164a7aec31&=&format=webp&quality=lossless"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        });

        return interaction.reply({
          content: `<:check:1476780433864654971> Ticket created: ${channel}`,
          ephemeral: true
        });

      }

    }

    // ===============================
    // SLASH COMMAND HANDLER
    // ===============================
    if (!interaction.isChatInputCommand()) return;

    const cmd = client.slashCommands.get(interaction.commandName);
    if (!cmd) return;

    try {
      await cmd.execute(interaction, client);
    } catch (err) {
      try {
        if (interaction.replied || interaction.deferred) {
          await interaction.followUp({
            content: "<:xMark:1476780453359780105> An **error** occured.",
            ephemeral: true
          });
        } else {
          await interaction.reply({
            content: "<:xMark:1476780453359780105>",
            ephemeral: true
          });
        }
      } catch {}
      console.error(err);
    }

  }
};