import "./style.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";
import { home, menu, about } from "./dom.js";

addEventListener("DOMContentLoaded", loadHome);
home.addEventListener("click", loadHome);
menu.addEventListener("click", loadMenu);
about.addEventListener("click", loadAbout);
