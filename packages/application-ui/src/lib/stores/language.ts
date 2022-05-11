import { StoreUtils, WindowUtils } from '$lib/utils';
import { SessionUtils } from '$lib/utils/session';



const createLanguageStore = () => {
	const key = 'language';
	const defaultLanguage = 'en';
	const preferredLanguage = WindowUtils.getPreferredLanguage() || SessionUtils.getPreferredLanguage();
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
