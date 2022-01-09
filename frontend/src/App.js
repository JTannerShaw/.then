import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignUpForm from "./components/SignUpFormPage";
import * as sessionActions from "./store/session";
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import SplashPage from './components/SplashPage';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.getUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <SplashPage />
            <HomePage />
          </Route>
          <Route path='/home'>
            <HomePage />
          </Route>
          <Route path='/signup'>
            <SignUpForm />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
