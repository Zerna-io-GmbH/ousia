/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(event) {
    const acceptedLanguage = event.request.headers.get('Accept-Language');
    return { acceptedLanguage };
  }