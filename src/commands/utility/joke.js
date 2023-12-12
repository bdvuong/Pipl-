const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('joke')
        .setDescription('Generates a random joke!'),
    async execute(interaction) {
        
    },
}