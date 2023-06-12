import React from 'react';

interface IBreadCrumbsProps {
	current?: string
}

const BreadCrumbs = ({current}: IBreadCrumbsProps) => {
	return (
		<div className="crumbs">
			crumbs
		</div>
	);
};

export default BreadCrumbs;