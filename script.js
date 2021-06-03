data = [
	{
		name: "Expanding cards",
		link: "Progress steps/expanding-cards.html",
		code: "Progress steps/expanding-cards.html",
	},
	{
		name: "Progress steps",
		link: "Progress steps/progress-steps.html",
		code: "Progress steps/progress-steps.html",
	},
	{
		name: "Hidden Search Widget",
		link: "Hidden Search Widget/hidden-search.html",
		code: "Hidden Search Widget/hidden-search.html",
	},
	{
		name: "Blurry Background",
		link: "Progress steps/hidden-loading.html",
		code: "Progress steps/hidden-loading.html",
	},
	{
		name: "Rotating Nav",
		link: "Rotating Nav/rotating-nav.html",
		code: "Rotating Nav/rotating-nav.html",
	},
];

let list = document.querySelector(".projects-list");

let template = `<div class="project">
	<a class="name" href="Expanding cards/expanding-cards.html" target="_blank">
		1. Expanding cards
	</a>
	<div class="links">
		<a href="Expanding cards/expanding-cards.html" target="_blank">
			<button class="open">Open</button>
		</a>
		<a href="Expanding cards/expanding-cards.html" target="_blank">
			<button class="code">View Code</button>
		</a>
	</div>
</div>`;

for (i = 0; i < data.length; i++) {
	let divi = document.createElement("div");
	divi.className = "project";
	divi.innerHTML = `<a class="name" href="Expanding cards/expanding-cards.html" target="_blank">
		${i + 1 + ". " + data[i].name}
	</a>
	<div class="links">
		<a href="${data[0].link}" target="_blank">
			<button class="open">Open</button>
		</a>
		<a href="${data[0].link}" target="_blank">
			<button class="code">View Code</button>
		</a>
	</div>
`;
	list.appendChild(divi);
}
