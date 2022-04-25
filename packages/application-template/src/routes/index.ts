import { getAllPosts } from '$lib/post/queries';

export const get = async () => {
	return getAllPosts();
};
