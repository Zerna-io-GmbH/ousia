<script lang="ts">
	import type { TranslationUi } from '$lib/cms/translation/types';
	import CarIcon from '$lib/svg/icons/CarIcon.svelte';
	import HeartIcon from '$lib/svg/icons/HeartIcon.svelte';
	import LightningBoldIcon from '$lib/svg/icons/LightningBoldIcon.svelte';
	import ShieldIcon from '$lib/svg/icons/ShieldIcon.svelte';
	import WaveAnimatedBackground from '$lib/svg/backrounds/WaveAnimatedBackground.svelte';
	import DockerLogo from '$lib/svg/logos/DockerLogo.svelte';
	import GraphQlLogo from '$lib/svg/logos/GraphQlLogo.svelte';
	import NodeJsLogo from '$lib/svg/logos/NodeJsLogo.svelte';
	import SvelteKitLogo from '$lib/svg/logos/SvelteKitLogo.svelte';
	import SvgLogo from '$lib/svg/logos/SvgLogo.svelte';
	import TailwindCssLogo from '$lib/svg/logos/TailwindCssLogo.svelte';
	import TypescriptLogo from '$lib/svg/logos/TypescriptLogo.svelte';
	import WebComponentsLogo from '$lib/svg/logos/WebComponentsLogo.svelte';
	import ZernaIoIcon from '$lib/svg/icons/ZernaIoIcon.svelte';
	export let translations: TranslationUi;
</script>

<svelte:head>
	<title>Zerna.io</title>
</svelte:head>

<div class="-mt-16 absolute w-full overflow-hidden -z-50 ">
	<WaveAnimatedBackground />
</div>

<div class="overflow-hidden max-w-7xl mx-auto px-4 lg:px-8">
	<section class="flex justify-center items-center overflow-hidden pt-8 sm:pt-12 sm:pb-12">
		<div class="sm:text-center flex flex-col justify-center">
			<ZernaIoIcon className="h-16 sm:h-24 stroke-white" />
			<h1 class="text-4xl pt-5 tracking-tight font-extrabold text-white sm:text-6xl">
				<span class="block">
					{translations['landing.intro.betterWay.i']}
				</span>
				<span
					class="block bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-indigo-500"
				>
					{translations['landing.intro.betterWay.ii']}</span
				>
			</h1>
			<p class="text-base pt-3 text-gray-300 sm:text-xl sm:pt-5 lg:text-lg xl:text-xl  max-w-4xl">
				{translations['landing.intro.betterWay.desc']}
			</p>
		</div>
	</section>
	<section class="py-12 sm:py-20">
		<div class="lg:text-center">
			<h2 class="text-base text-indigo-500 font-semibold tracking-wide uppercase">
				{translations['landing.experience.heading']}
			</h2>
			<p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
				{translations['landing.experience.intro']}
			</p>
			<p class="mt-4 text-xl text-gray-300 lg:mx-auto">
				{translations['landing.experience.desc']}
			</p>
		</div>
		<div class="mt-10">
			<dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
				<div class="relative">
					<dt>
						<div
							class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-l from-indigo-600 to-indigo-500 text-white"
						>
							<CarIcon />
						</div>
						<p class="ml-16 text-lg leading-6 font-medium text-slate-100">
							{translations['landing.experience.automotive.heading']}
						</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-slate-300">
						{translations['landing.experience.automotive.desc']}
					</dd>
				</div>

				<div class="relative">
					<dt>
						<div
							class="absolute flex items-center justify-center h-12 w-12 rounded-md  bg-gradient-to-l from-indigo-600 to-indigo-500 text-slate-300"
						>
							<ShieldIcon />
						</div>
						<p class="ml-16 text-lg leading-6 font-medium text-slate-100">
							{translations['landing.experience.insurance.heading']}
						</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-slate-300">
						{translations['landing.experience.insurance.desc']}
					</dd>
				</div>

				<div class="relative">
					<dt>
						<div
							class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-l from-indigo-600 to-indigo-500 text-white"
						>
							<LightningBoldIcon />
						</div>
						<p class="ml-16 text-lg leading-6 font-medium text-slate-100">
							{translations['landing.experience.energy.heading']}
						</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-slate-300">
						{translations['landing.experience.energy.desc']}
					</dd>
				</div>

				<div class="relative">
					<dt>
						<div
							class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-l from-indigo-600 to-indigo-500 text-white"
						>
							<HeartIcon />
						</div>
						<p class="ml-16 text-lg leading-6 font-medium text-slate-100">
							{translations['landing.experience.dating.heading']}
						</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-slate-300">
						{translations['landing.experience.dating.desc']}
					</dd>
				</div>
			</dl>
		</div>
	</section>

	<section class="py-12 sm:py-20">
		<div class="lg:text-center">
			<h2 class="text-base text-indigo-500 font-semibold tracking-wide uppercase">
				{translations['landing.techstack.heading']}
			</h2>
			<p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-100 sm:text-4xl">
				{translations['landing.techstack.intro']}
			</p>
			<p class="mt-4 text-xl text-slate-300 lg:mx-auto">
				{translations['landing.techstack.desc']}
			</p>
		</div>
		<div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-4 mx-auto">
			<div
				class="col-span-1 flex justify-center py-8 px-8 bg-slate-100 shadow-lg shadow-slate-100/20"
			>
				<TailwindCssLogo />
			</div>
			<div
				class="col-span-1 flex justify-center py-8 px-8 bg-slate-100 shadow-lg shadow-slate-100/20"
			>
				<SvelteKitLogo />
			</div>
			<div
				class="col-span-1 flex justify-center py-8 px-8 bg-slate-100 shadow-lg shadow-slate-100/20"
			>
				<SvgLogo />
			</div>
			<div
				class="col-span-1 flex justify-center py-8 px-8 bg-slate-100 shadow-lg shadow-slate-100/20"
			>
				<TypescriptLogo />
			</div>
			<div
				class="col-span-1 flex justify-center py-8 px-8 bg-slate-100 shadow-lg shadow-slate-100/20"
			>
				<WebComponentsLogo />
			</div>
			<div
				class="col-span-1 flex justify-center py-8 px-8 bg-slate-100 shadow-lg shadow-slate-100/20"
			>
				<NodeJsLogo />
			</div>
			<div
				class="col-span-1 flex justify-center py-8 px-8 bg-slate-100 shadow-lg shadow-slate-100/20"
			>
				<DockerLogo />
			</div>
			<div
				class="col-span-1 flex justify-center py-8 px-8 bg-slate-100 shadow-lg shadow-slate-100/20"
			>
				<GraphQlLogo />
			</div>
		</div>
	</section>

	<section class="py-12 sm:py-20">
		<div class="px-4 py-8 sm:px-8 sm:py-16 bg-indigo-600 rounded-sm">
			<blockquote>
				<div>
					<svg
						class="h-12 w-12 text-white opacity-25"
						fill="currentColor"
						viewBox="0 0 32 32"
						aria-hidden="true"
					>
						<path
							d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
						/>
					</svg>
					<p class="mt-6 text-2xl font-medium text-white">
						{translations['landing.blockquote.desc']}
					</p>
				</div>
				<footer class="mt-6">
					<p class="text-base font-medium text-white">Michael Zerna</p>
					<p class="text-base font-medium text-indigo-100">
						{translations['landing.blockquote.owner']}
					</p>
				</footer>
			</blockquote>
		</div>
	</section>
</div>
