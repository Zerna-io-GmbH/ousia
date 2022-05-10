export class WindowUtils {
	static isDefined(): boolean {
		return typeof window !== 'undefined';
	}

	static isBrowser(): boolean {
		return this.isDefined() && typeof window.document !== 'undefined';
	}

	static isNode(): boolean {
		return this.isDefined() && typeof window.document === 'undefined';
	}

	static mediaQueryMatches(query: string): boolean {
		return this.isBrowser() && this.mediaQuery(query).matches;
	}

	static mediaQuery(query: string): MediaQueryList {
		return this.isBrowser() ? window.matchMedia(query) : null;
	}

	static getPreferredLanguage(): string {
		return this.isBrowser() ? navigator.language.split('-')[0] : null;
	}

	static hasLocalStorage(): boolean {
		return this.isBrowser() && typeof window.localStorage !== 'undefined';
	}

	static createBroadcastChannel(name: string): BroadcastChannel {
		return this.isBrowser() ? new BroadcastChannel(name) : null;
	}
}
