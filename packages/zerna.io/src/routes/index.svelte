<script lang="ts">
	import type { TranslationUi } from '$lib/cms/translation/types';

	export let translations: TranslationUi;
</script>

<svelte:head>
	<title>Zerna.io</title>
</svelte:head>

<section class="flex justify-center items-center overflow-hidden pt-8 sm:pt-24 pb-8">
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
		<div class="sm:text-center lg:text-left flex flex-col justify-center">
			<h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-6xl">
				<span class="block">
					{translations['landing.intro.betterWay.i']}
				</span>
				<span
					class="block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400"
				>
					{translations['landing.intro.betterWay.ii']}</span
				>
			</h1>
			<p class="text-base pt-3 text-gray-300 sm:text-xl sm:pt-5 lg:text-lg xl:text-xl">
				Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo.
				Elit sunt amet fugiat veniam occaecat fugiat.
			</p>
		</div>
		<div class="pt-8 sm:pt-0">
			<img
				class="max-h-full"
				src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg"
				alt=""
			/>
		</div>
	</div>
</section>

<section class="py-12 sm:py-20">
	<div class="lg:text-center">
		<h2 class="text-base text-cyan-400 font-semibold tracking-wide uppercase">Experience</h2>
		<p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
			Wide Range of Industry Know-How
		</p>
		<p class="mt-4 text-xl text-gray-300 lg:mx-auto">
			Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate
			veritatis in accusamus quisquam.
		</p>
	</div>
	<div class="mt-10">
		<dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
			<div class="relative">
				<dt>
					<div
						class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
					>
						<!-- Heroicon name: outline/globe-alt -->
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
							/>
						</svg>
					</div>
					<p class="ml-16 text-lg leading-6 font-medium text-slate-100">
						Competitive exchange rates
					</p>
				</dt>
				<dd class="mt-2 ml-16 text-base text-slate-300">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
					suscipit eaque, iste dolor cupiditate blanditiis ratione.
				</dd>
			</div>

			<div class="relative">
				<dt>
					<div
						class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
					>
						<!-- Heroicon name: outline/scale -->
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
							/>
						</svg>
					</div>
					<p class="ml-16 text-lg leading-6 font-medium text-slate-100">No hidden fees</p>
				</dt>
				<dd class="mt-2 ml-16 text-base text-slate-300">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
					suscipit eaque, iste dolor cupiditate blanditiis ratione.
				</dd>
			</div>

			<div class="relative">
				<dt>
					<div
						class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
					>
						<!-- Heroicon name: outline/lightning-bolt -->
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 10V3L4 14h7v7l9-11h-7z"
							/>
						</svg>
					</div>
					<p class="ml-16 text-lg leading-6 font-medium text-slate-100">Transfers are instant</p>
				</dt>
				<dd class="mt-2 ml-16 text-base text-slate-300">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
					suscipit eaque, iste dolor cupiditate blanditiis ratione.
				</dd>
			</div>

			<div class="relative">
				<dt>
					<div
						class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
					>
						<!-- Heroicon name: outline/annotation -->
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
							/>
						</svg>
					</div>
					<p class="ml-16 text-lg leading-6 font-medium text-slate-100">Mobile notifications</p>
				</dt>
				<dd class="mt-2 ml-16 text-base text-slate-300">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
					suscipit eaque, iste dolor cupiditate blanditiis ratione.
				</dd>
			</div>
		</dl>
	</div>
</section>

<section class="py-12 sm:py-20">
	<div class="lg:text-center">
		<h2 class="text-base text-cyan-400 font-semibold tracking-wide uppercase">Tech Stack</h2>
		<p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-100 sm:text-4xl">
			How do we build our apps?
		</p>
		<p class="mt-4 text-xl text-slate-300 lg:mx-auto">
			Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate
			veritatis in accusamus quisquam.
		</p>
	</div>
	<div class="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5 mx-auto">
		<div class="col-span-1 flex justify-center py-8 px-8">
		  <img class="max-h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Workcation">
		</div>
		<div class="col-span-1 flex justify-center py-8 px-8">
		  <img class="max-h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage">
		</div>
		<div class="col-span-1 flex justify-center py-8 px-8">
		  <img class="max-h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple">
		</div>
		<div class="col-span-1 flex justify-center py-8 px-8">
		  <img class="max-h-12" src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg" alt="Laravel">
		</div>
		<div class="col-span-1 flex justify-center py-8 px-8">
		  <img class="max-h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit">
		</div>
		<div class="col-span-1 flex justify-center py-8 px-8">
		  <img class="max-h-12" src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg" alt="Statamic">
		</div>
	  </div>
