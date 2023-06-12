import React from 'react';
import {IPost} from "../../types";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

const FullPost = ({date, description, dislikes, userId, image, title, text, _id, likes}: IPost) => {
	const {userId: id} = useSelector((state: RootState) => state.user);
	const navigate = useNavigate();

	const allowToAction = id === userId;


	return (
		<div>full post</div>
	);
};

export default FullPost;