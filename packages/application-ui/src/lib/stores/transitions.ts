import { StoreUtils } from '$lib/utils/store';
import { fade, fly } from 'svelte/transition';
import { reducedMotion } from './a11y';

export const a11yFly = StoreUtils.deriveOnBool(reducedMotion, fade, fly);
