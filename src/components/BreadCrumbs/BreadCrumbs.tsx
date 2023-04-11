import React from 'react';
import {Link} from "react-router-dom";

interface IBreadCrumbsProps {
	current?: string
}

const BreadCrumbs = ({current}: IBreadCrumbsProps) => {
	return (
		<div className="crumbs">
			<Link className="crumbs__link" to="/">Home</Link>
			<p className="crumbs__link gray">{current}</p>
		</div>
	);
};

export default BreadCrumbs;