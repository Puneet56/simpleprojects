// add nav-on to
// ul
// nav-button
// article

// let open = document.getElementById("o");
// let close = document.getElementById("c");

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
