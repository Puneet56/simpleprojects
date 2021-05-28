let progressline = document.getElementById("progressline");
let circles = document.querySelectorAll(".circle");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let count = 0;

prev.addEventListener("click", () => {
	count--;
	if (count < 0) {
		count = 0;
	}
	update();
	circles[count + 1].classList.remove("active");
});
next.addEventListener("click", () => {
	count++;
	if (count > 3) {
		count = 3;
	}
	update();
	circles[count].classList.add("active");
});

update = () => {
	let w = (count * 100) / 3 + "%";
	console.log(w);
	progressline.style.width = w;
	if (count == 3) {
		next.disabled = true;
	} else if (count == 0) {
		prev.disabled = true;
	} else {
		prev.disabled = false;
		next.disabled = false;
	}
};
