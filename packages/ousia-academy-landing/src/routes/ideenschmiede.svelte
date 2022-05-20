<script lang="ts">
	import ContactCta from '$lib/components/ContactCta.svelte';

	import IdeaBulbIllustration from '$lib/svg/illustrations/IdeaBulbIllustration.svelte';
	import ScheduleWeekIllustration from '$lib/svg/illustrations/ScheduleWeekIllustration.svelte';
	import TechlifeIllustration from '$lib/svg/illustrations/TechlifeIllustration.svelte';
</script>

<section class="py-16 px-4">
	<div class="mx-auto max-w-7xl grid md:grid-cols-4 justify-center gap-8">
		<div class="hidden md:block col-span-1 self-center">
			<TechlifeIllustration />
		</div>
		<div class="md:col-span-2 space-y-6">
			<div class="text-center">
				<span
					class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800"
				>
					Ideenschmiede
				</span>
			</div>
			<h1
				class="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl text-center"
			>
				<span>Arbeite an</span>
				<span class="text-blue-500">deiner Vision</span>
				<span>für deine Zukunft</span>
			</h1>
			<p class="max-w-2xl text-xl text-slate-500 text-center justify-self-center">
				Die dritte Phase in unserem Programm wird dir ermöglichen, an einem größeren Projekt zu
				arbeiten. Entwickle mit uns deine Idee und baue deine Zukunft auf.
			</p>
		</div>
		<div class="hidden md:block col-span-1 w-4/5 self-center">
			<IdeaBulbIllustration />
		</div>
	</div>
</section>
<section class="px-4 py-16 bg-slate-50">
	<div class="mx-auto max-w-7xl">
		<div class="relative">
			<h2 class="text-base font-semibold tracking-wide text-blue-600 uppercase">Ziele</h2>
			<p class="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
				Was möchten wir mit dir Zusammen erreichen?
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
									d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium text-gray-900">Zeit für deine Idee</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-gray-500">
						Aufgrund deiner Ausbildung sollst du ein Pflichtpraktikum absolvieren? Perfekt! Wir
						bieten dir einen Rahmen, in dem du dein Wissen aus Theorie und Praxis nun direkt
						einsetzen kannst. Baue zusammen mit deinem Team eine deiner Idee auf und erlebe so den
						kompletten Entwicklungszyklus eines Projektes.
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
						<p class="ml-16 text-lg leading-6 font-medium text-gray-900">Nutze dein Wissen</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-gray-500">
						In Stufe I und II unseres Programmes, konntest du schon einiges lernen. Nun folgt das
						Wissen über Brainstorming, agile Entwicklungsmethoden und Murphy.
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
									d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium text-gray-900">
							Lass deine Firma entstehen
						</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-gray-500">
						Am Anfang aller Firmen war eine Idee vorhanden. Wir möchten dir den Rahmen bieten, dass
						du deine Idee professionell umsetzen kannst. Und wer weiß, eventuell entsteht deine
						eigene, erste Firma.
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
									d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
								/>
							</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium text-gray-900">
							Knüpfe Kontakte und erweitere dein Profil
						</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-gray-500">
						Wir helfen dir dabei, erste Kontakte zu knüpfen und erweitern somit deine beruflichen
						Möglichkeiten. In dieser Stufe kommen nun die Früchte zu tragen, welche du in den Ersten
						gesät hast.
					</dd>
				</div>
			</dl>
			<div class="mx-auto w-4/5 hidden md:block self-center">
				<ScheduleWeekIllustration />
			</div>
		</div>
	</div>
</section>
<section class="px-4 py-16">
	<div class="mx-auto max-w-7xl">
		<div class="relative">
			<h2 class="text-base font-semibold tracking-wide text-blue-600 uppercase">Ablauf</h2>
			<p class="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
				Wie kann ich an der Ideenschmiede teilnehmen?
			</p>
		</div>
		<div class="mt-10 text-center">
			<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
				<div class="pt-6">
					<div class="flow-root rounded-lg shadow-lg bg-gray-50 px-6 pb-8 h-full">
						<div class="-mt-6">
							<div>
								<span
									class="inline-flex items-center justify-center rounded-md bg-blue-500 p-3 shadow-lg  text-lg font-medium tracking-tight text-white"
								>
									Pflichtpraktikum
								</span>
							</div>
							<p class="mt-5 text-base text-gray-500">
								Du hast über mehrere Wochen Zeit und möchtest dein Praktikum sinnvoll nutzen?
								Perfekt! Dieser Rahmen ist Ideal um eine Idee enstehen zu lassen.
							</p>
						</div>
					</div>
				</div>

				<div class="pt-6">
					<div class="flow-root rounded-lg shadow-lg bg-gray-50 px-6 pb-8  h-full">
						<div class="-mt-6">
							<div>
								<span
									class="inline-flex items-center justify-center rounded-md bg-blue-500 p-3 shadow-lg  text-lg font-medium tracking-tight text-white"
								>
									Ferien
								</span>
							</div>
							<p class="mt-5 text-base text-gray-500">
								Hast du Lust deine Schul- oder Semesterferien "anders" zu verbringen? Wir könnten
								eine gute Zeit haben und dabei kreativ deine Auszeit nutzen.
							</p>
						</div>
					</div>
				</div>

				<div class="pt-6">
					<div class="flow-root rounded-lg shadow-lg bg-gray-50 px-6 pb-8  h-full">
						<div class="-mt-6">
							<div>
								<span
									class="inline-flex items-center justify-center rounded-md bg-blue-500 p-3 shadow-lg  text-lg font-medium tracking-tight text-white"
								>
									Abendkurse
								</span>
							</div>
							<p class="mt-5 text-base text-gray-500">
								Wie du vielleicht schon weißt, arbeiten wir in Phasen. Während der Phase der
								praktischen Vertiefung, könntest du durchaus ebenso an deiner Idee arbeiten.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<ContactCta />
