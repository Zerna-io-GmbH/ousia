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

	const classes = 'block py-3 px-4 w-full shadow-sm rounded-md focus:outline-none';
	const classesInvalid =
		'text-red-900 border-red-300 placeholder-red-300 focus:ring-red-500 focus:border-red-500';
	const classesValid =
		'text-gray-900 border-gray-300 placeholder-slate-300 focus:ring-indigo-500 focus:border-indigo-500';
</script>

<ValidationMessage for={name} let:messages>
	{@const hasError = messages?.[0]}
	<div class="flex justify-between">
		<label for={name} class="block text-sm font-medium text-slate-900">{label}</label>
		<span class:hidden={!note} class="text-sm text-gray-500">{note}</span>
	</div>

	<div class="mt-1">
		{#if variant === FormElementVariant.Input}
			<input
				{type}
				{name}
				id={name}
				{autocomplete}
				{required}
				{placeholder}
				transition:fade|local
				aria-describedby="{name}-error"
				class="{classes} {hasError ? classesInvalid : classesValid}"
			/>
		{:else if variant === FormElementVariant.Textarea}
			<textarea
				id="message"
				{name}
				rows="4"
				maxlength="500"
				{required}
				transition:fade|local
				class="{classes} {hasError ? classesInvalid : classesValid}"
				aria-describedby="{name}-error"
			/>
		{/if}
	</div>
	<div class="mt-1 h-5 min-h-full">
		{#if hasError}
			<p transition:fade|local class="text-sm text-red-300" id="{name}-error">
				{hasError}
			</p>
		{/if}
	</div>
</ValidationMessage>
