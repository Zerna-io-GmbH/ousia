<script lang="ts">
	import { loading } from '$lib/stores/loading';
    export let className = '';
    
</script>

{#if $loading}
	<div class="fixed z-50 top-0 left-0 right-0  min-w-full bg-indigo-300 opacity-75 {className}">
        <div class="flex justify-center items-center min-h-screen">
            <slot></slot>
        </div>
    </div>
{/if}



