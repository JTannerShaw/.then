import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";
import * as sessionActions from '../../store/session';
import Footer from "../Footer";
import SplashImage from "../SplashImage";
import './SignUpForm.css'


const SignUpForm = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to='/' />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
    setErrors([]);

    const newUser = {
      username,
      email,
      password
    }
    const user = await dispatch(sessionActions.signup(newUser))
    .catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    })
  }
  return setErrors(['Confirm Password field must be the same as the Password field'])
  }

  return (
    <div className='form-container'>
      <SplashImage />
      <div className='form-wrapper'>
        <form className="signup-form" onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <label className='emailLabel'>
            Email
            <input
              type='text'
              value={email}
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className='userLabel'>
            Username
            <input
              type='text'
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label className="passLabel">
            Password
            <input
              type='password'
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <label className="confirmPassLabel">
            Confirm Password
            <input
              type='password'
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
          <button type='submit'>Sign Up</button>
        </form>
        <Footer />
      </div>
    </div>
  )
}

export default SignUpForm;