</section>

<section class="py-12 sm:py-20">
	<div class="lg:text-center">
		<h2 class="text-base text-cyan-400 font-semibold tracking-wide uppercase">Blog</h2>
		<p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-100 sm:text-4xl">
			Our Recent Publications
		</p>
		<p class="mt-4 text-xl text-slate-300 lg:mx-auto">
			Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate
			veritatis in accusamus quisquam.
		</p>
	</div>
	<div class="grid gap-16 mt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
		<div class="flex flex-col overflow-hidden">
			<div class="flex-1 pt-4 flex flex-col justify-between">
				<div class="flex-1">
					<span
						class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
					>
						Badge
					</span>
					<a href="#" class="block mt-2">
						<p class="text-xl font-semibold text-slate-100">Boost your conversion rate</p>
						<p class="mt-3 text-base text-slate-300">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium
							praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.
						</p>
					</a>
				</div>
				<div class="mt-6 flex items-center">
					<div class="flex-shrink-0">
						<a href="#">
							<span class="sr-only">Roel Aufderehar</span>
							<img
								class="h-10 w-10 rounded-full"
								src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
							/>
						</a>
					</div>
					<div class="ml-3">
						<p class="text-sm font-medium text-slate-100">
							<a href="#" class="hover:underline"> Roel Aufderehar </a>
						</p>
						<div class="flex space-x-1 text-sm text-slate-300">
							<time datetime="2020-03-16"> Mar 16, 2020 </time>
							<span aria-hidden="true"> &middot; </span>
							<span> 6 min read </span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-col overflow-hidden">
			<div class="flex-1 pt-4 flex flex-col justify-between">
				<div class="flex-1">
					<span
						class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
					>
						Badge
					</span>
					<a href="#" class="block mt-2">
						<p class="text-xl font-semibold text-slate-100">Boost your conversion rate</p>
						<p class="mt-3 text-base text-slate-300">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium
							praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.
						</p>
					</a>
				</div>
				<div class="mt-6 flex items-center">
					<div class="flex-shrink-0">
						<a href="#">
							<span class="sr-only">Roel Aufderehar</span>
							<img
								class="h-10 w-10 rounded-full"
								src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
							/>
						</a>
					</div>
					<div class="ml-3">
						<p class="text-sm font-medium text-slate-100">
							<a href="#" class="hover:underline"> Roel Aufderehar </a>
						</p>
						<div class="flex space-x-1 text-sm text-slate-300">
							<time datetime="2020-03-16"> Mar 16, 2020 </time>
							<span aria-hidden="true"> &middot; </span>
							<span> 6 min read </span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-col overflow-hidden">
			<div class="flex-1 pt-4 flex flex-col justify-between">
				<div class="flex-1">
					<span
						class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
					>
						Badge
					</span>
					<a href="#" class="block mt-2">
						<p class="text-xl font-semibold text-slate-100">Boost your conversion rate</p>
						<p class="mt-3 text-base text-slate-300">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium
							praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.
						</p>
					</a>
				</div>
				<div class="mt-6 flex items-center">
					<div class="flex-shrink-0">
						<a href="#">
							<span class="sr-only">Roel Aufderehar</span>
							<img
								class="h-10 w-10 rounded-full"
								src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
							/>
						</a>
					</div>
					<div class="ml-3">
						<p class="text-sm font-medium text-slate-100">
							<a href="#" class="hover:underline"> Roel Aufderehar </a>
						</p>
						<div class="flex space-x-1 text-sm text-slate-300">
							<time datetime="2020-03-16"> Mar 16, 2020 </time>
							<span aria-hidden="true"> &middot; </span>
							<span> 6 min read </span>
						</div>
					</div>
				</div>
			</div>
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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae
					laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
				</p>
			</div>
			<footer class="mt-6">
				<p class="text-base font-medium text-white">Judith Black</p>
				<p class="text-base font-medium text-indigo-100">CEO at PureInsights</p>
			</footer>
		</blockquote>
	</div>
</section>
