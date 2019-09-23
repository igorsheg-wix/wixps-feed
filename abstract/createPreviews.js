import { AbstractClient } from "./index";
import { encode } from "base64-arraybuffer";

export const listPreviews = async ({ ...props }) => {
	const { collection, token } = props;
	const { projectId, fileId, pageId, layerId } = collection;
	return AbstractClient(token)
		.previews.raw(
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
		)
		.then(res => {
			return {
				webUrl: encode(res)
			};
		})
		.catch(err => {
			console.log(err);
			return { webUrl: null };
		});

	return { webUrl: encode(arrayBuffer) };
};
