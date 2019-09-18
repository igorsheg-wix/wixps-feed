import * as Abstract from "abstract-sdk";
import { listCollections, listProjects } from "./buildProjects";
import { listPreviews } from "./createPreviews";

const AbstractClient = token => {
	return new Abstract.Client({
		accessToken: token,
		transportMode: "api"
	});
};

export { AbstractClient, listProjects, listCollections, listPreviews };
