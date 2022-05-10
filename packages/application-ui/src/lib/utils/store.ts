import { subscribe } from 'svelte/internal';
import { derived, type Readable, type Writable } from 'svelte/store';
import { LocalStorageUtils } from './storage';

export interface PersistentWritableStore<T> {
	subscribe: (subscription: (value: T) => void) => () => void;
	set: (value: T) => void;
	update: (updater: (value: T) => T) => void;
}

export class StoreUtils {
	static deriveOnBool<T>(
		store: Writable<boolean> | Readable<boolean>,
		onTrue: T,
		onFalse: T
	): Writable<T> | Readable<T> {
		return derived(store, (value, set) => {
			if (value) {
				set(onTrue);
			} else {
				set(onFalse);
			}
		});
	}

	/** A wrapper around svelte/store that allows you to persist the value of a store and broadcast it to other open tabs.
	 *
	 * This method is heavily influcenced by the following cade:
	 * https://github.com/omer-g/persistent-svelte-store
	 *
	 */

	static buildPersistentWritable<T>(key: string, defaultValue: T): PersistentWritableStore<T> {
		let subscriptions: ((value: T) => void)[] = [];
		let storeValue: T;

		const currentValue: T = LocalStorageUtils.getItem(key);
		if (currentValue === null) {
			storeValue = defaultValue;
			LocalStorageUtils.setItem(key, storeValue);
		} else {
			storeValue = currentValue;
		}

		let channel = new BroadcastChannel(key);
		channel.onmessage = (event) => {
			if (event.data === key) {
				storeValue = LocalStorageUtils.getItem(key);
				subscriptions.forEach((subscription) => {
					subscription(storeValue);
				});
			}
		};

		const subscribe = (subscription: (value: T) => void) => {
			subscription(storeValue);
			subscriptions.push(subscription);
			if (subscriptions.length === 1 && channel === null) {
				channel = new BroadcastChannel(key);
			}

			const unsubscribe = () => {
				subscriptions = subscriptions.filter((s) => s !== subscription);
				if (channel && subscriptions.length === 0) {
					channel.close();
					channel = null;
				}
			};
			return unsubscribe;
		};

		const set = (value: T) => {
			storeValue = value;
			LocalStorageUtils.setItem(key, value);
			subscriptions.forEach((s) => s(storeValue));
			if (channel) {
				channel.postMessage(key);
			}
		};

		const update = (updater: (value: T) => T) => {
			set(updater(storeValue));
		};
		return { subscribe, set, update };
	}
}
