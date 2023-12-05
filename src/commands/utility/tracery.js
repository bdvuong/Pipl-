const { SlashCommandBuilder } = require('@discordjs/builders');
const tracery = require('tracery-grammar');

const grammar = tracery.createGrammar({
	'origin': ['#lines# #addition#'],
	'lines': ['#introduction# #drink# #preposition# #store#! #addition#', '#drink.capitalize#! Come try now at #store#!', '#specials.capitalize# with purchase of #drink#!', 'Celebrate #event# with a #drink# from #store#!'],
	'introduction': ['Introducing our #fall#', 'Try out our new', 'New fall edition of', 'New seasonal', 'Limited time' ],
	'drink': ['#tea# milk tea', 'black coffee', '#tea# tea', '#fruit# tea'],
	'store': ['Gong Cha', 'Kung Fu Tea', 'OneZo', 'Ten One Tea', 'Starbucks'],
	'tea': ['green', 'oolong', 'black', 'pu\'er', 'matcha', 'earl gray'],
	'fall': ['falltastic', 'turkey', 'pumpkin', 'apple', 'gravy'],
	'preposition': ['at', 'here at', 'right now at', 'immediately'],
	'toppings': ['boba', 'mango jelly', 'crystal pearls', 'pumpkin'],
	'specials':  ['decorative leaves', 'a ginger bread man bottle', 'a cornucopia', 'a drink holder'],
	'fruit': ['apple', 'banana', 'mango', 'strawberry', 'orange', 'pineapple', 'lemon', 'honey'],
	'event': ['Halloween', 'Thanksgiving', 'apple picking', 'Black Friday'],
	'addition': ['You can even add #toppings# to your #drink#!', 'Try adding #toppings# to your #drink#!', 'Each #drink# comes with #specials#!', 'Try our new #toppings#!', 'You can even add #toppings# to your drink!'],
});

grammar.addModifiers(tracery.baseEngModifiers);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tracery')
		.setDescription('Testing tracery stuff'),
	async execute(interaction) {
		await interaction.reply(grammar.flatten('#origin#'));
	},
};