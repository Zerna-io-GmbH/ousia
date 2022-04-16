import { getPageSummary } from '$lib/cms/page/queries';

export const get = async () => {
	return getPageSummary('terms');
};
