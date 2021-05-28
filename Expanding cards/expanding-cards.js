let cards = document.querySelectorAll(".cards");

changeClass = () => cards.forEach((card) => card.classList.remove("active"));

cards.forEach((card) => {
	card.addEventListener("click", () => {
		changeClass();
		console.log(card);
		card.classList.add("active");
	});
});
