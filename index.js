// import { shuffle } from "lodash-es";
import { take, shuffle } from "lodash-es";

const ingredients = [
	"Banana",
	"Mango",
	"Yoghurt",
	"Sorbet",
	"Silk tofu",
	"Peanut butter",
	"Avocado",
	"Spinach",
	"Pineapple",
	"Strawberries",
	"Blueberries",
	"Raspberries",
	"Blackberries",
	"Cherries",
	"Peaches",
	"Cantaloupe",
	"Watermelon",
	"Pomegranate seeds",
	"Kiwi",
	"Acai berries",
];
const button = document.querySelector("button");
const ul = document.querySelector("ul");

function shuffleAndRender(num) {
	take(shuffle(ingredients), num).forEach((ingredient) => {
		const li = document.createElement("li");
		li.textContent = ingredient;
		ul.append(li);
	});
}

button.addEventListener("click", () => {
	ul.textContent = null;
	shuffleAndRender(5);
});
