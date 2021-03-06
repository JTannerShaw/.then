import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from "react-router-dom";
import * as sessionActions from '../../store/session';
import Footer from "../Footer";
import './LoginForm.css'

const LoginFormPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to='/' />
  )



  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  const handleDemo = async (e) => {
    e.preventDefault();
    return dispatch(sessionActions.login({ credential: 'Demo-user', password: 'password' }))
  }
  return (
    <div className="form-container">
      <div className='form-wrapper'>
        <h1 className="login-header">.then()</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <label className="userLabel">
            <p className="usernameLabel">Username or Email</p>
            <input
              type='text'
              placeholder='Username'
              id='username'
              className='userInput'
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
            />
          </label>
          <label className="passLabel">
            <p className='passwordLabel'>Password</p>
            <input
              type='password'
              placeholder='Password'
              className='passInput'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className='login-button' type='submit'>Login</button>
          <button className="demo-button" onClick={handleDemo}>Demo User</button>
        </form>
        <p>Not a .then member?</p><Link className='signup-direct' to='signup'>Sign Up!</Link>
        <Footer />
      </div>
    </div>
  )

}


export default LoginFormPage;
