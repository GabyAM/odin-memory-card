import blazeRod from "./assets/blaze_rod.png";
import book from "./assets/book.png";
import bread from "./assets/bread.png";
import carrot from "./assets/carrot.png";
import clock from "./assets/clock.gif";
import coal from "./assets/coal.png";
import cookie from "./assets/cookie.png";
import diamond from "./assets/diamond.png";
import elytra from "./assets/elytra.png";
import enderPearl from "./assets/ender_pearl.png";
import goldenApple from "./assets/golden_apple.png";
import netherStar from "./assets/nether_star.gif";
import pigstep from "./assets/pigstep.png";
import string from "./assets/string.png";
import waterBucket from "./assets/water_bucket.png";
import { shuffle } from "./utilities";

const items = [
	{ id: 0, name: "blazeRod", title: "Blaze Rod", image: blazeRod },
	{ id: 1, name: "book", title: "Book", image: book },
	{ id: 2, name: "bread", title: "Bread", image: bread },
	{ id: 3, name: "carrot", title: "Carrot", image: carrot },
	{ id: 4, name: "clock", title: "Clock", image: clock },
	{ id: 5, name: "coal", title: "Coal", image: coal },
	{ id: 6, name: "cookie", title: "Cookie", image: cookie },
	{ id: 7, name: "diamond", title: "Diamond", image: diamond },
	{ id: 8, name: "elytra", title: "Elytra", image: elytra },
	{ id: 9, name: "enderPearl", title: "Ender pearl", image: enderPearl },
	{ id: 10, name: "goldenApple", title: "Golden apple", image: goldenApple },
	{ id: 11, name: "netherStar", title: "Nether star", image: netherStar },
	{ id: 12, name: "pigstep", title: "Pigstep", image: pigstep },
	{ id: 13, name: "string", title: "String", image: string },
	{ id: 14, name: "waterBucket", title: "Water bucket", image: waterBucket },
];

export async function getItems() {
	return await shuffle(items).slice(0, 12);
}
