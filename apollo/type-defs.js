import gql from "graphql-tag";

export const typeDefs = gql`
	type Project {
		id: ID!
		name: String!
		createdByUser: User
		description: String
		updatedAt: String
		collections: [Collection!]!
	}

	type User {
		id: ID!
		name: String
		avatarUrl: String
	}

	type Collection {
		id: ID!
		name: String!
		layers(previewsLimit: Int): [Layer]
	}

	type Layer {
		fileId: ID!
		pageId: ID!
		layerId: ID!
		projectId: ID!
		previews: Preview
	}

	type Preview {
		webUrl: String
	}

	type Query {
		projects(projectsLimit: Int, token: String): [Project!]!
	}
`;
