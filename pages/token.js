import React, { Component, useState, useEffect, useRef } from "react";
import * as jscookie from "js-cookie";
import cookie from "cookie";
import "../static/styles/globals.scss";
import { withApollo } from "../apollo/client";
import { AbstractClient } from "../abstract";



const TokenForm = () => {
	const tokenRef = useRef(null);
	const handleSubmit = () => {
		tokenRef.current.value.length &&
			jscookie.set("token", tokenRef.current.value, { expires: 1 });
	};

	return (
		<>
	
		<form className="tokenForm">
			<div className="inners">
				<h1>Enter your Abstract personal access token</h1>
				<p>
					Don't have one yet? You can generate a personal access token right{" "}
					<a href="https://app.goabstract.com/account/tokens">here</a>.
				</p>
				<div className="form">
					<input ref={tokenRef} type="text" />
					<button onClick={handleSubmit}>Submit Token</button>
				</div>
			</div>
		</form>
		</>
	);
};

TokenForm.getInitialProps = async ({ req, res }) => {
	const cookies = cookie.parse(
		req ? req.headers.cookie || "" : document.cookie
	);

	const validToken = await AbstractClient(cookies.token)
		.projects.list()
		.then(res => true)
		.catch(err => false);
	if (validToken) {
		res.writeHead(302, {
			Location: "/"
		});
		res.end();
	} else {
		return {};
	}
};

export default withApollo(TokenForm);
