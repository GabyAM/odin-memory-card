const baseUrl =
	import.meta.env.MODE === "development" ? "" : import.meta.env.BASE_URL;

const sounds = {
	button: {
		audio: new Audio(baseUrl + "button_sound.mp3"),
		startOffset: 0.15,
	},
	defeat: {
		audio: new Audio(baseUrl + "defeat_sound.mp3"),
		startOffset: 0.6,
	},
	victory: {
		audio: new Audio(baseUrl + "victory_sound.mp3"),
		startOffset: 0,
	},
};

export function playSound(name) {
	Object.values(sounds).forEach((sound) => {
		sound.audio.pause();
	});
	const audio = sounds[name].audio;
	audio.currentTime = sounds[name].startOffset;
	audio.play();
}
