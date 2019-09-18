import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectTransition } from "../../motion";
import { Collection } from "./collections";
import { CONSTANTS } from "../../utils";
import { Details } from "./details";
import { useLoop } from "../../utils";

const Project = ({ ...props }) => {
	const { collections } = props;
	const [collectionStep, setStep] = useState(0);
	const lastCollection = collectionStep === collections.length - 1;
	const delay = CONSTANTS.intervals.collections;

	useEffect(() => {
		if (lastCollection) {
			const interval = setInterval(() => setStep(0), delay);
			return () => clearInterval(interval);
		}
		const interval = setInterval(() => setStep(collectionStep + 1), delay);
		return () => clearInterval(interval);
	}, [collectionStep]);

	if (!collections) return <p>Loading...</p>;
	if (collections) {
		return (
			<div className="project">
				<Details {...props} />
				<AnimatePresence>
					<motion.div
						key={collectionStep}
						variants={projectTransition}
						initial="initial"
						animate="enter"
						exit="exit"
						className="collections"
					>
						<Collection key={collectionStep} {...collections[collectionStep]} />
					</motion.div>
				</AnimatePresence>
			</div>
		);
	}
};

export default Project;
