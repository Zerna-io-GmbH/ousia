import { gsap } from 'gsap';
import { SplitText } from 'gsap/dist/SplitText.js';

export const animationExample = (node) => {
	const tl = gsap.timeline();
	const splitTextNode: any = new SplitText(node, { type: 'words,chars' });
	const chars = splitTextNode.chars;
	gsap.set(node, { perspective: 400 });
	tl.from(chars, {
		duration: 0.8,
		opacity: 0,
		scale: 0,
		y: 80,
		rotationX: 180,
		transformOrigin: '0% 50% -50',
		ease: 'back',
		stagger: 0.1
	});
	return {
		destroy() {
			tl.clear().time(0);
			splitTextNode.revert();
		}
	};
};
