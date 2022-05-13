import { WindowUtils } from '$lib/utils';
import { CookieUtils } from '$lib/utils/cookie';
import type { Handle, GetSession } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// @ts-ignore
	event.locals.theme = CookieUtils.getValue(event, 'theme');
	return await resolve(event);
};

export const getSession: GetSession = ({ request, locals }) => {
	const acceptedLanguage = request.headers.get('Accept-Language');
	// @ts-ignore
	const theme = locals.theme;
	return { acceptedLanguage, theme };
};
