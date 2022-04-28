import { MediaQueries } from '$lib/constants/window';
import { MediaQueryUtils } from '$lib/utils/mediaQuery';

export const reducedMotion = MediaQueryUtils.createStore(MediaQueries.ReducedMotion);
