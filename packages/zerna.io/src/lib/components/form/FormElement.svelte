<script lang="ts">
	import { ValidationMessage } from '@felte/reporter-svelte';
	import { fade } from 'svelte/transition';
	import { FormElementVariant } from '$lib/constants/form';

	export let variant: FormElementVariant = FormElementVariant.Input;
	export let name: string;
	export let label: string;
	export let autocomplete: string = 'off';
	export let required = false;
	export let type = 'text';
	export let placeholder: string = '';
	export let note: string = '';
	
	const style = 'block py-3 px-4 w-full shadow-sm rounded-md';
	const styleError = 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500';
	const styleNoError = 'text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 placeholder-slate-300';
</script>

<div>
	<ValidationMessage for={name} let:messages>
		<div class="flex justify-between">
			<label for={name} class="block text-sm font-medium text-gray-900">{label}</label>
			<span class:hidden={!note} class="text-sm text-gray-500">{note}</span>
		</div>

		<div class="mt-1">
			{#if variant === FormElementVariant.Input}
				<input
					{type}
					{name}
					id={name}
					{autocomplete}
					transition:fade 
					{required}
					class="{style} {messages?.[0]
						? styleError
						: styleNoError}"
					{placeholder}
					aria-describedby="{name}-error"
				/>
			{:else if variant === FormElementVariant.Textarea}
				<textarea
					id="message"
					{name}
					rows="4"
					maxlength="500"
					transition:fade 
					{required}
					class="{style} {messages?.[0]
						? styleError
						: styleNoError}"
					aria-describedby="message-error"
				/>
			{/if}
		</div>
		<div class="mt-1 h-5 min-h-full">
			{#if messages?.[0]}
			<p transition:fade class=" text-sm text-red-300" id="{name}-error">
				{messages?.[0]}
			</p>
		{/if}
		</div>
	</ValidationMessage>
</div>
