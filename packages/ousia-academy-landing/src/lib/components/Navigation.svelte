<script lang="ts">
	import { Duration } from '$lib/constants/animation';
	import ZernaIoLogo from '$lib/svg/logos/ZernaIoLogo.svelte';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import { navigations } from '$lib/constants/navigation';
	let mobileMenuOpened = false;
	let duration = Duration.Default;

	function toggle(): void {
		mobileMenuOpened = !mobileMenuOpened;
	}
</script>

<header class="pt-6 max-w-7xl mx-auto px-4">
	<nav aria-label="Global" class="flex items-center justify-between">
		<div class="flex items-center flex-1">
			<div class="flex items-center justify-between w-full md:w-auto">
				<a href="/">
					<span class="sr-only">Workflow</span>
					<div class="h-8 w-auto sm:h-10">
						<ZernaIoLogo />
					</div>
				</a>
				<div class="-mr-2 flex items-center md:hidden">
					<button
						type="button"
						on:click={toggle}
						class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
			<div class="hidden space-x-8 md:flex md:ml-10 w-full justify-center">
				{#each navigations as nav}
					<a
						href={nav.path}
						class:underline={$page.url.pathname === nav.path}
						class="text-base font-medium text-gray-500 hover:text-gray-900">{nav.name}</a
					>
				{/each}
			</div>
		</div>
		<div class="hidden md:flex md:items-center md:space-x-6">
			<a
				href="#"
				class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
			>
				Kontakt
			</a>
		</div>
	</nav>
	{#if mobileMenuOpened}
		<div class="absolute z-30 top-0 inset-x-0 p-2 md:hidden " transition:fade={{ duration }}>
			<div class="rounded-lg shadow-md bg-white  ring-1 ring-black ring-opacity-5 overflow-hidden">
				<div class="px-5 pt-4 flex items-center justify-between">
					<div class="h-8 w-auto">
						<a href="/">
							<span class="sr-only">Workflow</span>
							<ZernaIoLogo />
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
								class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">{nav.name}</a
							>
						{/each}
					</div>
					<div class="mt-6 px-5">
						<a
							href="#"
							class="block text-center w-full py-3 px-4 rounded-md shadow border border-transparent text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
							>Kontakt</a
						>
					</div>
				</div>
			</div>
		</div>
	{/if}
</header>