import { detailsTransition, gradientTransition } from "../../motion";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CONSTANTS } from "../../utils";

const Details = ({ ...props }) => {
	const { name, description, createdByUser } = props;
	const [wrappTransition, setWrappTransition] = useState("initial");
	const [innersTransition, setInnersTransition] = useState("initial");

	useEffect(() => {
		setTimeout(() => {
			setWrappTransition("enter");
			setInnersTransition("enter");
		}, CONSTANTS.details.enterDelay);
		setTimeout(() => {
			setWrappTransition("initial");
			setInnersTransition("setAside");
		}, CONSTANTS.details.exitDelay);
	}, [name]);

	return (
		<>
			<motion.div
				variants={gradientTransition}
				initial="initial"
				animate={wrappTransition}
				className="detailsWrapp"
			/>

			<motion.div
				className="details"
				variants={detailsTransition}
				initial="initial"
				animate={innersTransition}
			>
					<motion.img src={createdByUser.avatarUrl} />
				<motion.div className="projectMeta">
					<h5>{createdByUser.name}</h5>

					<h1>{name}</h1>
					{innersTransition !== "setAside" && <motion.p positionTransition>{description}</motion.p>}
				</motion.div>
			</motion.div>
		</>
	);
};

export { Details };
