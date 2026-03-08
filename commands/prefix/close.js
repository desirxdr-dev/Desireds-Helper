const discordTranscripts = require("discord-html-transcripts");
const config = require("../../config/config");

module.exports = {
  name: "close",

  async execute(message) {

    const STAFF_ROLE_ID = "1476512428031475843";
    const LOG_CHANNEL_ID = "1476518015133810819";

    // only allow in ticket channels
if (
  !message.channel.name.startsWith("support-") &&
  !message.channel.name.startsWith("order-")
) {
  return message.reply(`${config.EMOJIS.x} This command can only be used in **tickets**.`);
}

    // permission check
    if (
      !message.member.roles.cache.has(STAFF_ROLE_ID) &&
      !message.member.permissions.has("Administrator")
    ) {
      return message.reply(`${config.EMOJIS.x} You do **not** have permission to **close** this ticket.`);
    }

    const logChannel = message.guild.channels.cache.get(LOG_CHANNEL_ID);

    await message.reply(`${config.EMOJIS.check} *Closing ticket...*`);

    setTimeout(async () => {

      try {

        // generate transcript
        const transcript = await discordTranscripts.createTranscript(message.channel, {
          limit: -1,
          filename: "transcript.html"
        });

        // ticket info
        const channelName = message.channel.name;
        const channelId = message.channel.id;
        const closedBy = message.author;

        // get ticket owner from topic
        let openedBy = "Unknown";

        if (message.channel.topic?.startsWith("ticket-owner:")) {
          const id = message.channel.topic.split(":")[1];
          openedBy = `<@${id}>`;
        }

        // send log
        if (logChannel) {
          await logChannel.send({
            files: [transcript],
            flags: 32768,
            components: [
              {
                type: 17,
                components: [
                  {
                    type: 10,
                    content: "# Ticket Transcript"
                  },
                  {
                    type: 14
                  },
                  {
                    type: 10,
                    content: `Channel Name: ${channelName}\nChannel ID: ${channelId}`
                  },
                  {
                    type: 14
                  },
                  {
                    type: 10,
                    content: `Opened By: ${openedBy}\nClosed By: ${closedBy}`
                  },
                  {
                    type: 14
                  },
                  {
                    type: 10,
                    content: "**Transcript**"
                  },
                  {
                    type: 13,
                    file: {
                      url: "attachment://transcript.html"
                    }
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
        }

      } catch (err) {
        console.error("Transcript error:", err);
      }

      // delete ticket
      message.channel.delete().catch(() => {});

    }, 5000);

  }
};