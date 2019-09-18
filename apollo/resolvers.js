import { listProjects,listProject, listCollections, listPreviews } from "../abstract";

export const resolvers = {
	Query: {
		projects: async (obj, args, context, info) => {
			const { token, projectsLimit, cursor } = info.variableValues;
			return listProjects({ token, projectsLimit, cursor });
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
			return await listPreviews({ collection: parent, token: token });
		}
	}
};
