const { Command } = require("discord.js-commando");

class help extends Command{

    constructor(client) {
        super(client, {
            name: "help",
            memberName: "help",
            aliases: [],
            group: "information",
            description: "View the help menu",
            details: "Informative Command",
            examples: [`${client.config.prefix}help`],
            throttling: {
                duration: 5,
                usages: 1
            },
        });

    }

    async run(message, args, fromPattern) {
        var groups = this.client.registry.groups;
        message.channel.send(`
        ${(groups).map(grp => `__${grp.name}__\n${(grp.commands)
            .map(cmd => `**${cmd.name} »** \`${cmd.description}${cmd.nsfw ? ' (NSFW)' : ''}\``).join('\n')
        }
			`).join('\n\n')
        }`)
    }
}

module.exports = help;