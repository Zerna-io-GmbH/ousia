import type { TranslationSummaryFragment } from '$lib/generated/graphql';
import { client } from '$lib/clients/graphql-client';
import { gql } from 'graphql-request';

export const translationsByPageStart = gql`
	query ($startWith: String!) {
		translations(where: { key_starts_with: $startWith }) {
			key
			value
		}
	}
`;

export const getTranslationsByKeyStart = async (startWith: string) => {
	try {
		const { translations }: { translations: TranslationSummaryFragment[] } = await client.request(
			translationsByPageStart,
			{ startWith }
		);
		return {
			status: 200,
			body: { translations: Object.fromEntries(translations.map(({ key, value }) => [key, value])) }
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
