import { StoreUtils, WindowUtils } from '$lib/utils';

const createLanguageStore = () => {
	const key = 'language';
	const defaultLanguage = 'en';
	const preferredLanguage = WindowUtils.getPreferredLanguage();
	const { subscribe, update, set } = StoreUtils.buildPersistentWritable<string>(
		key,
		preferredLanguage ?? defaultLanguage
	);

	return {
		subscribe,
		update,
		set
	};
};

export const language = createLanguageStore();
