<script lang="ts">
	import { FullscreenLoader, OusiaAppLayout } from '@ousia/application-ui/components';
	import { DotsImpulse } from '@ousia/application-ui/svg'
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
</script>

<FullscreenLoader className="bg-indigo-50 opacity-25">
	<DotsImpulse className='h-72 fill-indigo-900' />
</FullscreenLoader>
<OusiaAppLayout>
	<Navigation />
	<main class="grid">
		<slot />
	</main>
	<Footer />
</OusiaAppLayout>
