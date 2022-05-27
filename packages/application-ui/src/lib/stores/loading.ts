import { writable } from "svelte/store";

export const loading = writable(false);

export const toggleLoading = () => loading.update(v => !v);