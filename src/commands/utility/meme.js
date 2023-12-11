const { SlashCommandBuilder } = require('discord.js');
const { generateMeme } = require('../../helpers/memeGenerator');
const tracery = require("tracery-grammar");

const topTextTracery = tracery.createGrammar({

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