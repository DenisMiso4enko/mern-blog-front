import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {fetchGetPopularPosts} from "../../store/PostsSlice";
import Post from "../Post/Post";

const Popular = () => {
	const {popularPosts} = useSelector((state: RootState) => state.posts);

	const dispatch = useDispatch<AppDispatch>();
	useEffect(() => {
		dispatch(fetchGetPopularPosts());
	}, []);
	return (
		<div className="popular-posts">
			popular posts
			{/*<div className="popular-posts__list">*/}
			{/*	{popularPosts?.map(post => <Post key={post._id} {...post} variant="sm"/>)}*/}
			{/*</div>*/}
		</div>
	);
};

export default Popular;