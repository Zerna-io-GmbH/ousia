import type { PostSummaryFragment } from '$lib/types/graphql';
import { client } from '$lib/clients/graphql-client';
import { allPosts } from '$lib/post/queries';

export const get = async () => {
	try {
		const { posts }: { posts: PostSummaryFragment } = await client.request(allPosts);
		return {
			status: 200,
			body: { posts }
		};
	} catch (e) {
		return {
			status: 500,
			body: {
				error: 'Error naming'
			}
		};
	}
};
