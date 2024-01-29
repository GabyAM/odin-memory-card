const sounds = {
	button: {
		audio: new Audio("./src/assets/button_sound.mp3"),
		startOffset: 0.15,
	},
	defeat: {
		audio: new Audio("./src/assets/defeat_sound.mp3"),
		startOffset: 0.6,
	},
	victory: {
		audio: new Audio("./src/assets/victory_sound.mp3"),
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
