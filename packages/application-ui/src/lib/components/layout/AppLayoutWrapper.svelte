<script lang="ts">
	import { onMount } from 'svelte';
	import { setContext } from 'svelte';
	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { ScrollSmoother } from 'gsap/dist/ScrollSmoother.js';
	import { SplitText } from 'gsap/dist/SplitText.js';
	import { GsapContext } from '$lib/constants/context';

	let smoother: any;
	onMount(() => {
		gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
		smoother = ScrollSmoother.create({
			wrapper: '#wrapper',
			content: '#content',
			smooth: 2,
			smoothTouch: 0.1,
			effects: true
		});
	});
</script>

<div id="wrapper" class="wrapper relative overflow-hidden max-w-7xl mx-auto px-4 lg:px-8">
	<div id="content">
		<slot />
	</div>
</div>
