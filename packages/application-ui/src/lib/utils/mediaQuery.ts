import { readable, type Readable } from 'svelte/store';
import { WindowUtils } from './window';
import { EventChangeTypes } from '$lib/constants/window';

export class MediaQueryUtils {
	static createStore(
		key: string,
		changeType: EventChangeTypes = EventChangeTypes.Change
	): Readable<boolean> {
		return readable(WindowUtils.mediaQueryMatches(key), (set) => {
			const mediaQuery: MediaQueryList = WindowUtils.mediaQuery(key);
			if (!mediaQuery) {
				return;
			}
			const update = (event: MediaQueryList | MediaQueryListEvent) => {
				set(event.matches);
			};
			update(mediaQuery);
			mediaQuery.addEventListener(changeType, update);
			return () => mediaQuery.removeEventListener(changeType, update);
		});
	}
}
