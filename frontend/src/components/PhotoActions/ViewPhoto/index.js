import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';
import * as sessionActions from '../../../store/session';

import { getAllPhotos, deletePhoto } from '../../../store/photos';

import './ViewPhoto.css';


function ViewPhoto () {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const allPhotos = useSelector(state => state.photoState.entries);
  const selectedPhoto = allPhotos.find(photo => photo.id === +id);

  useEffect(() => {
    dispatch(getAllPhotos());
    dispatch(sessionActions.restoreUser());
  }, [dispatch]);

  const deleting = async (e) => {
    e.preventDefault();

    const deleted = await dispatch(deletePhoto(selectedPhoto.id));
    history.push('/');
  }

  if (!single) {
    return (
      <p className='does-not-exist'>This photo does not exist.</p>
    )
  }

  return (
    <>
      <div className='photo-div'>
        <img className='photo' src={selectedPhoto?.photo_url} />
      </div>
      <div className='photo-data'>
        <h1 className='photo-title'>{selectedPhoto.title}</h1>
        <p className='description'>Caption: {selectedPhoto.caption}</p>
        <p className='taken-by'>Taken By: {selectedPhoto?.User?.usrename}</p>
        {selectedPhoto?.user_id === sessionUser.id ?
          <button className='delete-btn' onClick={deleting} type='submit'>
            Delete
          </button>
          :
          <></>
        }
        {selectedPhoto?.user_id === sessionUser.id ?
          <Link to={`/photos/${selectedPhoto.id}/edit`}>
            <button className='edit-btn' type='submit'>
              Edit
            </button>
          </Link>
          :
          <></>
        }
      </div>
    </>
  )
}

export default ViewPhoto;
