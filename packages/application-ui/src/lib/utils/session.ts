import { session } from '$app/stores';
import { get, type Writable } from 'svelte/store';

export class SessionUtils {
	static getSessionValue(): AppSession {
		return get(session) as AppSession;
	}

	static getPreferredLanguage(): string {
		const session: AppSession = this.getSessionValue();
		return session?.acceptedLanguage || null;
	}

	static getSession(): Writable<AppSession> {
		return session as Writable<AppSession>;
	}
}

export interface AppSession extends App.Session {
	acceptedLanguage: string;
	theme: string;
}
