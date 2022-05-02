import { getTranslationsByKeyStart } from '$lib/cms/translation/queries';

export const get = async () => {
	return getTranslationsByKeyStart('landing');
};
