<script lang="ts">
	import PraxisnahesLernenIllustration from '$lib/svg/illustrations/PraxisnahesLernenIllustration.svelte';
	import CheckmarkIcon from '$lib/svg/icons/CheckmarkIcon.svelte';
	import KommunikationIllustration from '$lib/svg/illustrations/KommunikationIllustration.svelte';
	import ChatIllustration from '$lib/svg/illustrations/ChatIllustration.svelte';
	import ContactCta from '$lib/components/ContactCta.svelte';
</script>

<section class="py-16 px-4">
	<div class="mx-auto max-w-7xl grid md:grid-cols-4 justify-center gap-8">
		<div class="hidden md:block col-span-1 self-center">
			<KommunikationIllustration />
		</div>
		<div class="md:col-span-2 space-y-6">
			<div class="text-center">
				<span
					class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800"
				>
					Praktische Vertiefung
				</span>
			</div>
			<h1
				class="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl text-center"
			>
				<span>Learning by </span>
				<span class="text-blue-500">Doing</span>
			</h1>
			<p class="max-w-2xl text-xl text-slate-500 text-center justify-self-center">
				Lerne praktische Projektabläufe im Team und festige dein theoretisches Know-How. Mit realen
				Projekten bereiten wir uns auf den Alltag der Softwareentwicklung vor - inbesondere auf
				Murphys Gesetz.
			</p>
		</div>
		<div class="hidden md:block col-span-1 w-4/5 self-center">
			<ChatIllustration />
		</div>
	</div>
</section>
<section class="px-4 py-16 bg-slate-50">
	<div class="mx-auto max-w-7xl">
		<div class="relative">
			<h2 class="text-base font-semibold tracking-wide text-blue-600 uppercase">
				Praxisnahes Lernen
			</h2>
			<p class="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
				Die Bausteine für dich und die Region
			</p>
		</div>
		<div
			class="mt-10 space-y-8 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-8 sm:gap-y-4"
		>
			<div class="relative">
				<dt>
					<CheckmarkIcon />
					<p class="ml-9 text-lg leading-6 font-medium text-slate-900">
						Unternehmerisches Denken fördern
					</p>
				</dt>
				<dd class="mt-2 ml-9 text-base text-slate-500">
					Wir wollen für dich kleine Aufträge an Land ziehen und somit dabei helfen, dass du direkt
					aus der Praxis lernen kannst. Damit möchten wir auch dein Denken als Unternehmer
					anstacheln.
				</dd>
			</div>
			<div class="relative">
				<dt>
					<CheckmarkIcon />
					<p class="ml-9 text-lg leading-6 font-medium text-slate-900">
						Theoretisches Wissen anwenden
					</p>
				</dt>
				<dd class="mt-2 ml-9 text-base text-slate-500">
					In der ersten Stufe unseres Planes konntest du schon viel darüber lernen, wie
					hochperformante Web Applikationen umgesetzt werden. Nun wenden wir dieses Wissen an und
					vertiefen es.
				</dd>
			</div>
			<div class="relative">
				<dt>
					<CheckmarkIcon />
					<p class="ml-9 text-lg leading-6 font-medium text-slate-900">
						Zusammen Herausforderungen meistern
					</p>
				</dt>
				<dd class="mt-2 ml-9 text-base text-slate-500">
					Soziale Fähigkeiten sind im Berufsalltag von enormer Bedeutung. Wir alle haben schlechte
					und gute Tage. Dies auch bei deinen Mitmenschen zu berücksichtigen, kann gelernt werden
					und wird dabei helfen, dass wir ein Teamgefühl entstehen lassen.
				</dd>
			</div>
			<div class="relative">
				<dt>
					<CheckmarkIcon />
					<p class="ml-9 text-lg leading-6 font-medium text-slate-900">Remote Work Simulieren</p>
				</dt>
				<dd class="mt-2 ml-9 text-base text-slate-500">
					Remote Work wird immer mehr ein Bestandteil des modernen Arbeitslebens. Dies beinhaltet
					ganz eigene Herausforderungen in der Kommunikation mit dem Team und dem Arbeitsalltag. Wir
					möchten dir den Rahmen bieten, dich mit diesem Ansatz vertraut zu machen.
				</dd>
			</div>
			<div class="relative">
				<dt>
					<CheckmarkIcon />
					<p class="ml-9 text-lg leading-6 font-medium text-slate-900">
						Ort der Zusammenkunft ermöglichen
					</p>
				</dt>
				<dd class="mt-2 ml-9 text-base text-slate-500">
					Wir sind bestrebt, dir einen Raum der Entfaltung bereitzustellen. Dort kannst du mit
					deinem Team die Projekte angehen und kannst so den klassischen Arbeitsalltag simulieren
					und natürlich das Gefühl der Zusammengehörigkeit weiter ausbauen.
				</dd>
			</div>
			<div class="relative">
				<dt>
					<CheckmarkIcon />
					<p class="ml-9 text-lg leading-6 font-medium text-slate-900">
						Lokale Unternehmen Unterstützen
					</p>
				</dt>
				<dd class="mt-2 ml-9 text-base text-slate-500">
					Durch Projekte aus der Region, können wir nicht nur dafür sorgen, dass du dein Wissen
					weiter vertiefen kannst. Wir können zudem lokalen Unternehmen dabei helfen, sich
					weiterzuentwickeln.
				</dd>
			</div>
			<div class="relative">
				<dt>
					<CheckmarkIcon />
					<p class="ml-9 text-lg leading-6 font-medium text-slate-900">
						Von der Erfahrung der Interessengemeinschaft profitieren
					</p>
				</dt>
				<dd class="mt-2 ml-9 text-base text-slate-500">
					Unsere Interessengemeinschaft sorgt nicht nur dafür, dass wir regelmäßig praxisnahe
					Projekte durchführen können, sondern hilft uns auch mit ihrem Wissen weiter. Ihr Feedback
					ist ein wertvoller Bestandteil der Ausbildung.
				</dd>
			</div>
			<div class="relative">
				<dt>
					<CheckmarkIcon />
					<p class="ml-9 text-lg leading-6 font-medium text-slate-900">
						Vernetzen und erste Industriekontakte knüpfen
					</p>
				</dt>
				<dd class="mt-2 ml-9 text-base text-slate-500">
					Dank der Praxisvertiefung wirst du in der Lage sein, erste Kontakte zur lokalen Industrie
					zu knüpfen. Vernetze dich und werde ein Bestandteil der Zukunft unserer Region.
				</dd>
			</div>
		</div>
	</div>
