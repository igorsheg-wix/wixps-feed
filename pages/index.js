import React, { Component, useState, useEffect } from "react";
import { withApollo } from "../apollo/client";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import "../static/styles/globals.scss";
import Project from "../components/Project";
import { motion, AnimatePresence } from "framer-motion";
import { projectTransition } from "../motion";
import { CONSTANTS } from "../utils";
import cookie from "cookie";
import { AbstractClient } from "../abstract";

const listAllProjects = gql`
	query(
		$token: String
		$projectsLimit: Int
		$collectionsLimit: Int
		$previewsLimit: Int
	) {
		projects(
			token: $token
			projectsLimit: $projectsLimit
			collectionsLimit: $collectionsLimit
			previewsLimit: $previewsLimit
		) {
			id
			name
			description
			createdByUser {
				name
				avatarUrl
			}
			collections {
				name
				layers {
					fileId
					pageId
					layerId
					previews {
						webUrl
					}
				}
			}
		}
	}
`;

const Index = ctx => {
	const {
		data: { projects },
		loading
	} = useQuery(listAllProjects, {
		variables: {
			token: ctx.token,
			projectsLimit: CONSTANTS.limits.projects,
			collectionsLimit: CONSTANTS.limits.collections,
			previewsLimit: CONSTANTS.limits.collections
		},
		pollInterval: CONSTANTS.intervals.refetch
	});

	const [projectStep, setStep] = useState(0);
	const delay = CONSTANTS.intervals.projects;
	useEffect(() => {
		if (projects) {
			console.log(projects);
			const lastProject = projectStep === projects.length - 1;
			const hasCollections = projects[projectStep].collections.length;

			if (lastProject) {
				const interval = setInterval(() => setStep(0), 0);
				return () => clearInterval(interval);
			}
			if (!hasCollections) {
				const interval = setInterval(() => setStep(projectStep + 1), 0);
				return () => clearInterval(interval);
			}

			const interval = setInterval(() => setStep(projectStep + 1), delay);
			return () => clearInterval(interval);
		}
	}, [projectStep]);

	if (loading) return <p>loading...</p>;
	return (
		<AnimatePresence>
			<motion.main
				key={projectStep}
				variants={projectTransition}
				initial="initial"
				animate="enter"
				exit="exit"
			>
				<Project {...projects[projectStep]} />
			</motion.main>
		</AnimatePresence>
	);
};

Index.getInitialProps = async ({ req, res }) => {
	const cookies = cookie.parse(
		req ? req.headers.cookie || "" : document.cookie
	);

	const validToken = await AbstractClient(cookies.token)
		.projects.list()
		.then(res => true)
		.catch(err => false);

	if (!cookies.token) {
		res.writeHead(302, {
			Location: "/token"
		});
		res.end();
	}
	if (!validToken) {
		res.writeHead(302, {
			Location: "/token"
		});
		res.end();
	} else {
		return { token: cookies.token };
	}
};

export default withApollo(Index);
