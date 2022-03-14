import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link, useHistory } from 'react-router-dom';
import * as sessionActions from '../../../store/session';

import { getAllAlbums, deletingAlbum } from '../../../store/album';

import './ViewAlbum.css';

function ViewAlbum() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const albums = useSelector(state => state.albumState.entries);
  const selectedAlbum = albums.find(album => album.id === +id);

  useEffect(() => {
    dispatch(sessionActions.restoreUser());
    dispatch(getAllAlbums());
  }, []);

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deletingAlbum(id));
    history.push('/albums');
  }

  if (!selectedAlbum) {
    return (
      <>
        <div className='album-name-div'>
          <p>This album does not exist.</p>
        </div>
        <div className='album-div'>
          <p className='no-photo-in-album'>You haven't added any photos in this album.</p>
        </div>
      </>
    )
  }

  if (selectedAlbum && !selectedAlbum.PhotosInAlbum.length) {
    return (
      <>
      <div className='album-name-div'>
        <h1 className='album-name'>{selectedAlbum.name}</h1>
        <div className='album-delete-btn' onClick={handleDelete}>Delete</div>
        <Link className='album-edit-btn' to={`/albums/${id}/edit`}>Edit</Link>
      </div>
      <div className='album-div'>
        <p className='no-photo-in-album'>You haven't added any photos in this album.</p>
      </div>
      </>
    )
  }

  return (
    <>
      <div className='album-name-div'>
        <h1 className='album-name'>{selectedAlbum.name}</h1>
        <div className='album-delete-btn' onClick={handleDelete}>Delete</div>
        <Link className='album-edit-btn' to={`/albums/${id}/edit`}>Edit</Link>
      </div>
      <div className='album-div'>
        {selectedAlbum.PhotosInAlbum.map((el) => {
          return (
            <div key={el.Photo.id}>
              <Link to={`/photos/${el.Photo.id}`}>
                <img className='photo-in-album' src={el.Photo.photo_url} />
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ViewAlbum;
