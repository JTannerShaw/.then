import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";
import * as sessionActions from '../../store/session';
import Footer from "../Footer";
import SignUpForm from "../SignUpFormPage";
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

  return (
      <div className="form-container">
        <div className='form-wrapper' >
          <form className="login-form" onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <label className="userLabel">
            Username or Email:
            <input
              type='text'
              placeholder='Username'
              id='username'
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
            />
          </label>
          <label className="passLabel">
            Password:
            <input
              type='password'
              placeholder='Password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className='login-button' type='submit'>Log In</button>
          </form>
          <p>Not a .then member?</p><a href='signup'>Sign Up!</a>
        <Footer />
        </div>
      </div>
  )

}


export default LoginFormPage;
