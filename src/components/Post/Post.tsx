import React, {useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {IPost} from '../../types';
import {BASE_URL} from '../../constance';
import {BiLike, BiDislike} from "react-icons/bi"
import {BsBookmark} from "react-icons/bs"
import {FiMoreHorizontal} from "react-icons/fi"
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {httpRequest} from "../../utils/fetch";
import {updateLikes} from "../../store/PostsSlice";

interface IPostProps extends IPost {
	variant?: string
}

const Post = ({variant, date, description, dislikes, _id, likes, text, image, title}: IPostProps) => {
	const {name, userId} = useSelector((state: RootState) => state.user)
	const dispatch = useDispatch<AppDispatch>()



	const handlePostLike = async () => {
		try {
			const response: Response = await httpRequest(`${BASE_URL}/posts/like`, "PUT", {postId: _id, userId})
			const { _id: id, likes} = await response.json()
			dispatch(updateLikes({id, likes}))
		} catch (error) {
			console.log(error)
		}
	}

	const handlePostDislike = async () => {
		try {
			const response = await httpRequest(`${BASE_URL}/posts/dislike`, "PUT", {postId: _id, userId})
			const { _id: id, likes} = await response.json()
			dispatch(updateLikes({id, likes}))
		} catch (error) {
			console.log(error)
		}
	}

	const isLikes = likes?.includes(userId!)

	return (
		<div className={`post post-${variant}`}>
			<div className="post__content">
				<div className="post__left">
					<p className="post__date">April 20, 2021</p>
					<NavLink className="post__title" to={`/post/${_id}`}>{title}</NavLink>
					<p className="post__text">{description}</p>
				</div>
				<div className="post__right">
					<img src={`${BASE_URL}${image}`} alt="post-image"/>
				</div>

			</div>
			{name && (
				<div className="post__actions">
					<div className="actions__left">
						{likes?.length}
						{isLikes ? <button className="icon" onClick={handlePostDislike}><BiDislike/></button> :
							<button className="icon" onClick={handlePostLike}><BiLike/></button>}
					</div>
					<div className="actions__right">
						<button className="icon"><BsBookmark/></button>
						<button className="icon"><FiMoreHorizontal/></button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Post;