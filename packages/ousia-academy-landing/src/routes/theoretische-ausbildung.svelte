<script lang="ts">
	import DockerLogo from '$lib/svg/logos/DockerLogo.svelte';
	import GraphQlLogo from '$lib/svg/logos/GraphQlLogo.svelte';
	import NodeJsLogo from '$lib/svg/logos/NodeJsLogo.svelte';
	import SvelteKitLogo from '$lib/svg/logos/SvelteKitLogo.svelte';
	import SvgLogo from '$lib/svg/logos/SvgLogo.svelte';
	import TailwindCssLogo from '$lib/svg/logos/TailwindCssLogo.svelte';
	import TypescriptLogo from '$lib/svg/logos/TypescriptLogo.svelte';
	import WebComponentsLogo from '$lib/svg/logos/WebComponentsLogo.svelte';
	import GithubLogo from '$lib/svg/logos/GithubLogo.svelte';
	import OurToDoIllustration from '$lib/svg/logos/illustrations/OurToDoIllustration.svelte';
</script>

<section class="py-16 px-4">
	<div class="mx-auto max-w-7xl grid gap-3 justify-center">
		<div class="text-center">
			<span
				class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800"
			>
				Theoretische Ausbildung
			</span>
		</div>
		<h1
			class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl text-center"
		>
			<span>Übernehme die</span>
			<span class="text-blue-500">Kontrolle</span>
			<span>über deine Zukunft.</span>
		</h1>

		<p class="mt-4 max-w-2xl text-xl text-gray-500 text-center justify-self-center">
			Starte deinen Weg mit unseren Modulen. Lerne Design, Entwicklung, Management und
			Bereitstellung von modernsten Web Applikationen.
		</p>
	</div>
</section>
<section class="bg-slate-50 px-4 py-16">
	<div class="mx-auto max-w-7xl">
		<div class="relative">
			<h2 class="text-base font-semibold tracking-wide text-blue-600 uppercase">Module</h2>
			<p class="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
				Alle wichtigen Techniken und Methoden der heutigen Zeit
			</p>
			<dl class="mt-10 grid lg:grid-cols-2 gap-8 grid-flow-row-dense">
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
									d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
								/>
							</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium text-gray-900">
							Grundlagen eines guten UX/UI-Designs
						</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-slate-500">
						Anwendungen sind nichts ohne ihre Nutzer. Demzufolge ist es wichtig, klar definierte
						Anwendungen zu entwerfen und sie ebenso modern aussehen zu lassen.
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
									d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
								/>
							</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium text-gray-900">
							Einführung in die Programmierung
						</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-slate-500">
						Bringen wir Web Applikationen zum Leben. Mit der Hilfe von aktuellen Verfahren erhalten
						wir einen tiefen Einblick darüber, wie effizient und qualitativ wir programmieren
						werden.
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
									d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium text-gray-900">
							Barrierefreiheit Im Web sicherstellen
						</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-slate-500">
						Jeder Mensch sollte die Gelegenheit besitzen, deine Software im Web zu genießen. Damit
						dies gelingt, werden wir uns ausführlich mit Zugänglichkeit und deren Sicherstellung
						auseinandersetzen.
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
									d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
								/>
							</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium text-gray-900">
							Web Anwendungen effizient managen
						</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-slate-500">
						Mithilfe von etablierten Prozessen, werden wir feststellen, dass unsere Projekte auch in
						Zukunft flexible genug bleiben. Somit stellen wir sicher, dass auch zukünftige Ideen
						Platz in unserem Projekt haben.
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
									d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
								/>
							</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium text-gray-900">
							Kontinuierliche Bereitstellung unserer Arbeit
						</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-slate-500">
						Mithilfe von etablierten Prozessen, werden wir feststellen, dass unsere Projekte auch in
						Zukunft flexible genug bleiben. Somit stellen wir sicher, dass auch zukünftige Ideen
						Platz in unserem Projekt haben.
					</dd>
				</div>
			</dl>
		</div>
	</div>
</section>
<section class="px-4 py-16">
	<div class="mx-auto max-w-7xl">
		<div class="relative">
			<h2 class="text-base font-semibold tracking-wide text-blue-600 uppercase">Technologien</h2>
			<p class="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
				Konzentration auf etablierte und hoch effiziente Technologien
			</p>
		</div>
		<div class="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-4 mx-auto">
			<div class="col-span-1 flex justify-center py-8 px-8 bg-slate-50 shadow-lg">
				<TailwindCssLogo />
			</div>
			<div class="col-span-1 flex justify-center py-8 px-8 bg-slate-50 shadow-lg">
				<SvelteKitLogo />
			</div>
			<div class="col-span-1 flex justify-center py-8 px-8 bg-slate-50 shadow-lg">
				<SvgLogo />
			</div>
			<div class="col-span-1 flex justify-center py-8 px-8 bg-slate-50 shadow-lg">
				<TypescriptLogo />
			</div>
			<div class="col-span-1 flex justify-center py-8 px-8 bg-slate-50 shadow-lg">
				<WebComponentsLogo />
			</div>
			<div class="col-span-1 flex justify-center py-8 px-8 bg-slate-50 shadow-lg">
				<NodeJsLogo />
			</div>
			<div class="col-span-1 flex justify-center py-8 px-8 bg-slate-50 shadow-lg">
				<DockerLogo />
			</div>
			<div class="col-span-1 flex justify-center py-8 px-8 bg-slate-50 shadow-lg">
				<GraphQlLogo />
			</div>
			<div class="col-span-1 flex justify-center py-8 px-8 bg-slate-50 shadow-lg">
				<GithubLogo />
			</div>
		</div>
	</div>
</section>

<section class="bg-blue-50 px-4 py-16">
	<div class="mx-auto max-w-7xl">
		<div class="text-center">
			<p
				class="mt-1 text-4xl font-extrabold text-slate-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
			>
				Dranbleiben
			</p>
			<p class="max-w-xl mx-auto mt-5 text-xl text-slate-500">
				Wir erhoffen uns so bald wie möglich nähere Informationen über den Start der theoretischen
				Ausbildung liefern zu können.
			</p>
		</div>
		<div class="mt-6 h-80 sm:h-96">
			<OurToDoIllustration />
		</div>
	</div>
</section>
