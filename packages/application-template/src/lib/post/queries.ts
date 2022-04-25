import { gql } from 'graphql-request';
import { client } from '$lib/clients/graphql-client';
import type { PostSummaryFragment } from '$lib/types/graphql';

export const allPosts = gql`
	query allPosts {
		posts {
			title
			author {
				picture {
					url
				}
			}
			slug
			date
			excerpt
			tags
			coverImage {
				url
			}
		}
	}
`;

export const getAllPosts = async () => {
	try {
		const { posts }: { posts: PostSummaryFragment[] } = await client.request(allPosts);
		return {
			status: 200,
			body: { posts }
		};
	} catch (e) {
		return {
			status: e.status,
			body: {
				error: 'error'
			}
		};
	}
};
