import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
// import ProfileButton from './ProfileButton'
import { getAllQuestions } from "../../store/question";
import * as sessionActions from '../../store/session';
import './HomePage.css'
import HomePageModal from "../HomepageModal";

const HomePage = () => {
  const dispatch = useDispatch();
  const question = useSelector(state => state.question.entries)
  const sessionUser = useSelector(state => state.session.user);
  // console.log('!!!!!!!!!!!!!!!', question)
  useEffect(() => {
    dispatch(getAllQuestions());
    dispatch(sessionActions.restore());
  }, [dispatch])


  return (
    <div className="question-wrapper">
      <h1 className="title">.then()</h1>
      <div className="language-container">
      <ul className="leftbar-languages">
        <h3>Languages Used</h3>
        <li>React</li>
        <li>Redux</li>
        <li>JavaScript</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>HTML5</li>
        <li>CSS</li>
        <li>Git</li>
      </ul>
      </div>
      <div className='article-container'>
      <HomePageModal />
      {question && question.map((question) => {
        return (
          <div className="question-container">
          <NavLink className='question-title' key={question.id} to={`/questions/${question.id}`}>{question.title}</NavLink>
          <p className="the-usersname">Asked by {sessionUser?.username}</p>
          <p className='question-description'>{question.description}</p>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default HomePage;
