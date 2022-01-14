import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './Navigation.css'

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener('click', closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };

  return (
    <>
    <button className='profile-dropdown' onClick={openMenu}>
      {user.username}
    </button>
    {showMenu && (
      <ul className='profile-drop'>
        <li className='username-dropdown'>{user.username}</li>
        <li className='email-dropdown'>{user.email}</li>
        <li>
          <button className='logout-button' onClick={logout}>Log Out</button>
        </li>
      </ul>
    )}
    </>
  );
}

export default ProfileButton;
