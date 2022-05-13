<script lang="ts">
	import { scrollLayer } from '$lib/animations/scrollLayer';
</script>

<main class="grid container mx-auto">
	<section use:scrollLayer class="flex min-h-screen flex-col items-center justify-center">
		<h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-6xl text-center">Intro</h1>
	</section>

	<section use:scrollLayer class="min-h-screen flex flex-col items-center justify-center">
		<div class="bg-indigo-600 h-80 overflow-hidden rounded-lg w-full max-w-5xl" />
	</section>
	<section use:scrollLayer class="min-h-screen flex flex-col items-center justify-center">
		<div class="bg-rose-600 h-80 overflow-hidden rounded-lg w-full max-w-5xl" />
	</section>
	<section use:scrollLayer class="min-h-screen flex flex-col items-center justify-center">
		<div class="bg-cyan-600 h-80 overflow-hidden rounded-lg w-full max-w-5xl" />
	</section>
	<section use:scrollLayer class="min-h-screen flex flex-col items-center justify-center">
		<div class="bg-violet-600 h-80 overflow-hidden rounded-lg w-full max-w-5xl" />
	</section>
</main>
