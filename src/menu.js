import { content } from "./dom.js";

export default function loadMenuPage() {
	const container = content;
	container.innerHTML = "";
	const header = document.createElement("h1");
	header.classList.add("fancy");
	header.textContent = "The Menu";
	container.append(header);
}
