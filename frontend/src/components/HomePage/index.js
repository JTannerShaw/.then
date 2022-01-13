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
  const users = useSelector(state => state.session.entries);

  useEffect(() => {
    dispatch(getAllQuestions());
    dispatch(sessionActions.getAllUsers())
    dispatch(sessionActions.restore());
  }, [dispatch])

  // const questionUser = users.find(question => question.ownerId === users.id)
  // console.log('this user', questionUser);
  console.log('this is the question object', question);

  if (sessionUser) {

    return (
      <div className="question-wrapper">
        <h1 className="title">.then()</h1>
        <div className="language-container">
          <ul className="leftbar-languages">
            <h3>Technologies Used</h3>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" height='30' />
              React</li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height='30' />
              Redux</li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height='30' />
              JavaScript</li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height='30' />
              Express</li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" height='30' />
              PostgreSQL</li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" height='30' />
              HTML5</li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" height='30' />
              CSS</li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height='30' />
              Git</li>
          </ul>
        </div>
        <div className='article-container'>
          <HomePageModal />
          {question && question.map((question) => {
            return (
              <div className="question-container">
                <NavLink className='question-title' key={question.id} to={`/questions/${question.id}`}>{question.title}</NavLink>
                <p className="the-usersname">Asked by {question?.User?.username}</p>
                <p className='question-description'>{question?.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  } else {
    return <div><></></div>
  }
}

export default HomePage;
