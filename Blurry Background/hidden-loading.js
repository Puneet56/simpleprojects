let container = document.querySelector(".container");
let text = document.querySelector(".p");
let count = 0;

let blurring = setInterval(() => {
	count++;
	console.log(count);
	text.innerHTML = `${count}%`;
	text.style.opacity = `${100 / count - 1}`;
	container.style.filter = `blur(${500 / count - 5}px)`;
	if (count > 99) {
		count = 100;
		clearInterval(blurring);
	}
}, 25);
