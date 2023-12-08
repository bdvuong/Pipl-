const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('meme')
		.setDescription('Generate a random meme!'),
	async execute(interaction) {
		const response = await fetch('https://api.imgflip.com/get_memes', {
			method: 'GET',
		});

		const json = await response.json();
		console.log(json.data.memes[0].url);

		await interaction.reply('check the logs');
	},
};