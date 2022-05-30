<script lang="ts">
	import ContactCta from '$lib/components/ContactCta.svelte';
	import ConversationIllustration from '$lib/svg/illustrations/ConversationIllustration.svelte';
	import InteressengemeinschaftIllustration from '$lib/svg/illustrations/InteressengemeinschaftIllustration.svelte';
</script>

<section class="py-16 px-4">
	<div class="mx-auto max-w-7xl grid md:grid-cols-4 justify-center gap-8">
		<div class="hidden md:block col-span-1 self-center">
			<InteressengemeinschaftIllustration />
		</div>
		<div class="md:col-span-2 space-y-6">
			<div class="text-center">
				<span
					class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800"
				>
					Interessengemeinschaft
				</span>
			</div>
			<h1
				class="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl text-center"
			>
				<span>Zusammen für die</span>
				<span class="text-blue-500">Lausitz</span>
			</h1>
			<p class="max-w-2xl text-xl text-slate-500 text-center justify-self-center">
				Wir vernetzen uns mit Firmen und Institutionen aus der Region. Damit sichern wir unser
				Ausbildungsprogramm und geben zusätzlich den Akteuren Zeit, sich zu vernetzen.
			</p>
		</div>
		<div class="hidden md:block col-span-1 w-4/5 self-center">
			<ConversationIllustration />
		</div>
	</div>
</section>
<section class="px-4 py-16 bg-slate-50">
	<div class="mx-auto max-w-7xl">
		<div class="relative">
			<h2 class="text-base font-semibold tracking-wide text-blue-600 uppercase">Ziele</h2>
			<p class="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
				Was wollen wir mit der Interessengemeinschaft erreichen?
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
									d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8"
								/>
							</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium text-slate-900">
							Bestandteil der Formel des Ausbildungserfolges werden
						</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-slate-500">
						Die Interessengemeinschaft spielt eine große Rolle in unserer Vision der Zusammenarbeit.
						Wir wollen gemeinsam eine Zukunft für Jugendliche in der Region ermöglichen.
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
									d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
								/>
							</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium text-slate-900">
							Praktische Erfahrungen ermöglichen
						</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-slate-500">
						Mit Hilfe der Bedürfnisse und Ideen aus der Interessengemeinschaft, bieten wir die
						Grundlage für die Stufe der Praktische Vertiefung. Ausbildungsteilnehmer können hier
						erste Erfahrungen sammeln und als Gegenleistung kleine Erfolge verzeichnen.
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
									d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium text-slate-900">
							Bereitstellung von Zeit und Know-How
						</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-slate-500">
						In der Region existiert eine große Menge an Know-how in den diversesten
						Wirtschaftszweigen. Dieses Wissen können wir teilen und dient ebenso als Mittel für
						unsere Zusammenarbeit.
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
							Mit Ideen das Ausbildungsprogramm verbessern
						</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-slate-500">
						Wie jedes gute Projekt, sollte sich auch die Ausbildung verbessern. Innerhalb der
						Gemeinschaft können wir daran gemeinsam arbeiten.
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
									d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
								/>
							</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium text-slate-900">
							Orte der Zusammenkunft bereitstellen
						</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-slate-500">
						Die einzelnen Phasen der Ausbildung benötigen verschiedene Grundlagen. Jedoch sind Orte
						der Zusammenkunft ein wichtiger Bestandteil. Als Gemeinschaft können wir diese Orte
						zusammen aufbauen.
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
									d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium text-slate-900">
							Die Suche nach den Profis von morgen erleichtern
						</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-slate-500">
						Jede Firma kennt das Problem der Akquise von geeignetem Personal. Als Bestandteil der
						Interessengemeinschaft können wir uns früh vernetzen und somit diese Suche erleichtern.
					</dd>
				</div>
			</dl>
		</div>
	</div>
</section>
<ContactCta />
