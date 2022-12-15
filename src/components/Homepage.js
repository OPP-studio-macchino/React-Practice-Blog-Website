import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectSignedIn, setSignedIn, setUserData } from "../features/userSlice";

import { GoogleLogin } from "@react-oauth/google";

import '../styling/home.css';


const Homepage = () => {
	const isSignedIn = useSelector(selectSignedIn);

	const dispatch = useDispatch();
	const login = (response) => {
		console.log(response);
		dispatch(setSignedIn(true));
		dispatch(setUserData(response.profileObj));
	};

	return (
		<div className="home__page" style={{ display: isSignedIn ? "none" : "" }}>
			{!isSignedIn ? (
				<div className="login__message">
					<h2>📗</h2>
					<h1>A Readers favourite place!</h1>
					<p>
						We provide high quality online resource for reading blogs. Just sign
						up and start reading some quality blogs.
					</p>
					<GoogleLogin
						render={(renderProps) => (
							<button
								onClick={renderProps.onClick}
								disabled={renderProps.disabled}
							></button>
						)}
						onSuccess={login}
						onFailure={login}
						isSignedIn={true}
						cookiePolicy={"single_host_origin"}
					/>
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default Homepage;