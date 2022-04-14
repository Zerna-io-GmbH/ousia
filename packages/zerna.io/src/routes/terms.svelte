<script lang="ts">
    import type { PageSummaryFragment } from "$lib/types/graphql";
    export let page: PageSummaryFragment;
</script>

<svelte:head>
    <title>{page.title}</title>
    <keywords>{page.seo.keywords}</keywords>
    <keywords>{page.seo.description}</keywords>
</svelte:head>

<section class="grid justify-items-center overflow-hidden pt-8">
    <h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-6xl pb-12">{page.title}</h1>
    <article class="bg-white overflow-hidden rounded-lg w-full max-w-5xl px-4 py-4 sm:px-6 prose">
        {@html page.content.html}
    </article>
</section>