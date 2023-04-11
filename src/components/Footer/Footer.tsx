import React from 'react';
import Wrapper from "../Wrapper/Wrapper";

const Footer = () => {
	const date = new Date().getFullYear()
	return (
		<Wrapper>
			<div className="footer">
				<div className="footer__item">©{date} Blogfolio</div>
				<div className="footer__item">All rights reserved</div>
			</div>
		</Wrapper>
	);
};

export default Footer;