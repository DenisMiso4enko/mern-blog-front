import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {Link, useNavigate} from "react-router-dom";
import {fetchLogin} from "../../store/UserSlice";
import FormWrapper from "../FormWrapper/FormWrapper";
import Input from "../../Input/Input";

const FormLogin = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const {loading, error} = useSelector((state: RootState) => state.user)

	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()


	const handleSignUp = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault()
		const verification = email.trim() && password.trim()
		if (verification) {
			const userData = {
				email,
				password
			}
			dispatch(fetchLogin({userData,navigate }))
		}
	}
	return (
		<FormWrapper>
			<form className="form-signUp" onSubmit={handleSignUp}>
				<Input onChange={(event) => setEmail(event.target.value)} value={email} placeholder="Your email" title="Email"
							 type="email"/>
				<Input onChange={(event) => setPassword(event.target.value)} value={password} placeholder="Your password"
							 title="Password" type="password"/>
				<button className="btn btn-primary" type="submit">Sign In</button>
			</form>
			<br/>
			<p>Don’t have an account? <Link to='/sign-up'>Sign Up</Link></p>

		</FormWrapper>


	);
};

export default FormLogin;