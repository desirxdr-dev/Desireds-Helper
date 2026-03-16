const { ChannelType, PermissionFlagsBits } = require("discord.js");

module.exports = {
  name: "interactionCreate",
  async execute(client, interaction) {

    // ===============================
    // CONTACT BUTTON → CREATE TICKET
    // ===============================
    if (interaction.isButton()) {

      // ORIGINAL TICKET BUTTON
      if (interaction.customId === "p_280442048509644801") {

        const CATEGORY_ID = "1476794621441867947";
        const STAFF_ROLE_ID = "1482030945883263046";

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
    id: interaction.guild.roles.everyone.id,
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
    id: STAFF_ROLE_ID,
    allow: [
      PermissionFlagsBits.ViewChannel,
      PermissionFlagsBits.SendMessages
    ]
  }
]
});

        await channel.send({
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
                        url: "https://media.discordapp.net/attachments/1476517914260541563/1482843592719597814/image.png?ex=69b86d36&is=69b71bb6&hm=cd0d58cd2ce377ec98e119dde9b0d2adb2823b9e8bedac9915333a8f602cbd3f&=&format=webp&quality=lossless"
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
                        url: "https://media.discordapp.net/attachments/1476517914260541563/1482843709887221971/image.png?ex=69b86d52&is=69b71bd2&hm=9d9820c5b7590006d8046f775946f7cc66e77dad92a98aed53fe4a2f652d2112&=&format=webp&quality=lossless"
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


      if (interaction.customId === "p_280442420720570370") {
        return interaction.reply({
  "flags": 32768,
  ephemeral: true,
  "components": [
    {
      "type": 17,
      "components": [
        {
          "type": 12,
          "items": [
            {
              "media": {
                "url": "https://media.discordapp.net/attachments/1476517914260541563/1482843237067522129/image.png?ex=69b86ce1&is=69b71b61&hm=a9382a57f881785c7d7800d8bd10bbd6f59b073d19a2121ac2ea7779ac482fca&=&format=webp&quality=lossless"
              }
            }
          ]
        },
        {
          "type": 14,
          "spacing": 2
        },
        {
          "type": 10,
          "content": "` #1 ` **Discord ToS & Community Guidelines**\n- You are required to follow all guidelines listed within [Discord ToS](https://discord.com/terms) & [Discord Community Guidelines](https://discord.com/guidelines). \n- Failure to do so will result in a non-appealable ban from our server & a report to Discord."
        },
        {
          "type": 14,
          "divider": false
        },
        {
          "type": 10,
          "content": "` #2 ` **Respect**\n- Disrespect, hateful speech, or discrimination is prohibited.\n- Racism is strictly prohibited."
        },
        {
          "type": 14,
          "divider": false
        },
        {
          "type": 10,
          "content": "` #3 ` **Disruptions & Channel Usage**\n- Disruptions, drama, & pings should be kept to a minimum.\n- Mentioning Management+ without a valid reason will result in moderation.\n- Ensure to use the correct channel for the correct usage."
        },
        {
          "type": 14,
          "divider": false
        },
        {
          "type": 10,
          "content": "` #4 ` **Common Sense**\n- Use your common sense at all times.\n- You may be moderated for reasons that are not listed here."
        },
        {
          "type": 14,
          "spacing": 2
        },
        {
          "type": 12,
          "items": [
            {
              "media": {
                "url": "https://media.discordapp.net/attachments/1476517914260541563/1482843592719597814/image.png?ex=69b915f6&is=69b7c476&hm=187b95ef19ed1fb46f2fa6137413a9eba9049e97881875ea6df5a1bc493c816b&=&format=webp&quality=lossless"
              }
            }
          ]
        }
      ]
    }
  ]
})
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
                        url: "https://media.discordapp.net/attachments/1476517914260541563/1482843709887221971/image.png?ex=69b91612&is=69b7c492&hm=fb456d4ed313b7176fc3515820e0767ea7f50a8656cd8f77e68d039cbda9d3cb&=&format=webp&quality=lossless"
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
                        url: "https://media.discordapp.net/attachments/1476517914260541563/1482843709887221971/image.png?ex=69b91612&is=69b7c492&hm=fb456d4ed313b7176fc3515820e0767ea7f50a8656cd8f77e68d039cbda9d3cb&=&format=webp&quality=lossless"
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
        const STAFF_ROLE_ID = "1482030943198773400";

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
  name: `order-${interaction.user.username}`,
  topic: `ticket-owner:${interaction.user.id}`,
  type: ChannelType.GuildText,
  parent: CATEGORY_ID,
  permissionOverwrites: [
  {
    id: interaction.guild.roles.everyone.id,
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
    id: STAFF_ROLE_ID,
    allow: [
      PermissionFlagsBits.ViewChannel,
      PermissionFlagsBits.SendMessages
    ]
  }
]
});

        await channel.send({
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
                        url: "https://media.discordapp.net/attachments/1476517914260541563/1482843659970936952/image.png?ex=69b91606&is=69b7c486&hm=108603f541eaa03e667fab602e64228c75414a9e87f46d3524b99b010cf5d624&=&format=webp&quality=lossless"
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
                        url: "https://media.discordapp.net/attachments/1476517914260541563/1482843709887221971/image.png?ex=69b91612&is=69b7c492&hm=fb456d4ed313b7176fc3515820e0767ea7f50a8656cd8f77e68d039cbda9d3cb&=&format=webp&quality=lossless"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        });

        return interaction.reply({
          content: `<:check:1476780433864654971> Order created: ${channel}`,
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