import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";

import "./LoginFormPage.css";

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to='/' />
  );

  const handleLogin = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const handleDemo = (e) => {
    e.preventDefault();

    return dispatch(sessionActions.login({ credential: 'Demo-lition', password: 'password'})).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    )
  };

  return (
    <div className="login-form-main">
      <form className="login-form" onSubmit={handleLogin}>
      <div className="title">Login</div>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div className="form-label">
          <label>
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              placeholder='Email address or Username'
              required
            />
          </label>
        </div>
        <div className="form-label">
          <label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              required
            />
          </label>
        </div>
        <div className="btn-container">
          <button type="submit">Log In</button>
        </div>
        <div className="demo-btn">
            <button type='button' onClick={handleDemo}>Demo User</button>
        </div>
        <div className="sign-up-container">
          <div className="sign-up-title">Sign up for Photo-Dump!</div>
          <Link className="sign-up-link" to='/signup'>Sign Up here.</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginFormPage;
