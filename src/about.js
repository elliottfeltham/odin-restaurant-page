import { content } from "./dom.js";

export default function loadAboutPage() {
	const container = content;
	container.innerHTML = "";
	const header = document.createElement("h1");
	header.classList.add("fancy");
	header.textContent = "About";

	const subheading = document.createElement("h3");
	subheading.textContent = "Where dining is all about the ...";

	const emphasis = document.createElement("em");
	emphasis.classList.add("fancy");
	emphasis.textContent = "Food.";

	subheading.append(emphasis);

	const bio = document.createElement("p");
	bio.textContent =
		"At The Restaurant, we don’t believe in unnecessary details—just food, with names as uninspired as our chef. Whether you’re in the mood for The Burger, The Pizza, or perhaps something more exotic like The Pasta, we’ve got you covered. ";

	const reviewHeader = document.createElement("h3");
	reviewHeader.textContent = "Reviews";
	const reviews = document.createElement("p");
	reviews.innerHTML = `⭐ “I ordered The Burger. I received The Burger. 5 stars.” – Dave, Easily Satisfied<br><br>

⭐ “There was definitely food on my plate. That’s all I can confirm.” – Sarah, Not a Detective<br><br>

⭐ “I asked what was in The Pasta. The waiter sighed and walked away.” – Mark, Still Has Questions"<br><br>`;

	container.append(header, subheading, bio, reviewHeader, reviews);
}
