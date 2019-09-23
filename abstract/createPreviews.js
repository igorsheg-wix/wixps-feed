import { AbstractClient } from "./index";
import { encode } from "base64-arraybuffer";

export const listPreviews = async ({ ...props }) => {
	const { collection, token } = props;
	const { projectId, fileId, pageId, layerId } = collection;
	const arrayBuffer = await AbstractClient(token).previews.raw(
		{
			projectId: projectId,
			branchId: "master",
			fileId: fileId,
			pageId: pageId,
			layerId: layerId,
			sha: "latest"
		},
		{
			disableWrite: true
		}
	);

	return { webUrl: encode(arrayBuffer) };
};
