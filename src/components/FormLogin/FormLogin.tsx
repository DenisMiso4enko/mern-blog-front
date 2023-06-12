import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {useNavigate} from "react-router-dom";
import {fetchLogin} from "../../store/UserSlice";

const FormLogin = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const {loading, error} = useSelector((state: RootState) => state.user);

	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();


	const handleSignUp = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		const verification = email.trim() && password.trim();
		if (verification) {
			const userData = {
				email,
				password
			};
			dispatch(fetchLogin({userData, navigate}));
		}
	};
	return (
		<div>form login</div>


	);
};

export default FormLogin;