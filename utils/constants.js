const intervals = {
	refetch: 15 * 60 * 1000, // 15 min
	projects: 3 * 60 * 1000,
	collections: 60 * 1000,
	previews: 20 * 1000
};
const details = {
	enterDelay: 2 * 1000,
	exitDelay: 10 * 1000
};

const limits = {
	projects: 5, // No point of going higher since the app will refetch new 20 projects after refetch interval exactly at the end of the old 20
	collections: 3,
	previews: 3
};
export { intervals, limits, details };
