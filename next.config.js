const withSass = require("@zeit/next-sass");
const isDev = process.env.NODE_ENV !== "production";

module.exports = withSass({
	env: {
		TEMP_FOLDER: isDev ? "tmp/" : "/tmp/",
	},
	target: "serverless"
});
