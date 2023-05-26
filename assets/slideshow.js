new Splide(".splide", {
	rewind: true,
	speed: 750,
	rewindSpeed: 500,
	rewindByDrag: true,
	fixedHeight: "500px",
	autoplay: true,
	interval: 7500,
	lazyLoad: "nearby",
	breakpoints: {
		640: { destroy: true },
	},
	start: 2
}).mount();

// todo:
// speed up arrow transitions
// center arrows
// move pagination down
// hide arrows on not hover