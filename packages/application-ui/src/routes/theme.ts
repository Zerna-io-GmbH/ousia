import type { RequestHandler } from '@sveltejs/kit';

// PUT /theme
export const put: RequestHandler = async ({ request }) => {
	const theme = await request.text();
	return {
		headers: {
			'Set-Cookie': `theme=${theme}; SameSite=Strict; HttpOnly; Path=/`
		}
	};
};

// DELETE /theme
export const del: RequestHandler = async () => ({
	status: 204,
	headers: {
		'Set-Cookie': `theme= ; Max-Age=0; SameSite=Strict; HttpOnly; Path=/`
	}
});
