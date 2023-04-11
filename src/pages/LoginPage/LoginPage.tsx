import React from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";
import FormLogin from "../../components/FormLogin/FormLogin";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";

const LoginPage = () => {
	return (
		<div className="login-page">
			<BreadCrumbs/>
			<PageTitle title="Sign In"/>
			<FormLogin/>
		</div>
	);
};

export default LoginPage;