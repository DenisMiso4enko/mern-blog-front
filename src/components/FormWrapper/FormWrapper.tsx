import React from 'react';

const FormWrapper = ({children, variant}: any) => {
	return (
		<div className={`form-wrapper form-wrapper--${variant}`}>
			{children}
		</div>
	);
};

export default FormWrapper;