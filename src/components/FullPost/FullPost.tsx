import React from 'react';
import {IPost} from "../../types";
import {BASE_URL} from "../../constance";
import {BiLike, BiDislike} from "react-icons/bi"
import {BsBookmark} from "react-icons/bs"

const FullPost = ({date, description, dislikes, userId, image, title, text, _id, likes}: IPost) => {
	return (
		<div className="post-full">
			<h2 className="post-full__title">{title}</h2>
			<img className="post-full__image" src={`${BASE_URL}${image}`} alt="post-image"/>
			<div className="text-container">
				<p className="post-full__text">{description}</p>
				<p className="post-full__text">{text}</p>
				<div className="post-full__actions">
					<div className="likes__action">
						<button className="btn btn-like icon"><BiLike/></button>
						<button className="btn btn-dislike icon"><BiDislike/></button>
					</div>
					<button className="btn btn-icon icon"><BsBookmark/> Add to favorites</button>
				</div>
			</div>

		</div>
	);
};

export default FullPost;