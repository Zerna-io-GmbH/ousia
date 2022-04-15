<script lang="ts">
	import { Duration } from '$lib/constants/animation';
	import { fade } from 'svelte/transition';
	import Logo from './Logo.svelte';
	let mobileMenuOpened = false;
	let duration = Duration.Default;

	function toggle(): void {
		mobileMenuOpened = !mobileMenuOpened;
	}
</script>

<header class="pt-6 ">
	<nav aria-label="Global" class="flex items-center justify-between">
		<div class="flex items-center flex-1">
			<div class="flex items-center justify-between w-full md:w-auto">
				<a href="/">
					<span class="sr-only">Workflow</span>
					<div class="h-8 w-auto sm:h-10">
						<Logo style="stroke-white" />
					</div>
				</a>
				<div class="-mr-2 flex items-center md:hidden">
					<button
						type="button"
						on:click={toggle}
						class="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
						aria-expanded="false"
					>
						<span class="sr-only">Open main menu</span>
						<!-- Heroicon name: outline/menu -->
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
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
			</div>
			<div class="hidden space-x-8 md:flex md:ml-10 justify-center">
				<a href="/contact" class="text-base font-medium text-white hover:text-gray-300">Contact</a>
				<a
					sveltekit:prefetch
					href="/terms"
					class="text-base font-medium text-white hover:text-gray-300">Terms</a
				>
			</div>
		</div>
		<div class="hidden md:flex md:items-center md:space-x-6">
			<a href="#" class="text-base font-medium text-white hover:text-gray-300"> Log in </a>
			<a
				href="#"
				class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
			>
				Start free trial
			</a>
		</div>
	</nav>
	{#if mobileMenuOpened}
		<div class="absolute z-50 top-0 inset-x-0 origin-top md:hidden " transition:fade={{ duration }}>
			<div class="rounded-lg shadow-md bg-white  ring-1 ring-black ring-opacity-5 overflow-hidden">
				<div class="px-5 pt-4 flex items-center justify-between">
					<div class="h-8 w-auto">
						<a href="/">
							<span class="sr-only">Workflow</span>
							<Logo />
						</a>
					</div>

					<div class="-mr-2">
						<button
							on:click={toggle}
							type="button"
							class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600"
						>
							<span class="sr-only">Close menu</span>
							<!-- Heroicon name: outline/x -->
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
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div class="pt-5 pb-6">
					<div class="px-2 space-y-1">
						<a
							href="/contact"
							class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
							>Contact</a
						>
						<a
							href="/terms"
							class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
							>Terms</a
						>
					</div>
					<div class="mt-6 px-5">
						<a
							href="#"
							class="block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700"
							>Start free trial</a
						>
					</div>
					<div class="mt-6 px-5">
						<p class="text-center text-base font-medium text-gray-500">
							Existing customer? <a href="#" class="text-gray-900 hover:underline">Login</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	{/if}
</header>
