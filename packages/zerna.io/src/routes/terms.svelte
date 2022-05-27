<script lang="ts">
	import type { PageSummaryFragment } from '$lib/generated/graphql';
	export let page: PageSummaryFragment;
</script>

<section class="grid justify-items-center overflow-hidden pt-8 max-w-7xl w-full">
	<h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-6xl pb-12">{page.title}</h1>
	<article class="overflow-hidden prose prose-invert  max-w-7xl w-full">
		{@html page.content.html}
	</article>
</section>
