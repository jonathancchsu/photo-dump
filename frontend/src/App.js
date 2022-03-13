import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import * as sessionActions from "./store/session";

import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import AddAlbum from "./components/AlbumActions/AddAlbum";
import AllAlbums from "./components/AlbumActions/AllAlbums";
import EditAlbum from "./components/AlbumActions/EditAlbum";
import ViewAlbum from "./components/AlbumActions/ViewAlbum";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AddPhoto from "./components/PhotoActions/AddPhoto";
import AllPhotos from "./components/PhotoActions/Explore";
import EditPhoto from "./components/PhotoActions/EditPhoto";
import MyPhotos from "./components/PhotoActions/MyPhotos";
import ViewPhoto from "./components/PhotoActions/ViewPhoto";
import SplashPage from "./components/SplashPage";
import { getAllAlbums } from "./store/album";

function App() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const albums = useSelector(state => state.albumState.entries);
  let id;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  if (sessionUser) id = sessionUser.id;

  useEffect(() => {
    dispatch(getAllAlbums(id))
  }, [sessionUser]);

  if (!sessionUser) {
    return (
      <Switch>
        <Route exact path = '/'>
          <SplashPage />
        </Route>
        <Route path='/login'>
          <LoginFormPage />
        </Route>
        <Route path='/signup'>
          <SignupFormPage />
        </Route>
        <Route>
          <p className="does-not-exist">Sorry. This page does not exist.</p>
        </Route>
      </Switch>
    )
  }

  return isLoaded && (
    <>
      <Header />
      <Switch>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        <Route path='/'>
          <AllPhotos />
        </Route>
        <Route to='/profile'>
          <MyPhotos />
        </Route>
        <Route to='albums'>
          <AllAlbums />
        </Route>
        <Route to='albums/new'>
          <AddAlbum />
        </Route>
        <Route to='albums/:id'>
          <ViewAlbum />
        </Route>
        <Route to='albums/:id/edit'>
          <EditAlbum albums={albums}/>
        </Route>
        <Route to='/photos/new'>
          <AddPhoto albums={albums}/>
        </Route>
        <Route to='/photos/:id'>
          <ViewPhoto />
        </Route>
        <Route to='/photos/:id/edit'>
          <EditPhoto albums={albums}/>
        </Route>
        <Route path='/login'>
          <Redirect to='/' />
        </Route>
        <Route path='/signup'>
          <Redirect to='/' />
        </Route>
        <Route>
          <p className="page-does-not-exist">Sorry, this page does not exist.</p>
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
