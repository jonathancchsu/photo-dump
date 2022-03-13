import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import * as sessionActions from '../../../store/session';
import { getAllPhotos } from '../../../store/photos';

import './MyPhotos.css';

function MyPhotos () {
  const sessionUser = useSelector
  const dispatch = useDispatch();
  const photos = useSelector(state => state.photoState.entries);
  const myPhotos = photos?.filter(photo => photo.userId === sessionUser.id);

  useEffect(() => {
    dispatch(getAllPhotos());
    dispatch(sessionActions.restoreUser());
  }, []);

  return (
    <>
    <div className='title-div'>
      <h1 className='title'>My Photos</h1>
    </div>
      <div className='all-photos-div'>
        {myPhotos?.map(photo => (
          <div className='photo-div' key={photo.id}>
            <Link to={`/photos/${photo.id}`}>
              <img className='photos' scr={photo.photo_url} />
            </Link>
            <Link className='photo-user' to={`/photos/${photo.id}`}>
              <p>{photo?.title}</p>
              <p>by {photo?.User?.username}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default MyPhotos;
