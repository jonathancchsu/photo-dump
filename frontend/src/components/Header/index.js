import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Link, useHistory } from 'react-router-dom';

import * as sessionActions from '../../store/session';

import './Header.css';

function Header () {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);

  const logout = (e) => {
    e.preventDefault();
    history.push('/');
    return dispatch(sessionActions.logout());
  }

  if (!sessionUser) {
    return (
      <>
        <div className='header-div'>
          <div className='user-navbar-div'>
            <Link className='login' to='/login'>Log In</Link>
            <Link className='signup' to='/signup'>Sign Up</Link>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className='header-div'>
        <div className='navbar-div'>
          <NavLink className='nav-link' to='/'>Explore</NavLink>
          <NavLink className='nav-link' to='/albums'>Albums</NavLink>
        </div>
        <div className='user-navbar-div'>
          <Link className='upload-btn' to='/photos/new'>Upload</Link>
          <form className='logout' onSubmit={logout}>
            <button className='logout-btn' type='submit'>logout</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Header;
