const commando = require("discord.js-commando");
const path = require("path");
const config = require("./config.json");

const client = new commando.CommandoClient({
    owner: config.ownerID,
    commandPrefix: config.prefix,
    unknownCommandResponse: false,
})
client.config = config;

client.registry.registerDefaults()
    .registerGroups([
        ['api', 'Statistics Commands'],
        ['information', 'Informative Commands']
    ])
    .registerCommandsIn(path.join(__dirname,"commands"))

client.on('ready',()=>{
    console.log(`Logged in and ready to be used.. use "${client.commandPrefix}help".`)
});
client.on('error', (err) => {
    console.log(err);
});

client.login(config.token);