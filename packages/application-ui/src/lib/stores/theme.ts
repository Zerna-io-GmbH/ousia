import { MediaQueries } from '$lib/constants';
import { WindowUtils } from '$lib/utils';
import { SessionUtils } from '$lib/utils/session';
import { derived, type Readable } from 'svelte/store';

export const theme: Readable<string> = derived(SessionUtils.getSession(), ($session, set) => {
	if ($session.theme) {
		set($session.theme);
	} else if (WindowUtils.isBrowser) {
		const value = WindowUtils.mediaQueryMatches(MediaQueries.DarkTheme) ? 'dark' : 'light';
		set(value);
	}
});

export const setTheme = (theme: string) => {
	SessionUtils.getSession().update((session) => {
		return { ...session, theme };
	});
	fetch('/theme', { method: 'PUT', body: theme });
};
