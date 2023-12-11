const { SlashCommandBuilder } = require('discord.js');
const { generateMeme } = require('../../helpers/memeGenerator');

// TODO: Add tracery content here
module.exports = {
	data: new SlashCommandBuilder()
		.setName('meme')
		.setDescription('Generate a random meme!'),
	async execute(interaction) {
		const response = await generateMeme();

		await interaction.reply(response);
	},
};