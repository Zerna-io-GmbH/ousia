import { derived, type Readable, type Writable } from "svelte/store";

export class StoreUtils {
     static deriveOnBool<T>(store: Writable<boolean> | Readable<boolean>, onTrue: T, onFalse: T): Writable<T> | Readable<T> {
        return derived(store, (value, set) => {
            if (value) {
                set(onTrue);
            } else {
                set(onFalse);
            }
        });
    }
}
