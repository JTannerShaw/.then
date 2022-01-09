import React, { useEffect } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
// import ProfileButton from './ProfileButton'
import { getQuestion } from "../../store/question";
import Navigation from "../Navigation";

const HomePage = () => {
  const dispatch = useDispatch();

  const question = useSelector(state => {
    return state.question.list
  })

  useEffect(() => {
    dispatch(getQuestion());
  },[dispatch])
  console.log('This is the question', question);
  return (
    <div>
      {/* <Navigation /> */}
      <h1>You made it to the home page!</h1>
    </div>
  )
}

export default HomePage;
