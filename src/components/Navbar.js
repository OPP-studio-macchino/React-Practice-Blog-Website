import Avatar from "@mui/material/Avatar";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	selectSignedIn,
	selectUserData,
	setInput,
} from "../features/userSlice";

import "../styling/navbar.css";

const Navbar = () => {
	const [inputValue, setInputValue] = useState("Main");
	const isSignedIn = useSelector(selectSignedIn);
	const userData = useSelector(selectUserData);

	const dispatch = useDispatch();

	const handleClick = (e) => {
		e.preventDefault();
		dispatch(setInput(inputValue));
	};

	return (
		<div className="navbar">
			<h1 className="navbar__header">BlogMania 💬</h1>
			{isSignedIn && (
				<div className="blog__search">
					<input
						className="search"
						placeholder="Search for a blog"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
					/>
					<button className="submit" onClick={handleClick}>
						Search
					</button>
				</div>
			)}

			{isSignedIn ? (
				<div className="navbar__user__data">
					<Avatar
						className="user"
						src={userData?.imageUrl}
						alt={userData?.name}
					/>
					<h1 className="signedIn">{userData?.givenName}</h1>
				</div>
			) : (
				<h1 className="notSignedIn">ログインしていません 😞</h1>
			)}
		</div>
	);
};

export default Navbar;
