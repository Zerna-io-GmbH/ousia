import { gql } from 'graphql-request';

export const allPages = gql`
	query AllPages {
		pages {
			slug
			seo {
				description
				keywords
			}
		}
	}
`;

export const pageBySlug = gql`
	query PageBySlug($slug: String!) {
		page(where: { slug: $slug }) {
			title
			content {
				html
			}
			slug
			seo {
				description
				keywords
			}
		}
	}
`;
