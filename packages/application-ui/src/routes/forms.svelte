<script lang="ts">
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-yup';
	import { reporter } from '@felte/reporter-svelte';
	import * as yup from 'yup';
	import { animationExample } from '$lib/animations/animationExample';
	import { FormElementVariant } from '$lib/constants/form';
	import FormElement from '$lib/components/form/FormElement.svelte';
	const schema = yup.object().shape({
		firstName: yup.string().required(),
		lastName: yup.string().required(),
		email: yup.string().email().required(),
		subject: yup.string().required(),
		message: yup.string().max(500).required()
	});

	const { form } = createForm<yup.InferType<typeof schema>>({
		extend: [validator({ schema }), reporter],
		onSubmit: (values) => {
			console.log(values);
		}
	});
</script>

<main class="container mx-auto">
	<section class="grid justify-items-center overflow-hidden pt-8">
		<h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-6xl pb-12">
			Form Validation
		</h1>
		<div class="bg-white overflow-hidden rounded-lg w-full max-w-5xl">
			<h2 class="sr-only">Contact us</h2>
			<div class="grid grid-cols-1 lg:grid-cols-2">
				<div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
					<h3 class="text-lg font-medium text-slate-900" use:animationExample>Send us a message</h3>
					<form use:form class="mt-6 grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-8">
						<div>
							<FormElement
								name="firstName"
								label="First Name"
								autocomplete="first-name"
								placeholder="Jon"
								required
							/>
						</div>
						<div>
							<FormElement
								name="lastName"
								label="Last Name"
								autocomplete="family-name"
								placeholder="Doe"
								required
							/>
						</div>
						<div>
							<FormElement
								name="email"
								type="email"
								label="Email"
								autocomplete="email"
								placeholder="Jon@Doe.io"
								required
							/>
						</div>
						<div>
							<FormElement
								name="phone"
								label="Phone"
								autocomplete="phone"
								placeholder="+1 (555) 555-5555"
								note="Optional"
							/>
						</div>
						<div class="sm:col-span-2">
							<FormElement
								name="subject"
								label="Subject"
								placeholder="What can we do for you?"
								required
							/>
						</div>
						<div class="sm:col-span-2">
							<FormElement
								name="message"
								label="Message"
								note="Max. 500 characters"
								variant={FormElementVariant.Textarea}
								required
							/>
						</div>
						<div class="sm:col-span-2 sm:flex sm:justify-end">
							<button
								type="submit"
								class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto"
								>Submit</button
							>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
</main>
