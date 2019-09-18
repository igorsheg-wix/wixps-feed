import cors from "micro-cors";
import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "../../apollo/type-defs";
import { resolvers } from "../../apollo/resolvers";

const server = new ApolloServer({
	typeDefs,
	resolvers,
	api: {
		bodyParser: false
	}
});

export default cors(server.createHandler({ path: "/api" }));
