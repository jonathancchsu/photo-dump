import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import AddAlbum from "./components/AlbumActions/AddAlbum";
import AllAlbums from "./components/AlbumActions/AllAlbums";
import EditAlbum from "./components/AlbumActions/EditAlbum";
import ViewAlbum from "./components/AlbumActions/ViewAlbum";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AddPhoto from "./components/PhotoActions/AddPhoto";
import AllPhotos from "./components/PhotoActions/AllPhotos";
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
      </Switch>
    )
  }
  
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
