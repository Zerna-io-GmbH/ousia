<script lang="ts">
	import '../app.css';
	import OusiaAppLayout from '$lib/components/layout/OusiaAppLayout.svelte';
	import { gsap } from 'gsap';
	import { SplitText } from 'gsap/dist/SplitText';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { createLanguageStore } from '$lib/stores';

	gsap.registerPlugin(SplitText, ScrollTrigger);
	createLanguageStore();
</script>

<OusiaAppLayout>
	<div class="grid">
		<nav class="py-8 flex justify-center gap-x-8">
			<a href="/" class="text-lg font-medium text-slate-300 hover:text-indigo-300">Home</a>
			<a href="/forms" class="text-lg font-medium text-slate-300 hover:text-indigo-300">Forms</a>
			<a href="layeredPinning" class="text-lg font-medium text-slate-300 hover:text-indigo-300"
				>Layered Pinning</a
			>
			<a href="persistentStore" class="text-lg font-medium text-slate-300 hover:text-indigo-300"
				>Persistent Store</a
			>
		</nav>
		<slot />
	</div>
</OusiaAppLayout>
