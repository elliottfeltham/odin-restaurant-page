import { content } from "./dom.js";

class menuItem {
	constructor(title, description, emoji) {
		this.title = title;
		this.description = description;
		this.emoji = emoji;
	}
}

const menuItems = [
	new menuItem("The Burger", "The signature beef burger", "🍔"),
	new menuItem("The Pizza", "Cheesy and delicious", "🍕"),
	new menuItem("The Pasta", "Classic Italian pasta", "🍝"),
	new menuItem("The Salad", "Includes leaves and stuff", "🥗"),
];

export default function loadMenuPage() {
	const container = content;
	container.innerHTML = "";
	const header = document.createElement("h1");
	header.classList.add("fancy");
	header.textContent = "The Menu";

	const menuContainer = document.createElement("div");
	menuContainer.classList.add("menu-container");

	menuItems.forEach((item) => {
		const card = document.createElement("div");
		card.classList.add("menu-card");

		const title = document.createElement("h2");
		const description = document.createElement("p");
		const emoji = document.createElement("h1");

		title.textContent = item.title;
		description.textContent = item.description;
		emoji.textContent = item.emoji;

		card.append(title, description, emoji);

		menuContainer.append(card);
	});

	container.append(header, menuContainer);
}
