import React from 'react';

interface IPageTitle {
	title: string,

}

const PageTitle = ({title}: IPageTitle) => {
	return (
		<div className="page-title">
			<h1>{title}</h1>
		</div>
	);
};

export default PageTitle;