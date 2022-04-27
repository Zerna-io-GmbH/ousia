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
}
