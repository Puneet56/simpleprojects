const data = [
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
	{
		name: "Sine Wave",
		link: "sine-Wave/sine-wave.html",
		code: "https://github.com/Puneet56/simpleprojects/tree/master/sine-wave",
	},
	{
		name: "Rotating circles",
		link: "rotating-circle/rotating-circle.html",
		code: "https://github.com/Puneet56/simpleprojects/tree/master/rotating-circle",
	},
	{
		name: "Double Pendulmn",
		link: "double-pendulmn/doublePendulmn.html",
		code: "https://github.com/Puneet56/simpleprojects/tree/master/double-pendulmn",
	},
	{
		name: "Flappy birds clone",
		link: "flappy-birds/flappyBirds.html",
		code: "https://github.com/Puneet56/simpleprojects/tree/master/flappy-birds",
	},
	{
		name: "Fractal tree",
		link: "fractal-tree/index.html",
		code: "https://github.com/Puneet56/simpleprojects/tree/master/fractal-tree",
	},
	{
		name: "Fallling balls",
		link: "falling-balls/index.html",
		code: "https://github.com/Puneet56/simpleprojects/tree/master/falling-balls",
	},
	{
		name: "Perlin noise",
		link: "perlin-noise/index.html",
		code: "https://github.com/Puneet56/simpleprojects/tree/master/perlin-noise",
	},
];

let list = document.querySelector(".projects-list");

for (i = 0; i < data.length; i++) {
	let divi = document.createElement("div");
	divi.className = "project";
	divi.innerHTML = `<a class="name" href="${data[i].link}">
		${data[i].name}
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
