let btn = document.querySelector(".btn");

let text = document.querySelector(".text");
btn.addEventListener("click", () => {
	text.classList.toggle("clicked");
	btn.classList.toggle("clickedbtn");
});
