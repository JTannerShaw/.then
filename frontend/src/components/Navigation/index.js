import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton'
import QuestionModal from "../QuestionModal";
import './Navigation.css'


function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {

    sessionLinks = (
      <ul className='header'>
        <NavLink to='/' className='home-button'>Home</NavLink>
        <QuestionModal />
        <ProfileButton user={sessionUser} />
      </ul>
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
