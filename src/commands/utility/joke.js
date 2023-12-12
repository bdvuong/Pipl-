const { SlashCommandBuilder } = require('discord.js');
const tracery = require("tracery-grammar");

const jokeTracery = tracery.createGrammar({
    "origin":["#lines#"],
    "lines":["#start# <br> #end#"],
    "start":["POV:", "My face when", "This is me when", "When someone asks me", "That face when", "That moment when", "One does not simply", "How I feel when", "TOP TEXT", "Me when", "The moment when", "That feeling when", "When you do not study for a test and", "When the", "DAE know", "Imagine", "When you gotta lock in and"],
    "end": ["Dad Lore", "Bottom text", "My dad works for #company#", "In this economy?", "Rent is due", "Your new empire", "We can use the power of friendship to kill god!"],
    "company": ["Roblox", "Microsoft", "Michaelsoft", "Nintendo", "Apple", "Riot Games", "Blizzard"]
});

jokeTracery.addModifiers(tracery.baseEngModifiers);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('joke')
        .setDescription('Generates random meme text.'),
    async execute(interaction) {
        await interaction.reply(jokeTracery.flatten('#origin#'));
    },
}