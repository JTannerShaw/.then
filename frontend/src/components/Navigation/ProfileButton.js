import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import * as sessionActions from '../../store/session';


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
    <button onClick={openMenu}>
      {/* <i className='drop-down' /> */}
      {user.username}
    </button>
    {showMenu && (
      <ul className='profile-dropdown'>
        <li>{user.username}</li>
        <li>{user.email}</li>
        <NavLink to={`/user`}>Profile</NavLink>
        <li>
          <button onClick={logout}>Log Out</button>
        </li>
      </ul>
    )}
    </>
  );
}

export default ProfileButton;
