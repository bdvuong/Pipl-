const { SlashCommandBuilder } = require('discord.js');
const { generateMeme } = require('../../helpers/memeGenerator');
const tracery = require("tracery-grammar");

const topTextTracery = tracery.createGrammar({
	'origin': ["#lines#"],
	'lines':["#start#"],
	'start':["POV:", "My face when", "This is me when", "When someone asks me", "That face when", "That moment when",
			 "One does not simply", "How I feel when", "TOP TEXT", "Me when", "The moment when", "That feeling when",
	         "When you don't study for a test and", "When the"]
});

topTextTracery.addModifiers(tracery.baseEngModifiers);

const bottomTextTracery = tracery.createGrammar({

});

bottomTextTracery.addModifiers(tracery.baseEngModifiers);


module.exports = {
	data: new SlashCommandBuilder()
		.setName('meme')
		.setDescription('Generate a random meme!'),
	async execute(interaction) {
		const response = await generateMeme();

		await interaction.reply(response);
	},
};