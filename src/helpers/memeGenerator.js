require('dotenv').config();

/**
 * Fetches the JSON of the top 100 memes from imgflip
 * @returns JSON containing the top 100 memes
 */
async function getMemes() {
	const response = await fetch('https://api.imgflip.com/get_memes', {
		method: 'GET',
	});

	return await response.json();
}

/**
 * Randomly selects 1 of the top 100 memes and adds tracery grammars to it
 * @param {*} topText What the top text should display
 * @param {*} bottomText What the bottom text should display
 * @returns URL to the meme
 */
async function generateMeme(topText, bottomText) {
	const memesArray = await getMemes();

	const randomIndex = Math.floor(Math.random() * 99);

	const memeId = memesArray.data.memes[randomIndex].id;

	const response = await fetch(`https://api.imgflip.com/caption_image?username=${process.env.IMGFLIP_UN}&password=${process.env.IMGFLIP_PW}&template_id=${memeId}&text0=${topText}&text1=${bottomText}`, {
		method: 'GET',
	});

	const json = await response.json();

	return await json.data.url;
}

module.exports = {
	generateMeme,
};