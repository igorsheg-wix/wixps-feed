import React, { Component, useState, useEffect } from "react";
import { CONSTANTS } from "../../utils";
import { motion, AnimatePresence } from "framer-motion";
import { projectTransition } from "../../motion";

const Collection = ({ ...props }) => {
	const { name, layers } = props;
	const [previewStep, setStep] = useState(0);
	const delay = CONSTANTS.intervals.previews;

	useEffect(() => {
		if (layers) {
			const lastPreview = previewStep === layers.length - 1;

			if (lastPreview) {
				const interval = setInterval(() => setStep(0), delay);
				return () => clearInterval(interval);
			}
			const interval = setInterval(() => setStep(previewStep + 1), delay);

			return () => clearInterval(interval);
		}
	}, [previewStep]);

	if (!layers) return <p>Loading...</p>;
	if (layers) {
		return (
			<AnimatePresence>
				<motion.img
					key={previewStep}
					variants={projectTransition}
					initial="initial"
					animate="enter"
					exit="exit"
					className="preview"
					src={`data:image/png;base64,${layers[previewStep].previews.webUrl}`}
				></motion.img>
			</AnimatePresence>
		);
	}
	return <p>no previews</p>;
};
export { Collection };
