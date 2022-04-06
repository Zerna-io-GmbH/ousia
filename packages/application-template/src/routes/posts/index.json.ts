import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

export const get = async () => {
	try {
		const query = gql`
			query Posts {
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
		const { posts } = await client.request(query);
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
