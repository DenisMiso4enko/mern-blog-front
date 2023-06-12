import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {fetchGetFavoritesPosts} from "../../store/PostsSlice";
import Post from "../Post/Post";

const Favorites = () => {
	const {name, userId, favorites} = useSelector((state: RootState) => state.user);
	const {favoritesPosts} = useSelector((state: RootState) => state.posts);
	const dispatch = useDispatch<AppDispatch>();


	useEffect(() => {
			dispatch(fetchGetFavoritesPosts(favorites!));
	}, []);
	return (
		<div> Favorites</div>
	);
};

export default Favorites;