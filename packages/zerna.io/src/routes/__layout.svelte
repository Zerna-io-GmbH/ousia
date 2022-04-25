<script lang="ts">
	import { gsap } from 'gsap/dist/gsap';
	import { SplitText } from 'gsap/dist/SplitText.js';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
	import { OusiaAppLayout } from '@ousia/application-ui';
	import '../app.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';

	gsap.registerPlugin(SplitText, ScrollTrigger);
</script>

<OusiaAppLayout>
	<Navigation />
	<main class="grid">
		<slot />
	</main>
	<Footer />
</OusiaAppLayout>
