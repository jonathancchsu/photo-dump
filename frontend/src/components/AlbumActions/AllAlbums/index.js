import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllAlbums } from '../../../store/album';
import { useEffect } from 'react';

import * as sessionActions from '../../../store/session';

import './AllAlbums.css';

function AllAlbums () {
  const dispatch = useDispatch();
  const albums = useSelector(state => state.albumState.entries);
  
  useEffect(() => {
    dispatch(getAllAlbums());
    dispatch(sessionActions.restoreUser());
  }, []);

  return (
    <div className='all-albums-div'>
      <title className='album-title'>Albums</title>
      {albums?.map((album) => {
        return (
          <div key={album.id}>
            {
              album?.PhotosInAlbum?.length ?
              <Link className='album' to={`/albums/${album.id}`}>
                <img className='album-cover' alt='album-cover' src={album.PhotosInAlbum[0].Photo.photo_url} />
              </Link>
              :
              <Link className='album-cover' to={`/albums/${album.id}`}>
                <div className='photo'>No photos in this album.</div>
              </Link>}
              <Link className='album-name' to={`/albums/${album.id}`}>{album.name}</Link>
          </div>
        )
      })}
    </div>
  )
}

export default AllAlbums;
