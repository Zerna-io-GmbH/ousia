<script lang="ts">
	import { animationExample } from '$lib/animations/animationExample';
	import { language } from '$lib/stores';
</script>

<svelte:head>
	<title>Ousia - Application Template</title>
</svelte:head>

<main class="grid container mx-auto">
	<section class="min-h-screen flex flex-col justify-center items-center" use:animationExample>
		<h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-6xl pb-12">Hi</h1>
		<h3 class="text-2xl tracking-tight font-extrabold text-white pb-12">From</h3>
		<h1 class="text-4xl tracking-tight font-extrabold text-white pb-12">Greensock</h1>
	</section>
	<section class="min-h-screen flex flex-col justify-center items-center">
		<h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-6xl pb-12" n>
			Stagger...
		</h1>
	</section>
	<section class="min-h-screen flex justify-center items-center">
		<ul class="flex flex-wrap gap-8">
			<li
				id="box-1"
				class="bg-white w-24 h-24 shadow rounded-lg flex justify-center items-center"
				data-speed="2"
			>
				1
			</li>
			<li
				class="bg-yellow-200 w-24 h-24 shadow rounded-lg flex justify-center items-center"
				data-speed="1.5"
			>
				2
			</li>
			<li
				class="bg-green-200 w-24 h-24 shadow rounded-lg flex justify-center items-center"
				data-speed="1"
			>
				3
			</li>
			<li
				class="bg-purple-200 w-24 h-24 shadow rounded-lg flex justify-center items-center"
				data-speed="0.5"
			>
				4
			</li>
		</ul>
	</section>
	<section class="min-h-screen flex justify-center items-center">
		<ul class="flex flex-wrap gap-8">
			<li
				id="box-1"
				class="bg-white w-24 h-24 shadow rounded-lg flex justify-center items-center"
				data-speed="2"
			>
				1
			</li>
			<li
				class="bg-yellow-200 w-24 h-24 shadow rounded-lg flex justify-center items-center"
				data-speed="1.5"
			>
				2
			</li>
			<li
				class="bg-green-200 w-24 h-24 shadow rounded-lg flex justify-center items-center"
				data-speed="1"
			>
				3
			</li>
			<li
				class="bg-purple-200 w-24 h-24 shadow rounded-lg flex justify-center items-center"
				data-speed="0.5"
			>
				4
			</li>
		</ul>
	</section>
</main>
