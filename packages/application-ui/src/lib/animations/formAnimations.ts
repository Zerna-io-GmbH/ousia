import { gsap } from 'gsap/dist/gsap';

export const formElementAnimation = (node, hasError) => {
	const tl = gsap.timeline();
	console.log(hasError);
	tl.to(node, { duration: 1, x: 200, opacity: 0.5 });
	return {
		destroy() {
			console.log('destroy');
			tl.clear().time(0);
		}
	};
};
