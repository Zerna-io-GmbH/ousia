<script lang="ts">
	import { navigations } from '$lib/constants/navigation';
</script>

<footer class="bg-white">
	<div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
		<nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
			{#each navigations as nav}
				<div class="px-5 py-2">
					<a href={nav.path} class="text-base text-slate-500 hover:text-slate-900">{nav.name}</a>
				</div>
			{/each}
			<div class="px-5 py-2">
				<a href="/impressum" class="text-base text-slate-500 hover:text-slate-900">Impressum</a>
			</div>
			<div class="px-5 py-2">
				<a href="/datenschutz" class="text-base text-slate-500 hover:text-slate-900">Datenschutz</a>
			</div>
		</nav>
		<p class="mt-8 text-center text-base text-gray-400">&copy; 2022 Zerna.io GmbH</p>
	</div>
</footer>
