const Eris = require("eris");
var Discord = require('discord.io');
var logger = require('winston');
var bot = new Eris("");

function pigTranslate(message) {
    var words = message.split(" ");
    var answer = "";
    for (var i = 0; i < words.length; i += 1) {
        answer += words[i].substring(1) + words[i].substring(0,1) + "ay ";
    }
    return answer;
}

bot.on("ready", () => { // When the bot is ready
    console.log("Ready!"); // Log "Ready!"
});

bot.on("messageCreate", (msg) => { // When a message is created
    const message = msg.content.substring(5);

    if(msg.content.substring(0,4) == "!pig") { // If the message content is "!pig"
        bot.createMessage(msg.channel.id, pigTranslate(message));
        // Send a message in the same channel with pig latin translation
    }
});

bot.connect(); // Get the bot to connect to Discord