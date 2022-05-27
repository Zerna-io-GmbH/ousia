<script lang="ts">
    import { toggleLoading } from '$lib/stores/loading';

    const toggleWithTimeout = () => {
        toggleLoading();
        setTimeout(() => toggleLoading(), 5000);
    } 
</script>

<main class="mx-auto container grid">
	<section class="py-5">
		<div class="bg-white shadow overflow-hidden sm:rounded-lg">
			<div class="px-4 py-5 sm:p-6">
				<h3 class="text-g leading-6 font-medium text-slate-900">Fullscreen Loader</h3>
				<p class="mt-1 max-w-2xl text-sm text-slate-500">
					Uses the writable loading store to open fullscreen loading. After pressing the toggle button, the loading screen will be shown for 5s. (see:
					lib/stores/loading | lib/components/loading/FullscreenLoader)
				</p>
			</div>
			<div class="border-t border-slate-200 px-4 py-5 sm:p-0 sm:divide-y sm:divide-slate-200">
				<div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<button
							type="button"
							on:click={() => toggleWithTimeout()}
							class="relative inline-flex items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
							>Toggle Loading</button
						>
				</div>
			</div>
		</div>
	</section>
</main>
