import { content } from "./dom.js";

export default function loadAboutPage() {
	const container = content;
	container.innerHTML = "";
	const header = document.createElement("h1");
	header.classList.add("fancy");
	header.textContent = "About";
	container.append(header);
}
