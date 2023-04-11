import React, {useEffect} from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";
import FormCreate from "../../components/FormCreate/FormCreate";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import {useParams} from "react-router-dom";

const AddPostPage = () => {
	const { _id: id } = useParams()


	return (
		<div className="add-post-page">
			<BreadCrumbs current={id ? "Edit post" : "Add post"}/>
			<PageTitle title={id ? "Edit post" : "Add post"}/>
			<FormCreate/>
		</div>
	);
};

export default AddPostPage;