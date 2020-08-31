/**
 *   Component Navbar
 **/

import React, { useEffect, useState } from "react";

import "./Navbar.scss";

export const Nabvar = () => {
	const [show, handleShow] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else {
				handleShow(false);
			}
		});

		return () => {
			window.removeEventListener("scroll");
		};
	}, []);

	return (
		<div className={`Nav ${show && "Nav__black"}`}>
			<img
				className="Nav__logo"
				src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
				alt="Netflix-Logo"
			/>

			<img
				className="Nav__avatar"
				src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
				alt="Netflix-avatar"
			/>
		</div>
	);
};
// MOMA780803PG1 MOMA881123HCSRRL02
