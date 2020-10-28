const Discord = require("discord.js");
const { Command } = require("discord.js-commando");
const request = require("request");
const pageMenu = require('@quantiom/pagemenu');

class alltimelb extends Command{

    constructor(client) {
        super(client, {
            name: "alltimelb",
            memberName: "alltimelb",
            aliases: ["alltimelb", "alltimeleaderboards", "atlb"],
            group: "api",
            description: "View all-time top leaderboards",
            details: "A statistics command",
            examples: [`${client.config.prefix}alltimelb <tw:sg:dr:mm:sw>`],
            throttling: {
                duration: 5,
                usages: 1
            }
        });
    }

    run(message, args, fromPattern) {
        var types = {tw: "wars", sg: "sg", dr: "dr", mm: "murder", sw: "sky"};
        let fullArgs = args.split(" ");
        if(!fullArgs[0]){
            message.channel.send(this.createNoArgsEmbed());
            return;
        } else {
            var type = types[fullArgs[0]];
        }
        switch (type) {
            case "wars":
                this.runTWLeaderboards(message);
                break;
            case "dr":
                this.runDRLeaderboards(message);
                break;
            case "sg":
                this.runSGLeaderboards(message);
                break;
            case "murder":
                this.runMMLeaderboards(message);
                break;
            case "sky":
                this.runSWLeaderboards(message);
                break;
        }
    }

    /**
     * @returns {module:"discord.js".RichEmbed}
     */
    createErrorEmbed(){
        return (new Discord.RichEmbed()
            .setTitle("ERROR")
            .setColor("RED")
            .setDescription(`An error occurred whilst attempting to perform this command!\n\nThis is most likely an issue with the Hive API and will hopefully be resolved shortly!`)
            .setFooter("Displaying Error Message"));
    }

    /**
     * @returns {module:"discord.js".RichEmbed}
     */
    createNoArgsEmbed(){
        return (new Discord.RichEmbed()
            .setTitle("Usage")
            .setColor(0x00CED1)
            .setDescription(`Usage: ${this.examples[0]}`)
            .setFooter("Displaying No Arguments Message")
        );
    }

    runTWLeaderboards(message){
        let pMenu = new pageMenu(message, [], {duration: 120000, expireFunction: function(msg) { msg.delete(); }, waitingText: `Fetching Treasure Wars Leaderboards`});
        var errorEmbed = this.createErrorEmbed();
        var pageNumber, infocheck2, infocheck3;
        var message1, message2, message3, message4, message5, message6, message7, message8, message9, message10;
        request(`https://api.playhive.com/v0/game/all/wars`, function(error, response, body){
            try{
                let data = JSON.parse(body);
                let message = '';
                pageNumber = 1;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate1 = (data[i]['victories'] / data[i]['played']);
                    let wrate1 = (winrate1 * 100).toFixed(2);
                    message1 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate1 + '%\n';
                }
                let page1 = {
                    title: `Top ${infocheck2} All-Time Treasure Wars Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message1}\`\`\``
                }
                pMenu.addPage(page1);

                pageNumber = 2;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate2 = (data[i]['victories'] / data[i]['played']);
                    let wrate2 = (winrate2 * 100).toFixed(2);
                    message2 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate2 + '%\n';
                }
                let page2 = {
                    title: `Top ${infocheck2} All-Time Treasure Wars Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message2}\`\`\``
                }
                pMenu.addPage(page2);

                pageNumber = 3;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate3 = (data[i]['victories'] / data[i]['played']);
                    let wrate3 = (winrate3 * 100).toFixed(2);
                    message3 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate3 + '%\n';
                }
                let page3 = {
                    title: `Top ${infocheck2} All-Time Treasure Wars Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message3}\`\`\``
                }
                pMenu.addPage(page3);

                pageNumber = 4;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate4 = (data[i]['victories'] / data[i]['played']);
                    let wrate4 = (winrate4 * 100).toFixed(2);
                    message4 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate4 + '%\n';
                }
                let page4 = {
                    title: `Top ${infocheck2} All-Time Treasure Wars Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message4}\`\`\``
                }
                pMenu.addPage(page4);

