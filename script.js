data = [
	{
		name: "Expanding cards",
		link: "Expanding-cards/expanding-cards.html",
		code: "https://github.com/Puneet56/simpleprojects/tree/master/Expanding-cards",
	},
	{
		name: "Progress-steps",
		link: "Progress-steps/progress-steps.html",
		code: "https://github.com/Puneet56/simpleprojects/tree/master/Progress-steps",
	},
	{
		name: "Hidden-Search-Widget",
		link: "Hidden-Search-Widget/hidden-search.html",
		code: "https://github.com/Puneet56/simpleprojects/tree/master/Hidden-Search-Widget",
	},
	{
		name: "Blurry Background",
		link: "Blurry-Background/hidden-loading.html",
		code: "https://github.com/Puneet56/simpleprojects/tree/master/Blurry-Background",
	},
	{
		name: "Rotating Nav",
		link: "Rotating-Nav/rotating-nav.html",
		code: "https://github.com/Puneet56/simpleprojects/tree/master/Rotating-Nav",
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
	divi.innerHTML = `<a class="name" href="${data[i].link}">
		${i + 1 + ". " + data[i].name}
	</a>
	<div class="links">
		<a href="${data[i].link}">
			<button class="open">Open</button>
		</a>
		<a href="${data[i].code}" target="_blank">
			<button class="code">View Code</button>
		</a>
	</div>
`;
	list.appendChild(divi);
}
