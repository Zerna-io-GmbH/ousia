<script>
	import ContactCta from '$lib/components/ContactCta.svelte';
	import BuildingBlocksIllustration from '$lib/svg/illustrations/BuildingBlocksIllustration.svelte';
	import GraduateIllustration from '$lib/svg/illustrations/GraduateIllustration.svelte';
	import InteressengemeinschaftIllustration from '$lib/svg/illustrations/InteressengemeinschaftIllustration.svelte';
	import KommunikationIllustration from '$lib/svg/illustrations/KommunikationIllustration.svelte';
	import TechlifeIllustration from '$lib/svg/illustrations/TechlifeIllustration.svelte';
	import VirtualRealityIllustration from '$lib/svg/illustrations/VirtualRealityIllustration.svelte';
</script>

<section class="py-16 px-4">
	<div class="mx-auto max-w-7xl grid md:grid-cols-4 gap-8">
		<div class="hidden md:block col-span-1 self-center">
			<VirtualRealityIllustration />
		</div>
		<div class="col-span-2 space-y-6">
			<div class="text-center">
				<span
					class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800"
				>
					Ousia Akademie
				</span>
			</div>
			<h1
				class="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl text-center"
			>
				<span class="block">Wir bauen die</span>
				<span class="block text-blue-500">Ideenschmiede</span>
				<span class="block">von Morgen schon heute</span>
			</h1>
			<p class="mt-4 max-w-2xl text-xl text-slate-500 text-center">
				Aus der Lausitz, für die Lausitz.
			</p>
		</div>
		<div class="hidden md:block col-span-1 self-center">
			<GraduateIllustration className="h-44" />
		</div>
	</div>
</section>
<section class="bg-slate-50 py-16 px-4">
	<div class="lg:mx-auto lg:max-w-7xl ">
		<div class="lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 mb-12">
			<div class="relative">
				<h2 class="text-base font-semibold tracking-wide text-blue-600 uppercase">
					Ausbildungsphasen
				</h2>
				<p class="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
					<span data-config-id="03_header1">Unser</span>
					<span class="text-blue-500" data-config-id="03_header2">Drei-Stufen-Plan</span>
					<span data-config-id="03_header3 leading-relaxed" class=""
						>für deinen Weg in die Zukunft.</span
					>
				</p>
			</div>
			<p class="mt-4 text-xl text-slate-500">
				Das Internet entwickelt sich wie alle Technologien weiter. Wir sind darauf vorbereitet und
				wir möchten, dass du es auch sein wirst. Mit unserem Programm werden wir sicherstellen, dass
				du die Technologien und das Vorgehen beherrschst, um deine Ideen, oder Ideen von Anderen zum
				Leben zu erwecken.
			</p>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-5 text-center">
			<div class="bg-white shadow-lg rounded px-4 py-5 sm:px-6">
				<div class="relative">
					<span
						class="inline-flex items-center px-6 py-3 rounded-full text-2xl font-medium bg-blue-100 text-blue-800"
					>
						I
					</span>
				</div>

				<div class="grid auto-rows-max gap-5 pt-5">
					<div class="mx-auto">
						<BuildingBlocksIllustration className="h-40" />
					</div>
					<h3 class="text-lg font-medium tracking-tight text-slate-900" data-config-id="header1">
						Theoretische Ausbildung
					</h3>
					<p class="text-base text-slate-500" data-config-id="desc1">
						Warum kann die Entwicklung von Ideen nicht so leicht sein, wie das Zusammenbauen von
						Lego? Wir werden erfahren, dass es so sein kann.
					</p>
				</div>
			</div>
			<div class="bg-white shadow-lg rounded px-4 py-5 sm:px-6">
				<div class="relative">
					<span
						class="inline-flex items-center px-6 py-3 rounded-full text-2xl font-medium bg-blue-100 text-blue-800"
					>
						II
					</span>
				</div>

				<div class="grid auto-rows-max gap-5 pt-5">
					<div class="mx-auto">
						<KommunikationIllustration className="h-40" />
					</div>
					<h3 class="text-lg font-medium tracking-tight text-slate-900" data-config-id="header1">
						Praktische Vertiefung
					</h3>
					<p class="text-base text-slate-500" data-config-id="desc1">
						Learning by Doing. Mithilfe unserer Interessengemeinschaft werden wir erste Projekte
						aufbauen und so unser Wissen mit Praxisbezug erweitern.
					</p>
				</div>
			</div>

			<div class="bg-white shadow-lg rounded px-4 py-5 sm:px-6">
				<div class="relative">
					<span
						class="inline-flex items-center px-6 py-3 rounded-full text-2xl font-medium bg-blue-100 text-blue-800"
					>
						III
					</span>
				</div>

				<div class="grid auto-rows-max gap-5  pt-5">
					<div class="mx-auto">
						<TechlifeIllustration className="h-40" />
					</div>
					<h3 class="text-lg font-medium tracking-tight text-slate-900" data-config-id="header2">
						Ideenschmiede
					</h3>
					<p class="text-base text-slate-500" data-config-id="desc3">
						Baue mit deinem Team zusammen eine Idee auf und setze deine Vision um. Wir möchten dir
						den geeigneten Rahmen dafür bieten und stehen dir bei den zukünftigen Herausforderungen
						zur Seite.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="py-16 px-4">
	<div class="mx-auto lg:max-w-7xl">
		<div class="lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
			<div class="relative">
				<h2 class="text-base font-semibold tracking-wide text-blue-600 uppercase">
					Regionale Zusammenarbeit
				</h2>
				<p class="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
					Werde Teil unserer Interessengemeinschaft
				</p>
			</div>
			<p class="mt-4 text-xl text-slate-500">
				Wir setzen stark darauf, unsere Region für die Zukunft vorzubereiten. Dafür vernetzen wir
				uns mit Firmen und Instituten aus der Lausitz. Möchtest du mit deinem Unternehmen ein Teil
				davon sein? Falls ja, so kontaktiere uns.
			</p>
		</div>

		<div class="grid lg:grid-cols-2 gap-8 mt-10">
			<dl class="space-y-10">
				<div class="relative">
					<dt>
						<div
							class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path d="M12 14l9-5-9-5-9 5 9 5z" />
								<path
									d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
								/>
							</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium text-slate-900">
							Teilen wir unser Wissen
						</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-slate-500">
						Jedes Unternehmen hat unterschiedliche Herausforderungen gemeistert. Teilen wir diese
						Erfahrungen mit der kommenden Generation.
					</dd>
				</div>

				<div class="relative">
					<dt>
						<div
							class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
								/>
							</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium text-slate-900">
							Deine Ideen als Grundlage der Zukunft unserer Region
						</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-slate-500">
						Innerhalb der Interessengemeinschaft agieren wir auf Augenhöhe. Ideen sind willkommen
						und ein integraler Bestandteil unserer Ausbildungsphasen.
					</dd>
				</div>

				<div class="relative">
					<dt>
						<div
							class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium text-slate-900">
							Die Suche nach Talenten erleichtern
						</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-slate-500">
						Als Teil der Interessengemeinschaft hast du einen direkten Zugriff auf die
						Entwickler/Entwicklerin von Morgen. Vernetze dich und erleichtere dir die Rekrutierung.
					</dd>
				</div>
			</dl>
			<div class="mx-auto w-4/5 hidden md:block">
				<InteressengemeinschaftIllustration />
			</div>
		</div>
	</div>
</section>
<ContactCta />
