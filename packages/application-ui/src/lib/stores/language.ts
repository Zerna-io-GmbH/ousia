import { StoreUtils, WindowUtils } from '$lib/utils';
import { SessionUtils } from '$lib/utils/session';
import { getContext, setContext } from 'svelte';

const key = 'language';

export const createLanguageStore = () => {
	const defaultLanguage = 'en';
	const preferredLanguage =
		WindowUtils.getPreferredLanguage() || SessionUtils.getPreferredLanguage();
	const store = StoreUtils.buildPersistentWritable<string>(
		key,
		preferredLanguage ?? defaultLanguage
	);
	setContext(key, store);
};

export const language = (): SvelteStore<string> => {
	return getContext(key);
};
