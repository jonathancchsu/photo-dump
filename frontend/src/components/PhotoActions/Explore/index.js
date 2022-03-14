import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import * as sessionActions from '../../../store/session';
import { getAllPhotos } from '../../../store/photos';

import './Explore.css';

function Explore () {
  const dispatch = useDispatch();
  const photos = useSelector(state => state.photoState.entries);

  useEffect(() => {
    dispatch(getAllPhotos());
    dispatch(sessionActions.restoreUser());
  }, []);

  return (
    <>
    <div className='title-div'>
      <h1 className='title'>Explore</h1>
    </div>
      <div className='all-photos-div'>
        {photos?.map(photo => (
          <div className='photos-div' key={photo.id}>
            <Link to={`/photos/${photo.id}`}>
              <img className='photos' alt='' src={photo.photo_url} />
            </Link>
            <Link className='photo-user' to={`/photos/${photo.id}`}>
              <b className='title'>{photo?.title}</b>
              <b className='title'>by {photo?.User?.username}</b>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default Explore;
