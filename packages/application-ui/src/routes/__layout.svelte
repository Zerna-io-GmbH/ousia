<script lang="ts">
	import AppLayoutWrapper from '$lib/components/layout/AppLayoutWrapper.svelte';
	import '../app.css';
</script>

<AppLayoutWrapper>
	<main class="grid">
		<nav class="py-8">
			<ul class="grid grid-cols-1 gap-y-2">
				<li class="flex justify-center gap-x-8">
					<a href="/" class="text-lg font-medium text-slate-300 hover:text-indigo-300">Home</a>
					<a href="/forms" class="text-lg font-medium text-slate-300 hover:text-indigo-300">Forms</a
					>
				</li>
			</ul>
		</nav>
		<slot />
	</main>
</AppLayoutWrapper>
