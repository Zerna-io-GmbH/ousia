<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { AppLayoutWrapper } from '@ousia/application-ui';
</script>

<AppLayoutWrapper>
	<Navigation />
	<main class="grid">
		<slot />
	</main>
	<Footer />
</AppLayoutWrapper>
