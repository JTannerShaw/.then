import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
// import ProfileButton from './ProfileButton'
import Navigation from "../Navigation";

function HomePage() {
  return (
    <div>
      {/* <Navigation /> */}
      <h1>You made it to the home page!</h1>
    </div>
  )
}

export default HomePage;
