import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import * as sessionActions from "./store/session";

import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AddPhoto from "./components/PhotoActions/AddPhoto";
import Explore from "./components/PhotoActions/Explore";
import EditPhoto from "./components/PhotoActions/EditPhoto";
import ViewPhoto from "./components/PhotoActions/ViewPhoto";
import SplashPage from "./components/SplashPage";
import EditComment from "./components/CommentActions/EditComment";

function App() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  let id;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  if (sessionUser) {
    id = sessionUser.id;
  }

  return (
    <>
    {isLoaded && (
      <>
        <Header />
          <Switch>
            <Route exact path='/'>
              {sessionUser ?
                <Explore /> :
                <SplashPage />
              }
            </Route>
            <Route path='/login'>
              <LoginFormPage />
            </Route>
            <Route path='/signup'>
              <SignupFormPage />
            </Route>
            <Route exact path='/photos/new'>
              <AddPhoto />
            </Route>
            <Route exact path='/photos/:id'>
              <ViewPhoto />
            </Route>
            <Route exact path='/photos/:id/edit'>
              <EditPhoto />
            </Route>
            <Route exact path='/photos/:photo_id/:comment_id/edit'>
            <EditComment />
          </Route>
            <Route>
              <p className="page-does-not-exist">Sorry, this page does not exist.</p>
            </Route>
          </Switch>
        <Footer />
      </>
      )}
    </>
  )
}

export default App;
