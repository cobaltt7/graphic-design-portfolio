new Splide(".splide", {
	autoplay: true,
	breakpoints: { 640: { destroy: true } },
	fixedHeight: "500px",
	interval: 7500,
	lazyLoad: "nearby",
	rewind: true,
	rewindByDrag: true,
	rewindSpeed: 500,
	speed: 750,
	start: 2,
}).mount();
