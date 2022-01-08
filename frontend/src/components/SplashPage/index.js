import { useSelector } from "react-redux";
import SplashImage from '../SplashImage'
import Footer from '../Footer'
import { Redirect } from "react-router-dom";
import './SplashPage.css'
import LoginFormPage from "../LoginFormPage";

function SplashPage() {
  const sessionUser = useSelector(state => state.session.user)

  if (sessionUser) {
    return <Redirect to='/' />
  } else {
    return (
      <div className='splash-container'>
        <SplashImage />
        <LoginFormPage />
      </div>
    )
  }
}

export default SplashPage
