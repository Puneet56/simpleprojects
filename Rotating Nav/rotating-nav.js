// add nav-on to
// ul
// nav-button
// article

let bopen = document.getElementById("open");
let bclose = document.getElementById("close");

let article = document.querySelector(".article");
let nav = document.querySelector(".nav-button");
let list = document.querySelector("ul");

open = () => {
	console.log("clicked");
	article.classList.add("nav-on");
	nav.classList.add("nav-on");
	list.classList.add("nav-on");
};
close = () => {
	console.log("clicked");
	article.classList.remove("nav-on");
	nav.classList.remove("nav-on");
	list.classList.remove("nav-on");
};

bopen.addEventListener("click", open);
bclose.addEventListener("click", close);
