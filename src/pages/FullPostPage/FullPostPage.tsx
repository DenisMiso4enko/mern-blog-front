import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {IPost} from "../../types";
import {httpRequest} from "../../utils/fetch";
import {BASE_URL} from "../../constance";


const FullPostPage = () => {
	const {id} = useParams();
	const [post, setPost] = useState({} as IPost);

	const fetchGetOnePost = async () => {
		const response = await httpRequest(`${BASE_URL}/posts/getOne/${id}`, 'GET');
		const data = await response.json();
		setPost(data);
	};

	useEffect( () => {
		fetchGetOnePost();
	}, []);

	return (
		<div className="full-post-page">
		</div>
	);
};

export default FullPostPage;