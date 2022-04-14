import type { PageSummaryFragment } from "$lib/types/graphql"
import { client } from "$lib/clients/graphql-client";
import { pageBySlug } from "$lib/cms/page/queries";

export const get = async () => {
	try {
		const variables = {
			slug: "terms"
		};
		const { page }: { page: PageSummaryFragment } = await client.request(pageBySlug, variables);
		return {
			status: 200,
			body: { page }
		};
	} catch (e) {
		console.log(e);
		return {
			status: e.status,
			body: {
				error: 'error'
			}
		}
	}
}