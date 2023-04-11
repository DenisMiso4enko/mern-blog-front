import React from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";
import FormCreate from "../../components/FormCreate/FormCreate";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";

const AddPostPage = () => {
	return (
		<div className="add-post-page">
			<BreadCrumbs current="Add post"/>
			<PageTitle title="Add post"/>
			<FormCreate/>
		</div>
	);
};

export default AddPostPage;