<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap/dist/gsap';
	import { SplitText } from 'gsap/dist/SplitText.js';

	onMount(() => {
		gsap.registerPlugin(SplitText);
	});
</script>

<div id="wrapper" class="wrapper relative overflow-hidden max-w-7xl mx-auto px-4 lg:px-8">
	<div id="content">
		<slot />
	</div>
</div>
