<script lang="ts">
	import AppLayoutWrapper from '$lib/components/layout/AppLayoutWrapper.svelte';
	import '../app.css';
</script>

<AppLayoutWrapper>
	<main class="grid">
		<slot />
	</main>
</AppLayoutWrapper>
