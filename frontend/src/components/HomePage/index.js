import React, { useEffect } from "react";
import { NavLink, Redirect, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
// import ProfileButton from './ProfileButton'
import { getAllQuestions } from "../../store/question";
import Navigation from "../Navigation";

const HomePage = () => {
  const dispatch = useDispatch();
  const { questionId } = useParams();
  const question = useSelector(state => state.question.list)

  useEffect(() => {
    dispatch(getAllQuestions());
  }, [dispatch])

  return (
    <div className="question-wrapper">
      <h1>You made it to the home page!</h1>
      {question && question.map((question) => {
        return (
          <div className="question-container">
          <NavLink key={question.id} to={`/questions/${question.id}`}>{question.title}</NavLink>
          <p>{question.description}</p>
          </div>
        )
     })}
    </div>
  )
}

export default HomePage;
