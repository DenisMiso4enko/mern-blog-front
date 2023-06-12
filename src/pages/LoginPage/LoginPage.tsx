import React, { useState } from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { fetchLogin } from "../../store/UserSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("dd@d.com");
  const [password, setPassword] = useState("adc");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(fetchLogin({ userData, navigate }));
  };

  return (
    <div className="login">
      <h1 className="login__title">Login</h1>
      <form onSubmit={handleSubmitForm}>
        <input
          type="email"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button className="btn btn-danger btn-general">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
