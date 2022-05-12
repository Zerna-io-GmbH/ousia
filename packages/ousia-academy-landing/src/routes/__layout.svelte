<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	
	import '../app.css';
</script>

<Navigation />
<main class="grid">
	<slot />
</main>
<Footer />
