import { AbstractClient } from "./index";

export const listCollections = async ({ ...args }) => {
	const { token, id, collectionsLimit, previewsLimit } = args;

	const collections = await AbstractClient(token)
		.collections.list({
			projectId: id,
			branchId: "master"
		})
		.then(res => res.collections.slice(0, collectionsLimit));

	const limitedLayersCollection = collections.map(collection => {
		return {
			...collection,
			layers: collection.layers.slice(0, previewsLimit)
		};
	});

	return limitedLayersCollection;
};

export const listProjects = async ({ ...props }) => {
	const { projectsLimit, token } = props;
	return AbstractClient(token)
		.projects.list({ filter: "active" })
		.then(res => {
			return res.sort((d1,d2) => new Date(d1.updatedAt) - new Date(d2.updatedAt)).reverse().slice(0, projectsLimit);
		});
};
