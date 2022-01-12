import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton'
import QuestionModal from "../QuestionModal";
import './Navigation.css'


function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const [ setShowModal ] = useState(false);

  const closeModal = () => setShowModal(false)

  let sessionLinks;
  if (sessionUser) {

    sessionLinks = (
      <div className='header-container'>
      <ul className='header'>
        <NavLink to='/' className='home-button'>Home</NavLink>
        <QuestionModal closeModal={closeModal} />
        <ProfileButton user={sessionUser} />
      </ul>
      </div>
    );
    return (
      <ul>
        {sessionLinks}
      </ul>
    )
  } else {
    return <div style={{ display: 'none' }}>
    </div>
  }
}

export default Navigation;
