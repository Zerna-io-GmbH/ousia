import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';

export const scrollLayer = (node) => {
	const trigger = ScrollTrigger.create({
		trigger: node,
		start: 'top top',
		pin: true,
		pinSpacing: false
	});

	return {
		destroy() {
			trigger.kill();
		}
	};
};
