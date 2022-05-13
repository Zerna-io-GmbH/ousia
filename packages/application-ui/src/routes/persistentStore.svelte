<script lang="ts">
	import { setTheme, theme } from '$lib/stores';
	import { language } from '$lib/stores';
	const _language: SvelteStore<string> = language();
</script>

<main class="mx-auto container grid">
	<section class="py-5">
		<div class="bg-white shadow overflow-hidden sm:rounded-lg">
			<div class="px-4 py-5 sm:p-6">
				<h3 class="text-g leading-6 font-medium text-slate-900">LocalStorage with Tab Synch</h3>
				<p class="mt-1 max-w-2xl text-sm text-slate-500">
					Examples uses LocalStorage, Session, Navigator and Header for storage (see:
					lib/stores/language | hooks)
				</p>
			</div>
			<div class="border-t border-slate-200 px-4 py-5 sm:p-0 sm:divide-y sm:divide-slate-200">
				<div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<p class="text-md font-medium text-gray-500 self-center">
						Selected Language: {$_language}
					</p>
					<div class="sm:col-span-2">
						<input
							type="text"
							name="language"
							id="language"
							class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
							bind:value={$_language}
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="py-5">
		<div class="bg-white shadow overflow-hidden sm:rounded-lg">
			<div class="px-4 py-5 sm:p-6">
				<h3 class="text-g leading-6 font-medium text-slate-900">Cookie</h3>
				<p class="mt-1 max-w-2xl text-sm text-slate-500">
					Examples uses Cookies, Session and Media Queries for storage (see: lib/stores/theme |
					hooks)
				</p>
			</div>
			<div class="border-t border-slate-200 px-4 py-5 sm:p-0 sm:divide-y sm:divide-slate-200">
				<div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<p class="text-md font-medium text-gray-500 self-center">Theme: {$theme}</p>
					<div class="sm:col-span-2 inline-flex">
						<button
							type="button"
							on:click={() => setTheme('dark')}
							class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
							>Dark</button
						>
						<button
							type="button"
							on:click={() => setTheme('light')}
							class="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
							>Light</button
						>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>
