import React, { useState} from 'react';
import Input from "../../Input/Input";
import FormWrapper from "../FormWrapper/FormWrapper";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {Link, useNavigate} from "react-router-dom";
import {fetchSignUp} from "../../store/UserSlice";

const FormSignUp = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const {loading, error} = useSelector((state: RootState) => state.user)

	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()


	const handleSignUp = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault()
		const verification = name.trim() && email.trim() && password.trim() && confirmPassword.trim() && password === confirmPassword
		if (verification) {
			const userData = {
				name,
				email,
				password
			}
			dispatch(fetchSignUp({userData,navigate }))

		}

	}
	return (
		<FormWrapper>
			<form className="form-signUp" onSubmit={handleSignUp}>
				<Input onChange={(event) => setName(event.target.value)} value={name} placeholder="You name" title="Name"/>
				<Input onChange={(event) => setEmail(event.target.value)} value={email} placeholder="Your email" title="Email"
							 type="email"/>
				<Input onChange={(event) => setPassword(event.target.value)} value={password} placeholder="Your password"
							 title="Password" type="password"/>
				<Input onChange={(event) => setConfirmPassword(event.target.value)} value={confirmPassword}
							 placeholder="Confirm password" title="Confirm password" type="password"/>
				<button className="btn btn-primary" type="submit">Sign Up</button>
			</form>
			<br/>
			<p>Already have an account? <Link to='/login'>Sign In</Link></p>

		</FormWrapper>


	);
};

export default FormSignUp;