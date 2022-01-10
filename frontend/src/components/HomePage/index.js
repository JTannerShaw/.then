import React, { useEffect } from "react";
import { NavLink, Redirect, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
// import ProfileButton from './ProfileButton'
import { getAllQuestions } from "../../store/question";
import Navigation from "../Navigation";

const HomePage = () => {
  const dispatch = useDispatch();
  const { questionId } = useParams();
  const question = useSelector(state => {
    return state.question.list
  })
  // console.log(question);
  useEffect(() => {
    dispatch(getAllQuestions());
  },[dispatch])
  console.log('This is the question', question);
  return (
    <div>
      <h1>You made it to the home page!</h1>
      {question.map((question) => {
        return (
          <div>
          <NavLink key={question.title} to={`${question.id}`}>{question.title}</NavLink>
          <p>{question.description}</p>
          </div>
        )
     })}
    </div>
  )
}

export default HomePage;
