import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {useNavigate} from "react-router-dom";
import {fetchSignUp} from "../../store/UserSlice";

const FormSignUp = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const {loading, error} = useSelector((state: RootState) => state.user);

	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();


	const handleSignUp = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		const verification = name.trim() && email.trim() && password.trim() && confirmPassword.trim() && password === confirmPassword;
		if (verification) {
			const userData = {
				name,
				email,
				password
			};
			dispatch(fetchSignUp({userData, navigate}));

		}

	};
	return (
		<div>form sign up</div>
	);
};

export default FormSignUp;