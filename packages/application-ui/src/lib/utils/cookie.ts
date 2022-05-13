import type { RequestEvent } from '@sveltejs/kit/types/private';

export class CookieUtils {
	static getValue(event: RequestEvent, name: string): string | null {
		const cookie = event?.request?.headers.get('cookie');
		return cookie?.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || null;
	}
}
