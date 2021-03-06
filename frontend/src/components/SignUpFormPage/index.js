import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import * as sessionActions from '../../store/session';
import Footer from "../Footer";
import './SignUpForm.css'


const SignUpForm = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(sessionActions.getAllUsers());
  }, [dispatch])


  useEffect(() => {
    const errors = [];
    if (username.length === 0) {
      errors.push('Username field is required');
    }
    if (username.length > 50) {
      errors.push('Username must be 30 characters or less');
    }
    if (email.length === 0) {
      errors.push('Email field is required');
    }
    if (password.length === 0 || confirmPassword.length === 0) {
      errors.push('Must provide a password')
    }
    setErrors(errors);
  }, [username, email, password, confirmPassword])

  if (sessionUser) return <Redirect to='/' />;


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      console.log(setErrors);
      const newUser = {
        username,
        email,
        password
      }
      return dispatch(sessionActions.signup(newUser))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        })
    }
    return setErrors(['Confirm Password field must be the same as the Password field'])
  }

  return (
    <div className='signupform-container'>
      <div className='signupform-wrapper'>
        <h1 className="login-header">.then()</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <label className='emailLabel'>
            <p className="emailLabel">Email</p>
            <input
              type='text'
              className='emailInput'
              value={email}
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className='userLabel'>
            <p className='userLabel'>Username</p>
            <input
              type='text'
              value={username}
              className="userInput"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label className="passLabel">
            <p className='passLabel'>Password</p>
            <input
              type='password'
              value={password}
              className="passInput"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <label className="confirmPassLabel">
            <p className='confirmPassLabel'>Confirm Password</p>
            <input
              type='password'
              className="passInput"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
          <button className='signup-button' type='submit' disabled={errors.length === 0 ? false : true}>Sign Up</button>
        </form>
        <p>Already a .then() member?</p><Link to='/' className='login-direct'>Login!</Link>
        <Footer />
      </div>
    </div>
  )
}

export default SignUpForm;
