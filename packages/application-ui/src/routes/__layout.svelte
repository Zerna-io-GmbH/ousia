<script lang="ts">
	import '../app.css';
	import OusiaAppLayout from '$lib/components/layout/OusiaAppLayout.svelte';
	import { gsap } from 'gsap';
	import { SplitText } from 'gsap/dist/SplitText.js';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
	import { createLanguageStore } from '$lib/stores';
	import FullscreenLoader from '$lib/components/loading/FullscreenLoader.svelte';
	import Spinner from '$lib/svg/animated/Spinner.svelte';
	import DotsImpulse from '$lib/svg/animated/DotsImpulse.svelte';

	gsap.registerPlugin(SplitText, ScrollTrigger);
	createLanguageStore();
</script>

<FullscreenLoader className="bg-indigo-100">
	<DotsImpulse className='h-72 fill-indigo-500' />
</FullscreenLoader>
<OusiaAppLayout>
	<div class="grid">
		<nav class="py-8 flex justify-center gap-x-8">
			<a href="/" class="text-lg font-medium text-slate-300 hover:text-indigo-300">Home</a>
			<a href="/forms" class="text-lg font-medium text-slate-300 hover:text-indigo-300">Forms</a>
			<a href="/layeredPinning" class="text-lg font-medium text-slate-300 hover:text-indigo-300"
				>Layered Pinning</a
			>
			<a href="/persistentStore" class="text-lg font-medium text-slate-300 hover:text-indigo-300"
				>Persistent Store</a
			>
			<a href="/loading" class="text-lg font-medium text-slate-300 hover:text-indigo-300">Loading</a
			>
		</nav>
		<slot />
	</div>
</OusiaAppLayout>