                pageNumber = 5;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate5 = (data[i]['victories'] / data[i]['played']);
                    let wrate5 = (winrate5 * 100).toFixed(2);
                    message5 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate5 + '%\n';
                }
                let page5 = {
                    title: `Top ${infocheck2} All-Time Treasure Wars Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message5}\`\`\``
                }
                pMenu.addPage(page5);

                pageNumber = 6;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate6 = (data[i]['victories'] / data[i]['played']);
                    let wrate6 = (winrate6 * 100).toFixed(2);
                    message6 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate6 + '%\n';
                }
                let page6 = {
                    title: `Top ${infocheck2} All-Time Treasure Wars Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message6}\`\`\``
                }
                pMenu.addPage(page6);

                pageNumber = 7;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate7 = (data[i]['victories'] / data[i]['played']);
                    let wrate7 = (winrate7 * 100).toFixed(2);
                    message7 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate7 + '%\n';
                }
                let page7 = {
                    title: `Top ${infocheck2} All-Time Treasure Wars Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message7}\`\`\``
                }
                pMenu.addPage(page7);

                pageNumber = 8;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate8 = (data[i]['victories'] / data[i]['played']);
                    let wrate8 = (winrate8 * 100).toFixed(2);
                    message8 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate8 + '%\n';
                }
                let page8 = {
                    title: `Top ${infocheck2} All-Time Treasure Wars Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message8}\`\`\``
                }
                pMenu.addPage(page8);

                pageNumber = 9;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate9 = (data[i]['victories'] / data[i]['played']);
                    let wrate9 = (winrate9 * 100).toFixed(2);
                    message9 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate9 + '%\n';
                }
                let page9 = {
                    title: `Top ${infocheck2} All-Time Treasure Wars Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message9}\`\`\``
                }
                pMenu.addPage(page9);

                pageNumber = 10;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate10 = (data[i]['victories'] / data[i]['played']);
                    let wrate10 = (winrate10 * 100).toFixed(2);
                    message10 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate10 + '%\n';
                }
                let page10 = {
                    title: `Top ${infocheck2} All-Time Treasure Wars Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message10}\`\`\``
                }
                pMenu.addPage(page10);
            }catch(e){
                console.error(e);
                pMenu.addPage(errorEmbed);
            }
        })
        pMenu.run();
    }

    runSGLeaderboards(message){
        let pMenu = new pageMenu(message, [], {duration: 120000, expireFunction: function(msg) { msg.delete(); }, waitingText: `Fetching Survival Games Leaderboards`});
        var errorEmbed = this.createErrorEmbed();
        var pageNumber, infocheck2, infocheck3;
        var message1, message2, message3, message4, message5, message6, message7, message8, message9, message10;
        request(`https://api.playhive.com/v0/game/all/sg`, function(error, response, body){
            try{
                let data = JSON.parse(body);
                let message = '';
                pageNumber = 1;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate1 = (data[i]['victories'] / data[i]['played']);
                    let wrate1 = (winrate1 * 100).toFixed(2);
                    message1 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate1 + '%\n';
                }
                let page1 = {
                    title: `Top ${infocheck2} All-Time Survival Games Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message1}\`\`\``
                }
                pMenu.addPage(page1);

                pageNumber = 2;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate2 = (data[i]['victories'] / data[i]['played']);
                    let wrate2 = (winrate2 * 100).toFixed(2);
                    message2 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate2 + '%\n';
                }
                let page2 = {
                    title: `Top ${infocheck2} All-Time Survival Games Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message2}\`\`\``
                }
                pMenu.addPage(page2);

                pageNumber = 3;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate3 = (data[i]['victories'] / data[i]['played']);
                    let wrate3 = (winrate3 * 100).toFixed(2);
                    message3 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate3 + '%\n';
                }
                let page3 = {
                    title: `Top ${infocheck2} All-Time Survival Games Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message3}\`\`\``
                }
                pMenu.addPage(page3);

                pageNumber = 4;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate4 = (data[i]['victories'] / data[i]['played']);
                    let wrate4 = (winrate4 * 100).toFixed(2);
                    message4 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate4 + '%\n';
                }
                let page4 = {
                    title: `Top ${infocheck2} All-Time Survival Games Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message4}\`\`\``
                }
                pMenu.addPage(page4);

                pageNumber = 5;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate5 = (data[i]['victories'] / data[i]['played']);
                    let wrate5 = (winrate5 * 100).toFixed(2);
                    message5 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate5 + '%\n';
                }
                let page5 = {
                    title: `Top ${infocheck2} All-Time Survival Games Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message5}\`\`\``
                }
                pMenu.addPage(page5);

                pageNumber = 6;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate6 = (data[i]['victories'] / data[i]['played']);
                    let wrate6 = (winrate6 * 100).toFixed(2);
                    message6 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate6 + '%\n';
                }
                let page6 = {
                    title: `Top ${infocheck2} All-Time Survival Games Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message6}\`\`\``
                }
                pMenu.addPage(page6);

                pageNumber = 7;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate7 = (data[i]['victories'] / data[i]['played']);
                    let wrate7 = (winrate7 * 100).toFixed(2);
                    message7 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate7 + '%\n';
                }
                let page7 = {
                    title: `Top ${infocheck2} All-Time Survival Games Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message7}\`\`\``
                }
                pMenu.addPage(page7);

                pageNumber = 8;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate8 = (data[i]['victories'] / data[i]['played']);
                    let wrate8 = (winrate8 * 100).toFixed(2);
                    message8 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate8 + '%\n';
                }
                let page8 = {
                    title: `Top ${infocheck2} All-Time Survival Games Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message8}\`\`\``
                }
                pMenu.addPage(page8);

                pageNumber = 9;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate9 = (data[i]['victories'] / data[i]['played']);
                    let wrate9 = (winrate9 * 100).toFixed(2);
                    message9 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate9 + '%\n';
                }
                let page9 = {
                    title: `Top ${infocheck2} All-Time Survival Games Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message9}\`\`\``
                }
                pMenu.addPage(page9);

                pageNumber = 10;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate10 = (data[i]['victories'] / data[i]['played']);
                    let wrate10 = (winrate10 * 100).toFixed(2);
                    message10 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate10 + '%\n';
                }
                let page10 = {
                    title: `Top ${infocheck2} All-Time Survival Games Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message10}\`\`\``
                }
                pMenu.addPage(page10);
            }catch(e){
                console.error(e);
                pMenu.addPage(errorEmbed);
            }
        })
        pMenu.run();
    }

    runDRLeaderboards(message){
        let pMenu = new pageMenu(message, [], {duration: 120000, expireFunction: function(msg) { msg.delete(); }, waitingText: `Fetching Death Run Leaderboards`});
        var errorEmbed = this.createErrorEmbed();
        var pageNumber, infocheck2, infocheck3;
        var message1, message2, message3, message4, message5, message6, message7, message8, message9, message10;
        request(`https://api.playhive.com/v0/game/all/dr`, function(error, response, body){
            try{
                let data = JSON.parse(body);
                let message = '';
                pageNumber = 1;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate1 = (data[i]['victories'] / data[i]['played']);
                    let wrate1 = (winrate1 * 100).toFixed(2);
                    message1 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate1 + '%\n';
                }
                let page1 = {
                    title: `Top ${infocheck2} All-Time Death Run Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message1}\`\`\``
                }
                pMenu.addPage(page1);

                pageNumber = 2;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate2 = (data[i]['victories'] / data[i]['played']);
                    let wrate2 = (winrate2 * 100).toFixed(2);
                    message2 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate2 + '%\n';
                }
                let page2 = {
                    title: `Top ${infocheck2} All-Time Death Run Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message2}\`\`\``
                }
                pMenu.addPage(page2);

                pageNumber = 3;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate3 = (data[i]['victories'] / data[i]['played']);
                    let wrate3 = (winrate3 * 100).toFixed(2);
                    message3 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate3 + '%\n';
                }
                let page3 = {
                    title: `Top ${infocheck2} All-Time Death Run Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message3}\`\`\``
                }
                pMenu.addPage(page3);

                pageNumber = 4;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate4 = (data[i]['victories'] / data[i]['played']);
                    let wrate4 = (winrate4 * 100).toFixed(2);
                    message4 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate4 + '%\n';
                }
                let page4 = {
                    title: `Top ${infocheck2} All-Time Death Run Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message4}\`\`\``
                }
                pMenu.addPage(page4);

                pageNumber = 5;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate5 = (data[i]['victories'] / data[i]['played']);
                    let wrate5 = (winrate5 * 100).toFixed(2);
                    message5 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate5 + '%\n';
                }
                let page5 = {
                    title: `Top ${infocheck2} All-Time Death Run Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message5}\`\`\``
                }
                pMenu.addPage(page5);

                pageNumber = 6;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate6 = (data[i]['victories'] / data[i]['played']);
                    let wrate6 = (winrate6 * 100).toFixed(2);
                    message6 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate6 + '%\n';
                }
                let page6 = {
                    title: `Top ${infocheck2} All-Time Death Run Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message6}\`\`\``
                }
                pMenu.addPage(page6);

                pageNumber = 7;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate7 = (data[i]['victories'] / data[i]['played']);
                    let wrate7 = (winrate7 * 100).toFixed(2);
                    message7 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate7 + '%\n';
                }
                let page7 = {
                    title: `Top ${infocheck2} All-Time Death Run Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message7}\`\`\``
                }
                pMenu.addPage(page7);

                pageNumber = 8;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate8 = (data[i]['victories'] / data[i]['played']);
                    let wrate8 = (winrate8 * 100).toFixed(2);
                    message8 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate8 + '%\n';
                }
                let page8 = {
                    title: `Top ${infocheck2} All-Time Death Run Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message8}\`\`\``
                }
                pMenu.addPage(page8);

                pageNumber = 9;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate9 = (data[i]['victories'] / data[i]['played']);
                    let wrate9 = (winrate9 * 100).toFixed(2);
                    message9 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate9 + '%\n';
                }
                let page9 = {
                    title: `Top ${infocheck2} All-Time Death Run Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message9}\`\`\``
                }
                pMenu.addPage(page9);

                pageNumber = 10;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate10 = (data[i]['victories'] / data[i]['played']);
                    let wrate10 = (winrate10 * 100).toFixed(2);
                    message10 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate10 + '%\n';
                }
                let page10 = {
                    title: `Top ${infocheck2} All-Time Death Run Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message10}\`\`\``
                }
                pMenu.addPage(page10);
            }catch(e){
                console.error(e);
                pMenu.addPage(errorEmbed);
            }
        })
        pMenu.run();
    }

    runMMLeaderboards(message){
        let pMenu = new pageMenu(message, [], {duration: 120000, expireFunction: function(msg) { msg.delete(); }, waitingText: `Fetching Murder Mystery Leaderboards`});
        var errorEmbed = this.createErrorEmbed();
        var pageNumber, infocheck2, infocheck3;
        var message1, message2, message3, message4, message5, message6, message7, message8, message9, message10;
        request(`https://api.playhive.com/v0/game/all/murder`, function(error, response, body){
            try{
                let data = JSON.parse(body);
                let message = '';
                pageNumber = 1;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate1 = (data[i]['victories'] / data[i]['played']);
                    let wrate1 = (winrate1 * 100).toFixed(2);
                    message1 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate1 + '%\n';
                }
                let page1 = {
                    title: `Top ${infocheck2} All-Time Murder Mystery Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message1}\`\`\``
                }
                pMenu.addPage(page1);

                pageNumber = 2;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate2 = (data[i]['victories'] / data[i]['played']);
                    let wrate2 = (winrate2 * 100).toFixed(2);
                    message2 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate2 + '%\n';
                }
                let page2 = {
                    title: `Top ${infocheck2} All-Time Murder Mystery Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message2}\`\`\``
                }
                pMenu.addPage(page2);

                pageNumber = 3;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate3 = (data[i]['victories'] / data[i]['played']);
                    let wrate3 = (winrate3 * 100).toFixed(2);
                    message3 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate3 + '%\n';
                }
                let page3 = {
                    title: `Top ${infocheck2} All-Time Murder Mystery Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message3}\`\`\``
                }
                pMenu.addPage(page3);

                pageNumber = 4;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate4 = (data[i]['victories'] / data[i]['played']);
                    let wrate4 = (winrate4 * 100).toFixed(2);
                    message4 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate4 + '%\n';
                }
                let page4 = {
                    title: `Top ${infocheck2} All-Time Murder Mystery Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message4}\`\`\``
                }
                pMenu.addPage(page4);

                pageNumber = 5;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate5 = (data[i]['victories'] / data[i]['played']);
                    let wrate5 = (winrate5 * 100).toFixed(2);
                    message5 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate5 + '%\n';
                }
                let page5 = {
                    title: `Top ${infocheck2} All-Time Murder Mystery Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message5}\`\`\``
                }
                pMenu.addPage(page5);

                pageNumber = 6;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate6 = (data[i]['victories'] / data[i]['played']);
                    let wrate6 = (winrate6 * 100).toFixed(2);
                    message6 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate6 + '%\n';
                }
                let page6 = {
                    title: `Top ${infocheck2} All-Time Murder Mystery Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message6}\`\`\``
                }
                pMenu.addPage(page6);

                pageNumber = 7;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate7 = (data[i]['victories'] / data[i]['played']);
                    let wrate7 = (winrate7 * 100).toFixed(2);
                    message7 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate7 + '%\n';
                }
                let page7 = {
                    title: `Top ${infocheck2} All-Time Murder Mystery Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message7}\`\`\``
                }
                pMenu.addPage(page7);

                pageNumber = 8;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate8 = (data[i]['victories'] / data[i]['played']);
                    let wrate8 = (winrate8 * 100).toFixed(2);
                    message8 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate8 + '%\n';
                }
                let page8 = {
                    title: `Top ${infocheck2} All-Time Murder Mystery Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message8}\`\`\``
                }
                pMenu.addPage(page8);

                pageNumber = 9;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate9 = (data[i]['victories'] / data[i]['played']);
                    let wrate9 = (winrate9 * 100).toFixed(2);
                    message9 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate9 + '%\n';
                }
                let page9 = {
                    title: `Top ${infocheck2} All-Time Murder Mystery Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message9}\`\`\``
                }
                pMenu.addPage(page9);

                pageNumber = 10;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate10 = (data[i]['victories'] / data[i]['played']);
                    let wrate10 = (winrate10 * 100).toFixed(2);
                    message10 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate10 + '%\n';
                }
                let page10 = {
                    title: `Top ${infocheck2} All-Time Murder Mystery Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message10}\`\`\``
                }
                pMenu.addPage(page10);
            }catch(e){
                console.error(e);
                pMenu.addPage(errorEmbed);
            }
        })
        pMenu.run();
    }

    runSWLeaderboards(message){
        let pMenu = new pageMenu(message, [], {duration: 120000, expireFunction: function(msg) { msg.delete(); }, waitingText: `Fetching SkyWars Leaderboards`});
        var errorEmbed = this.createErrorEmbed();
        var pageNumber, infocheck2, infocheck3;
        var message1, message2, message3, message4, message5, message6, message7, message8, message9, message10;
        request(`https://api.playhive.com/v0/game/all/sky`, function(error, response, body){
            try{
                let data = JSON.parse(body);
                let message = '';
                pageNumber = 1;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate1 = (data[i]['victories'] / data[i]['played']);
                    let wrate1 = (winrate1 * 100).toFixed(2);
                    message1 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate1 + '%\n';
                }
                let page1 = {
                    title: `Top ${infocheck2} All-Time SkyWars Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message1}\`\`\``
                }
                pMenu.addPage(page1);

                pageNumber = 2;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate2 = (data[i]['victories'] / data[i]['played']);
                    let wrate2 = (winrate2 * 100).toFixed(2);
                    message2 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate2 + '%\n';
                }
                let page2 = {
                    title: `Top ${infocheck2} All-Time SkyWars Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message2}\`\`\``
                }
                pMenu.addPage(page2);

                pageNumber = 3;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate3 = (data[i]['victories'] / data[i]['played']);
                    let wrate3 = (winrate3 * 100).toFixed(2);
                    message3 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate3 + '%\n';
                }
                let page3 = {
                    title: `Top ${infocheck2} All-Time SkyWars Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message3}\`\`\``
                }
                pMenu.addPage(page3);

                pageNumber = 4;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate4 = (data[i]['victories'] / data[i]['played']);
                    let wrate4 = (winrate4 * 100).toFixed(2);
                    message4 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate4 + '%\n';
                }
                let page4 = {
                    title: `Top ${infocheck2} All-Time SkyWars Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message4}\`\`\``
                }
                pMenu.addPage(page4);

                pageNumber = 5;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate5 = (data[i]['victories'] / data[i]['played']);
                    let wrate5 = (winrate5 * 100).toFixed(2);
                    message5 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate5 + '%\n';
                }
                let page5 = {
                    title: `Top ${infocheck2} All-Time SkyWars Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message5}\`\`\``
                }
                pMenu.addPage(page5);

                pageNumber = 6;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate6 = (data[i]['victories'] / data[i]['played']);
                    let wrate6 = (winrate6 * 100).toFixed(2);
                    message6 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate6 + '%\n';
                }
                let page6 = {
                    title: `Top ${infocheck2} All-Time SkyWars Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message6}\`\`\``
                }
                pMenu.addPage(page6);

                pageNumber = 7;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate7 = (data[i]['victories'] / data[i]['played']);
                    let wrate7 = (winrate7 * 100).toFixed(2);
                    message7 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate7 + '%\n';
                }
                let page7 = {
                    title: `Top ${infocheck2} All-Time SkyWars Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message7}\`\`\``
                }
                pMenu.addPage(page7);

                pageNumber = 8;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate8 = (data[i]['victories'] / data[i]['played']);
                    let wrate8 = (winrate8 * 100).toFixed(2);
                    message8 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate8 + '%\n';
                }
                let page8 = {
                    title: `Top ${infocheck2} All-Time SkyWars Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message8}\`\`\``
                }
                pMenu.addPage(page8);

                pageNumber = 9;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate9 = (data[i]['victories'] / data[i]['played']);
                    let wrate9 = (winrate9 * 100).toFixed(2);
                    message9 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate9 + '%\n';
                }
                let page9 = {
                    title: `Top ${infocheck2} All-Time SkyWars Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message9}\`\`\``
                }
                pMenu.addPage(page9);

                pageNumber = 10;
                infocheck2 = pageNumber * 10;
                infocheck3 = infocheck2 - 10;
                for (let i = infocheck3; i < infocheck2; i++) {
                    let winrate10 = (data[i]['victories'] / data[i]['played']);
                    let wrate10 = (winrate10 * 100).toFixed(2);
                    message10 += '\n' + data[i]['human_index'] + '. ' + data[i]['username'] + '\n    Wins > ' + data[i]['victories'] + '    Losses > ' + (data[i]['played'] - data[i]['victories']) + '\n    Win Rate > ' + wrate10 + '%\n';
                }
                let page10 = {
                    title: `Top ${infocheck2} All-Time SkyWars Wins`,
                    description: `All-Time Leaderboards\n\`\`\`css${message10}\`\`\``
                }
                pMenu.addPage(page10);
            }catch(e){
                console.error(e);
                pMenu.addPage(errorEmbed);
            }
        })
        pMenu.run();
    }
}

module.exports = alltimelb;