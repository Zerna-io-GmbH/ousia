<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { Duration } from '$lib/constants/animation';
	import { fade } from 'svelte/transition';
	import { navigations } from '$lib/constants/navigation';
	import { clickOutside } from '@ousia/application-ui/events';
	import { page } from '$app/stores';

	import Logo from './Logo.svelte';
	let mobileMenuOpened = false;
	let duration = Duration.Default;

	afterNavigate(() => {
		if (mobileMenuOpened) {
			toggle();
		}
	});

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
				{#each navigations as nav}
					<a
						href={nav.path}
						sveltekit:prefetch
						class:underline={$page.url.pathname === nav.path}
						class="text-base font-medium text-white hover:text-slate-300">{nav.name}</a
					>
				{/each}
			</div>
		</div>
	</nav>
	{#if mobileMenuOpened}
		<div
			use:clickOutside
			on:click_outside={toggle}
			class="absolute z-50 top-0 inset-x-0 origin-top md:hidden "
			transition:fade={{ duration }}
		>
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
						{#each navigations as nav}
							<a
								href={nav.path}
								class:underline={$page.url.pathname === nav.path}
								class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
								>{nav.name}</a
							>
						{/each}
					</div>
				</div>
			</div>
		</div>
	{/if}
</header>
