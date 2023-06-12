import React from 'react';
import {NavLink} from "react-router-dom";
import {IPost} from '../../types';
import {BASE_URL} from '../../constance';
import {BiLike, BiDislike} from "react-icons/bi";
import {BsBookmark} from "react-icons/bs";
import {FiMoreHorizontal} from "react-icons/fi";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {httpRequest} from "../../utils/fetch";
import {updateLikes} from "../../store/PostsSlice";
import {updateFavorites} from "../../store/UserSlice";


interface IPostProps extends IPost {
	variant?: string
}

const Post = ({variant, description, _id, likes, image, title}: IPostProps) => {
	const {name, userId, favorites} = useSelector((state: RootState) => state.user);
	const dispatch = useDispatch<AppDispatch>();


	const handlePostLike = async () => {
		try {
			const response: Response = await httpRequest(`${BASE_URL}/posts/like`, "PUT", {postId: _id, userId});
			const {_id: id, likes} = await response.json();
			dispatch(updateLikes({id, likes}));
		} catch (error) {
			console.log(error);
		}
	};
	const handlePostDislike = async () => {
		try {
			const response = await httpRequest(`${BASE_URL}/posts/dislike`, "PUT", {postId: _id, userId});
			const {_id: id, likes} = await response.json();
			dispatch(updateLikes({id, likes}));
		} catch (error) {
			console.log(error);
		}
	};

	const handleAddToFavorite = async () => {
		try {
			const response: Response = await httpRequest(`${BASE_URL}/user/addToFavorites`, "PUT", {postId: _id, userId});
			const {_id: id, favorites} = await response.json();
			// dispatch(updateFavorites{id, favorites}))
			dispatch(updateFavorites({id, favorites}));
		} catch (error) {
			console.log(error);
		}
	};
	const handleRemoveFromFavorite = async () => {
		try {
			const response = await httpRequest(`${BASE_URL}/user/removeFromFavorites`, "PUT", {postId: _id, userId});
			const {_id: id, favorites} = await response.json();
			dispatch(updateFavorites({id, favorites}));
		} catch (error) {
			console.log(error);
		}
	};

	const isLikes = likes?.includes(userId!);
	const isFavorite = favorites?.includes(_id);

	return (
		<div className="post">
			post
		</div>
	);
};

export default Post;