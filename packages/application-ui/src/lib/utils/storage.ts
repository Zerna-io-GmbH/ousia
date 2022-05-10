import { WindowUtils } from './window';

export class LocalStorageUtils {
	static getItem<T>(key: string): T {
		if (WindowUtils.hasLocalStorage()) {
			const value = localStorage.getItem(key);
			return value ? JSON.parse(value) : null;
		}
		return null;
	}
	static setItem<T>(key: string, value: T): void {
		if (WindowUtils.hasLocalStorage()) {
			localStorage.setItem(key, JSON.stringify(value));
		}
	}
	static removeItem(key: string): void {
		if (WindowUtils.hasLocalStorage()) {
			localStorage.removeItem(key);
		}
	}
}
