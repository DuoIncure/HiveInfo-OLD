const Discord = require("discord.js");
const { Command } = require("discord.js-commando");

class info extends Command{

    constructor(client) {
        super(client, {
            name: "info",
            memberName: "info",
            aliases: ["information"],
            group: "information",
            description: "View bot information",
            details: "An informative command",
            examples: [`${client.config.prefix}info`],
            throttling: {
                duration: 5,
                usages: 1
            }
        });

    }

    run(message, args, fromPattern) {
		let description = `Hive Info is a Discord Bot created to retrieve and display statistics for The Hive Bedrock Minecraft server.\n` +
			`This includes Individual Player Statistics (Monthly and All-Time), Leaderboards (Monthly and All-Time) and hopefully extra features in the future too!\n\n` +
			`Guilds > ${this.client.guilds.size}\n` +
			`Users > ${this.client.users.size}\n` +
			`Channels > ${this.client.channels.size}\n` +
			`Latency > ${Math.round(this.client.ping)}ms`;
        const embed = new Discord.RichEmbed()
            .setTitle("Hive Info")
            .setDescription(description)
            .setColor(0x00CED1)
            .setThumbnail('https://cdn.discordapp.com/attachments/584139666111070209/597197771271045130/ba9565e757f8cea31a955375f17a6d2a.png')
        message.channel.send(embed);
    }

}
module.exports = info;