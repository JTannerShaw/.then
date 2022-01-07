import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton'
import './Navigation.css'


function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ul>
        <NavLink to='/' className='home-button'>Home</NavLink>
        <ProfileButton className='profile-dropdown' user={sessionUser} />
      </ul>
    );

  }
  return (
    <ul>
      {isLoaded && sessionLinks}
    </ul>
  )
}

export default Navigation;
