import { listProjects, listCollections, listPreviews } from "../abstract";

export const resolvers = {
	Query: {
		projects: async (obj, args, context, info) => {
			const { token, projectsLimit } = info.variableValues;
			return listProjects({ token, projectsLimit });
		}
	},
	Project: {
		async collections(parent, args, ctx, info) {
			const { id } = parent;
			const { collectionsLimit, previewsLimit, token } = info.variableValues;
			return listCollections({ token, id, collectionsLimit, previewsLimit });
		}
	},
	Layer: {
		async previews(parent, args, ctx, info) {
			const { token } = info.variableValues;
			// return listPreviews({ collection: parent, token: token })
			// 	.then(res => res)
			// 	.catch(err => {
			// 		console.log(err)
			// 		return {webUrl: null}
			// 	});
				return listPreviews({ collection: parent, token: token })
			// try {
			// 	return await listPreviews({ collection: parent, token: token });
			// } catch {
			// 	console.log("Error getting Preview");
			// 	return {webUrl: null}

			// }
		}
	}
};
