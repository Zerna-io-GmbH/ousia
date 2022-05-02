import type { PageSummaryFragment } from '$lib/generated/graphql';
import { client } from '$lib/clients/graphql-client';
import { gql } from 'graphql-request';

export const allPages = gql`
	query {
		pages {
			key
			seo {
				description
				keywords
			}
		}
	}
`;

export const pageByKey = gql`
	query ($key: String!) {
		page(where: { key: $key }) {
			title
			content {
				html
			}
			key
			seo {
				description
				keywords
			}
		}
	}
`;

export const getPageSummary = async (key: string) => {
	try {
		const variables = {
			key
		};
		const { page }: { page: PageSummaryFragment } = await client.request(pageByKey, variables);
		return {
			status: 200,
			body: { page }
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
