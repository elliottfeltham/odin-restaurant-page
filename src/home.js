import { content } from "./dom.js";

export default function loadHomePage() {
	const container = content;
	container.innerHTML = "";
	const header = document.createElement("h1");
	header.classList.add("fancy");
	header.textContent = "The Restaurant";

	const subheading = document.createElement("h3");
	subheading.textContent = "Where food is ... ";

	const emphasis = document.createElement("em");
	emphasis.classList.add("fancy");
	emphasis.textContent = "Food.";

	subheading.append(emphasis);
	container.append(header, subheading);
}
