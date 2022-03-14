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
            <Link className='nav-link' to='/'>Home</Link>
            <Link className='nav-link' to='/login'>Log In</Link>
            <Link className='nav-link' to='/signup'>Sign Up</Link>
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
          <Link className='nav-link' to='/photos/new'>Upload</Link>
        </div>
        <div className='user-navbar-div'>
          <form className='logout' onSubmit={logout}>
            <button className='logout-btn' type='submit'>logout</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Header;
