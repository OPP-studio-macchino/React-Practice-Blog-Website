import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Blogs from './components/Blogs';

import { selectSignedIn } from "./features/userSlice";

import { GoogleOAuthProvider } from "@react-oauth/google";


function App() {

  const isSignedIn = useSelector(selectSignedIn);

  return (
		<div className="App">
			<GoogleOAuthProvider clientId="1087788488226-6g7svakm0f8p37lo6db79at2tqd6cjt7.apps.googleusercontent.com">
        <Navbar />
				<Homepage />
        {isSignedIn && <Blogs />}
			</GoogleOAuthProvider>
		</div>
	);
}

export default App;
