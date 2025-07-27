import "./styles.css";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const aboutButton = document.querySelector(".about");

homeButton.addEventListener("click", home);
menuButton.addEventListener("click", menu);
aboutButton.addEventListener("click", about);
