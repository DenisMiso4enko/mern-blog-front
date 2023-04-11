import React from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";
import FormSignUp from "../../components/FormSignUp/FormSignUp";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";

const SignUpPage = () => {
	return (
		<div className="signUp-page">
			<BreadCrumbs/>
			<PageTitle title="Sign Up"/>
			<FormSignUp/>
		</div>
	);
};

export default SignUpPage;