<script lang="ts">
	import type { PostSummaryFragment } from '$lib/types/graphql';

	export let posts: PostSummaryFragment[];
</script>


<section class="py-16 px-4">
	<div class="mx-auto max-w-7xl grid md:grid-cols-4 gap-8">
		<div class="hidden md:block  col-span-1">
			<img
				class="h-64 lg:h-80"
				src="/illustrations/walk-dog.png"
				alt=""
				data-config-id="image8-1"
			/>
		</div>
		<div class="col-span-2 grid gap-3 justify-center">
			<div class="text-center">
				<span
					class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800"
				>
					Neu
				</span>
			</div>
			<h1
				class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl text-center"
			>
				<span class="block">Wir bauen die</span>
				<span class="block text-blue-500">Ideenschmiede</span>
				<span class="block">von Morgen schon heute</span>
			</h1>
			<p class="mt-4 max-w-2xl text-xl text-gray-500 text-center">
				Aus der Lausitz, für die Lausitz.
			</p>
		</div>
		<div class="hidden md:block col-span-1">
			<img
				class="h-64 lg:h-80"
				src="/illustrations/phone-online-shopping.png"
				alt=""
				data-config-id="image8-2"
			/>
		</div>
	</div>
</section>
<section class="bg-slate-50 py-16 px-4">
	<div class="lg:mx-auto lg:max-w-7xl ">
		<div class="lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 mb-12">
			<h2
				class="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-4 lg:mb-0"
			>
				<span data-config-id="03_header1">Unser</span>
				<span class="text-blue-500" data-config-id="03_header2">Drei-Stufen-Plan</span>
				<span data-config-id="03_header3 leading-relaxed" class=""
					>für deinen Weg in die Zukunft.</span
				>
			</h2>
			<p class="text-xl text-gray-500">
				Das Internet entwickelt sich wie alle Technologien weiter. Wir sind darauf vorbereitet und
				wir möchten, dass du es auch sein wirst. Mit unserem Programm werden wir sicherstellen, dass
				du die Technologien und das Vorgehen beherscht, um deine Ideen, oder Ideen von Anderen zum
				Leben zu erwecken.
			</p>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-5 text-center">
			<div class="bg-white shadow-lg rounded">
				<div class="px-4 py-5 sm:px-6 ">
					<span
						class="inline-flex items-center px-6 py-3 rounded-full text-2xl font-medium bg-blue-100 text-blue-800"
					>
						I
					</span>
				</div>

				<div class="px-5 py-5 sm:px-6">
					<img
						class="h-48 mx-auto"
						src="/illustrations/work-tv.png"
						alt=""
						data-config-id="image1"
					/>
					<h3
						class="mb-2 text-lg font-medium tracking-tight text-gray-900"
						data-config-id="header1"
					>
						Theoretische Ausbildung
					</h3>
					<p class="text-base text-gray-500" data-config-id="desc1">
						Warum kann die Entwicklung von Ideen nicht so leicht sein, wie das Zusammenbauen von
						Lego? Wir werden erfahren, dass es durchaus so sein kann.
					</p>
				</div>
			</div>
			<div class="bg-white shadow-lg rounded">
				<div class="px-4 py-5 sm:px-6 ">
					<span
						class="inline-flex items-center px-6 py-3 rounded-full text-2xl font-medium bg-blue-100 text-blue-800"
					>
						II
					</span>
				</div>
				<div class="px-5 py-5 sm:px-6">
					<img
						class="h-48 mx-auto"
						src="/illustrations/people-watching.png"
						alt=""
						data-config-id="image2"
					/>
					<h3
						class="mb-2 text-lg font-medium tracking-tight text-gray-900"
						data-config-id="header2"
					>
						Praktische Vertiefung
					</h3>
					<p class="text-base text-gray-500" data-config-id="desc2">
						Learning by Doing. Mit Hilfe unsere Interessengemeinschaft, werden wir erste Projekte
						aufbauen und so unser Wissen mit praxisbezug erweitern.
					</p>
				</div>
			</div>
			<div class="bg-white shadow-lg rounded">
				<div class="px-4 py-5 sm:px-6 ">
					<span
						class="inline-flex items-center px-6 py-3 rounded-full text-2xl font-medium bg-blue-100 text-blue-800"
					>
						III
					</span>
				</div>
				<div class="px-5 py-5 sm:px-6">
					<img
						class="h-48 mx-auto"
						src="/illustrations/financial-report.png"
						alt=""
						data-config-id="image3"
					/>
					<h3
						class="mb-2 text-lg font-medium tracking-tight text-gray-900"
						data-config-id="header2"
					>
						Ideenschmiede
					</h3>
					<p class="text-base text-gray-500" data-config-id="desc3">
						Baue mit deinem Team zusammen eine Idee auf und setze dein Vision um. Wir möchten dir
						den geeignetten Rahmen dafür bieten und stehen dir bei den zukünftigen Herausforderungen
						zur Seite.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="py-16 px-4">
	<div class="lg:mx-auto lg:max-w-7xl grid lg:grid-cols-2 lg:items-center">
		<div class="relative">
			<h2 class="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
				Werde Teil unserer Interessengemeinschaft
			</h2>
			<p class="mt-4 max-w-2xl text-xl text-gray-500">
				Wir setzen stark darauf, unsere Region für die Zukunft zu wadmen. Dafür vernetzen wir uns
				mit Firmen und Instituten aus der Lausitz. [Hier fetching Text einfügen]
			</p>

			<dl class="mt-10 space-y-10">
				<div class="relative">
					<dt>
						<div
							class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white"
						>
							<svg
								class="h-6 w-6"
								x-description="Heroicon name: outline/globe-alt"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
								/>
							</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium text-gray-900">Ab in die Zukunft</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-gray-500">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
						suscipit eaque, iste dolor cupiditate blanditiis ratione.
					</dd>
				</div>

				<div class="relative">
					<dt>
						<div
							class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white"
						>
							<svg
								class="h-6 w-6"
								x-description="Heroicon name: outline/scale"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
								/>
							</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium text-gray-900">
							Unterstützen Sie die Unternehmer:in von Morgen
						</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-gray-500">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
						suscipit eaque, iste dolor cupiditate blanditiis ratione.
					</dd>
				</div>

				<div class="relative">
					<dt>
						<div
							class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white"
						>
							<svg
								class="h-6 w-6"
								x-description="Heroicon name: outline/lightning-bolt"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M13 10V3L4 14h7v7l9-11h-7z"
								/>
							</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium text-gray-900">Transfers are instant</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-gray-500">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
						suscipit eaque, iste dolor cupiditate blanditiis ratione.
					</dd>
				</div>
			</dl>
		</div>
		<div class="hidden md:block" aria-hidden="true">
			<img class="sm:max-w-sm lg:max-w-full mx-auto" src="/illustrations/work-tv.png" alt="" />
		</div>
	</div>
</section>

<section class="bg-blue-700 py-16 px-4">
	<div class="lg:mx-auto lg:max-w-7xl text-center">
		<h2 class="text-3xl font-extrabold text-white sm:text-4xl">
			<span class="block">Interesse geweckt?</span>
			<span class="block">Dann nehme mit uns Kontakt auf.</span>
		</h2>
		<p class="mt-4 text-lg leading-6 text-blue-200">
			Wir wollen unseren Teil am Strukturwandel tragen. Es exestieren so viele Möglichkeiten für unsere Region, lass uns eine Neue hinzufügen.
		</p>
		<a
			href="#"
			class="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-500 bg-white hover:bg-blue-50 sm:w-auto"
		>
			Kontakt
		</a>
	</div>
</section>
