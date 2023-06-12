import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/HomePage/Home";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import AddPostPage from "../../pages/AddPostPage/AddPostPage";
import FullPostPage from "../../pages/FullPostPage/FullPostPage";
import SearchResultsPage from "../../pages/SearchResultsPage/SearchResultsPage";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/">
				<Route index element={<Home/>}/>
				<Route path="/sign-up" element={<SignUpPage/>}/>
				<Route path="/login" element={<LoginPage/>}/>
				<Route path="/create" element={<AddPostPage/>}/>
				<Route path="/post/:id" element={<FullPostPage/>}/>
				<Route path="/post/search/:query" element={<SearchResultsPage/>}/>
				<Route path="/posts/:_id/edit" element={<AddPostPage/>}/>
			</Route>
		</Routes>
	);
};

export default AppRoutes;