</section>

<section class="px-4 py-16">
	<div class="mx-auto max-w-7xl">
		<div class="relative">
			<h2 class="text-base font-semibold tracking-wide text-blue-600 uppercase">
				Moderne Entwicklungsverfahren
			</h2>
			<p class="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
				Kommunikation, Management und der gesamte Rest
			</p>
		</div>
		<div class="grid lg:grid-cols-2 gap-8 mt-10 ">
			<dl class="space-y-10">
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
						<p class="ml-16 text-lg leading-6 font-medium text-gray-900">Verteilte Kommunikation</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-gray-500">
						Wir bauen die Web Applikationen der Zukunft. Aus diesem Grund sollten wir auf modernste
						Kommunikationsverfahren für Teams zurückgreifen. Discord, Github, Signal etc...Wir sind
						dabei.
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
									d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
								/>
							</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium text-gray-900">
							Planung und Anpassung mit Agilität
						</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-gray-500">
						Um den Erfolg unser Praxisprojekte sicherzustellen, nutzen wir etablierte
						Projektmanagement Verfahren. Scrum, Kanban und Github werden unsere stetigen Begleiter
						sein.
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
									d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
								/>
							</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium text-gray-900">
							Zugänglichkeit deiner Arbeit
						</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-gray-500">
						Um den größtmöglichen Spielraum für deine weitere Karriere zu garantieren, wird deine
						Arbeit so zugänglich wie möglich sein. Dank Github können wir verteilt Arbeiten und
						ebenso deine Arbeit präsentieren.
					</dd>
				</div>
			</dl>
			<div class="mx-auto w-4/5 hidden md:block">
				<PraxisnahesLernenIllustration />
			</div>
		</div>
	</div>
</section>
<ContactCta />
