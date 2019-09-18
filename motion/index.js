const looseSpring = {
	type: "spring",
	stiffness: 125,
	damping: 15
};

const stiffSpring = {
	type: "spring",
	stiffness: 150,
	damping: 25,

};

const easeOutExpo = {
	ease: [0.19, 1, 0.22, 1],
	duration: 0.68
};
const projectTransition = {
	initial: {
		x: -15,
		opacity: 0,
		transition: { ...looseSpring }
	},
	enter: {
		opacity: 1,
		x: 0,
		transition: { ...looseSpring }
	},
	exit: {
		x: 15,
		opacity: 0,
		transition: { ...looseSpring }
	}
};

const gradientTransition = {
	enter: {
		opacity: 1,
		y: 0,
		transition: { ...easeOutExpo }
	},
	initial: {
		y: 15,
		opacity: 0,
		transition: { ...easeOutExpo }
	}
};

const detailsTransition = {
	enter: {
		opacity: 1,
		y: 0,
		transition: { ...looseSpring }
	},
	initial: {
		y: 15,
		opacity: 0,
		transition: { ...looseSpring }
	},
	setAside: {
		y: 0,
		x: 0,
		scale: 0.7,
		transition: { ...stiffSpring }
	}
};


export { detailsTransition, gradientTransition, projectTransition };
