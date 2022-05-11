import { getStores } from "$app/stores";
import { get } from "svelte/store";

export class SessionUtils {

    static getSession(): AppSession {
        return get(getStores().session) as AppSession;
    }

    static getPreferredLanguage(): string {
        const session: AppSession = this.getSession();
        return session.acceptedLanguage || null;
    }
}

export interface AppSession extends App.Session {
    acceptedLanguage: string;
}