<script lang="ts">
	import { OusiaAppLayout } from '@ousia/application-ui/components';
	import '../app.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<OusiaAppLayout>
	<Navigation />
	<main class="grid">
		<slot />
	</main>
	<Footer />
</OusiaAppLayout>
