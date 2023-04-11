import React from 'react';

interface IUserProps {
	name: string
}

const User = ({name}: IUserProps) => {
	return (
		<div className="user-profile">
			<div className="user-avatar">
				AM
			</div>
			<div className="user-name">{name}</div>
		</div>
	);
};

export default User;