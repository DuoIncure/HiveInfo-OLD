const Discord = require("discord.js");
const { Command } = require("discord.js-commando");
const request = require("request");
const pageMenu = require('@quantiom/pagemenu');

class alltimestats extends Command{

    constructor(client) {
        super(client, {
            name: "alltimestats",
            memberName: "alltimestats",
            aliases: ["alltimestatistics", "ats", "alltime"],
            group: "api",
            description: "View all-time individual player statistics",
            details: "A statistics command",
            examples: [`${client.config.prefix}allstats <player>`],
            throttling: {
                duration: 5,
                usages: 1
            }
        });
    }

    run(message, args, fromPattern) {
        let fullArgs = args.split(" ");
        if (!fullArgs[0]) {
            message.channel.send(this.createNoArgsEmbed());
            return;
        }
        if (fullArgs[1]) {
            var apiName = fullArgs[0] + "%20" + fullArgs[1];
            var displayName = fullArgs[0] + " " + fullArgs[1];
        } else {
            var apiName = fullArgs[0];
            var displayName = fullArgs[0];
        }
        let pMenu = new pageMenu(message, [], {duration: 120000, expireFunction: function(msg) { msg.delete(); }, waitingText: `Fetching ${displayName}'s Statistics`});

        let TWEmbed;
        var errorEmbed1 = this.createErrorEmbed("Treasure Wars", displayName);
        request(`https://api.playhive.com/v0/game/all/wars/` + apiName, function(error, response, body){
            try{
                let data = JSON.parse(body);
                let wins = data['victories'];
                let losses = data['played'] - data['victories'];
                let played = data['played'];
                let fkills = data['final_kills'];
                let kills = data['kills'];
                let tdest = data['treasure_destroyed'];
                let deaths = data['deaths'];
                let xp = data['xp'];
                let killdr = (data['kills'] / data['deaths']);
                let kdr = killdr.toFixed(2);
                let fkilldr = (data['final_kills'] / data['deaths']);
                let fkdr = fkilldr.toFixed(2);
                let winrate = (data['victories'] / data['played']);
                let wrate = (winrate * 100).toFixed(2);
                if(isNaN(wrate)){
                    wrate = 0;
                }
                var a = new Date(data['first_played'] * 1000);
                var months2 = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                var year = a.getFullYear();
                var month = months2[a.getMonth()];
                var date2 = a.getDate();
                var time = date2 + ' ' + month + ' ' + year;
                TWEmbed = ({
                    title: displayName + '\'s Treasure Wars Statistics',
                    description: `All-Time Statistics\n\nUsername > ${displayName}\nFirst Played > ${time}\nExperience > ${xp}\nTreasures Destroyed > ${tdest}\n\nTotal Games Played > ${played}\nVictories > ${wins}\nLosses > ${losses}\nWin Rate > ${wrate}%\n\nKills > ${kills}\nFinal Kills > ${fkills}\nDeaths > ${deaths}\nKill/Death Ratio > ${kdr}\nFinal Kill/Death Ratio > ${fkdr}`,
                    thumbnail: 'https://cdn.discordapp.com/attachments/584139666111070209/597197771271045130/ba9565e757f8cea31a955375f17a6d2a.png'
                });
                pMenu.addPage(TWEmbed);
            }catch(e){
                console.error(e);
                pMenu.addPage(errorEmbed1);
            }
        })

        let MMEmbed;
        var errorEmbed2 = this.createErrorEmbed("Murder Mystery", displayName);
        request(`https://api.playhive.com/v0/game/all/murder/` + apiName, function(error, response, body){
            try{
                let data = JSON.parse(body);
                let wins = data['victories'];
                let losses = data['played'] - data['victories'];
                let played = data['played'];
                let kills = data['murders'];
                let deaths = data['deaths'];
                let xp = data['xp'];
                let melims = data['murderer_eliminations'];
                let killdr = (data['murders'] / data['deaths']);
                let kdr = killdr.toFixed(2);
                let winrate = (data['victories'] / data['played']);
                let wrate = (winrate * 100).toFixed(2);
                var a = new Date(data['first_played'] * 1000);
                var months2 = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                var year = a.getFullYear();
                var month = months2[a.getMonth()];
                var date2 = a.getDate();
                var time = date2 + ' ' + month + ' ' + year;
                if(isNaN(wrate)){
                    wrate = 0;
                }
                MMEmbed = {
                    title: displayName + '\'s Murder Mystery Statistics',
                    description: `All-Time Statistics\n\nUsername > ${displayName}\nFirst Played > ${time}\nExperience > ${xp}\nMurderer Eliminations > ${melims}\n\nTotal Games Played > ${played}\nVictories > ${wins}\nLosses > ${losses}\nWin Rate > ${wrate}%\n\nKills > ${kills}\nDeaths > ${deaths}\nKill/Death Ratio > ${kdr}`,
                    thumbnail: 'https://cdn.discordapp.com/attachments/584139666111070209/597197771271045130/ba9565e757f8cea31a955375f17a6d2a.png'
                }
                pMenu.addPage(MMEmbed);
            }catch(e){
                console.error(e);
                pMenu.addPage(errorEmbed2)
            }
        })

        let SGEmbed;
        var errorEmbed3 = this.createErrorEmbed("Survival Games", displayName);
        request(`https://api.playhive.com/v0/game/all/sg/` + apiName, function (error, response, body) {
            try {
                let data = JSON.parse(body);
                let wins = data['victories'];
                let losses = data['played'] - data['victories'];
                let played = data['played'];
                let xp = data['xp'];
                let crates = data['crates'];
                let cows = data['cows'];
                let kills = data['kills'];
                let winrate = (data['victories'] / data['played']);
                let wrate = (winrate * 100).toFixed(2);
                let dmatches = data['deathmatches'];
                var a = new Date(data['first_played'] * 1000);
                var months2 = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                var year = a.getFullYear();
                var month = months2[a.getMonth()];
                var date2 = a.getDate();
                var time = date2 + ' ' + month + ' ' + year;
                if(isNaN(wrate)){
                    wrate = 0;
                }
                SGEmbed = {
                    title: displayName + "'s Survival Games Statistics",
                    description: `All-Time Statistics\n\nUsername > ${displayName}\nFirst Played > ${time}\nExperience > ${xp}\n\nTotal Games Played > ${played}\nVictories > ${wins}\nLosses > ${losses}\nWin Rate > ${wrate}%\n\nKills > ${kills}\nCache Cows > ${cows}\nDeathmatches > ${dmatches}\nTotal Crates Opened > ${crates}`,
                    thumbnail: 'https://cdn.discordapp.com/attachments/584139666111070209/597197771271045130/ba9565e757f8cea31a955375f17a6d2a.png'
                }
                pMenu.addPage(SGEmbed);
            } catch (e) {
                console.error(e);
                pMenu.addPage(errorEmbed3);
            }
        })

        let DREmbed;
        var errorEmbed4 = this.createErrorEmbed("Death Run", displayName);
        request(`https://api.playhive.com/v0/game/all/dr/` + apiName, function(error, response, body){
            try{
                let data = JSON.parse(body);
                let wins = data['victories'];
                let losses = data['played'] - data['victories'];
                let played = data['played'];
                let kills = data['kills'];
                let deaths = data['deaths'];
                let cpoints = data['checkpoints'];
                let xp = data['xp'];
                let killdr = (data['kills'] / data['deaths']);
                let kdr = killdr.toFixed(2);
                let winrate = (data['victories'] / data['played']);
                let wrate = (winrate * 100).toFixed(2);
                var a = new Date(data['first_played'] * 1000);
                var months2 = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                var year = a.getFullYear();
                var month = months2[a.getMonth()];
                var date2 = a.getDate();
                var time = date2 + ' ' + month + ' ' + year;
                if(isNaN(wrate)){
                    wrate = 0;
                }
                DREmbed = {
                    title: displayName + "'s Death Run Statistics",
                    description: `All-Time Statistics\n\nUsername > ${displayName}\nFirst Played > ${time}\nExperience > ${xp}\nCheckpoints > ${cpoints}\n\nTotal Games Played > ${played}\nVictories > ${wins}\nLosses > ${losses}\nWin Rate > ${wrate}%\n\nKills > ${kills}\nDeaths > ${deaths}\nKill/Death Ratio > ${kdr}`,
                    thumbnail: 'https://cdn.discordapp.com/attachments/584139666111070209/597197771271045130/ba9565e757f8cea31a955375f17a6d2a.png'
                }
                pMenu.addPage(DREmbed);
            }catch(e){
                console.error(e);
                pMenu.addPage(errorEmbed4);
            }
        })

        let SWEmbed;
        var errorEmbed5 = this.createErrorEmbed("SkyWars", displayName);
        request(`https://api.playhive.com/v0/game/all/sky/` + apiName, function(error, response, body){
            try{
                let data = JSON.parse(body);
                let xp = data['xp'];
                let played = data['played'];
                let wins = data['victories'];
                let losses = (data['played'] - data['victories']);
                let kills = data['kills'];
                let mchests = data['mystery_chests_destroyed'];
                let ores = data['ores_mined'];
                let spells = data['spells_used'];
                let winrate = (data['victories'] / data['played']);
                let wrate = (winrate * 100).toFixed(2);
                if(isNaN(wrate)){
                    wrate = 0;
                }
                var a = new Date(data['first_played'] * 1000);
                var months2 = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                var year = a.getFullYear();
                var month = months2[a.getMonth()];
                var date2 = a.getDate();
                var time = date2 + ' ' + month + ' ' + year;
                SWEmbed = {
                    title: displayName + "'s SkyWars Statistics",
                    description: `All-Time Statistics\n\nUsername > ${displayName}\nFirst Played > ${time}\nExperience > ${xp}\n\nTotal Games Played > ${played}\nWins > ${wins}\nLosses > ${losses}\nWin Rate > ${wrate}%\n\nKills > ${kills}\nMystery Chests Destroyed > ${mchests}\nSpells Used > ${spells}\nOres Mined > ${ores}`,
                    thumbnail: 'https://cdn.discordapp.com/attachments/584139666111070209/597197771271045130/ba9565e757f8cea31a955375f17a6d2a.png'
                }
                pMenu.addPage(SWEmbed);
            }catch(e){
                console.error(e);
                pMenu.addPage(errorEmbed5);
            }
        })

        pMenu.run();
    }

    /**
     * @param gamemode
     * @param displayPlayer
     * @returns {module:"discord.js".RichEmbed}
     */
    createErrorEmbed(gamemode, displayPlayer) {
        return ({
            title: "ERROR",
            description: `An error occurred whilst attempting to retrieve ${displayPlayer}'s ${gamemode} Statistics!\n\nThis is most likely due to ${displayPlayer} not having recorded statistics for ${gamemode}`,
            color: "RED",
            footer: { text: "Displaying Error Message" }
        });
    }

    /**
     * @returns {module:"discord.js".RichEmbed}
     */
    createNoArgsEmbed() {
        return (new Discord.RichEmbed()
                .setTitle("Usage")
                .setColor(0x00CED1)
                .setDescription(`Usage: ${this.examples[0]}`)
                .setFooter("Displaying No Arguments Message")
        );
    }
}

module.exports = alltimestats;