import { gql } from 'graphql-request';

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
