const { SlashCommandBuilder } = require('discord.js');
const { getName } = require('../../helpers/dnd/traceryNames');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('random-name')
		.setDescription('Generate a random name for a character!'),
	async execute(interaction) {
		await interaction.reply(getName());
	},
};