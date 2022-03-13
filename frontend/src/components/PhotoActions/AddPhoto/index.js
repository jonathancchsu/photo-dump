import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import { uploadPhoto } from '../../../store/photos';
import { addPhotosInAlbum } from '../../../store/photosInAlbum';

import './AddPhoto.css';

function AddPhoto ({ albums }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const [user_id, setUser_id] = useState();
  const [title, setTitle] = useState('');
  const [photo_url, setPhoto_url] = useState('');
  const [caption, setCaption] = useState('');
  const [album_id, setAlbum_id] = useState('');
  const [errors, setErrors] = useState([]);

  useEffect (() => {
    if (sessionUser.id) {
      setUser_id(sessionUser.id);
    }
    if (sessionUser.user) {
      setUser_id(sessionUser.user.id);
    }
  }, []);

  const uploading = async (e) => {
    e.preventDefault();

    let payload = {
      user_id,
      title,
      photo_url,
      caption
    };

    let errors = [];

    const image = await dispatch(uploadPhoto(payload));
    if (image && album_id) {
      let photosInAlbumPayload = {
        album_id: +album_id,
        photo_id: image.id
      }

      const addingPhotosInAlbum = await dispatch(addPhotosInAlbum(photosInAlbumPayload));
    }

    if (image.errors) {
      const errorList = Object.values(image.errors);
      const errorArr = [...errorList];
      errorArr.map(error => errors.push(error.msg));
      setErrors(errors);
    } else {
      history.push(`/photos/${image.id}`);
    }
  }

  return (
    <div className='upload-form-main'>
      <ul>
        {errors.map(error =>
          <li key={error}>{error}</li>
        )}
      </ul>
      <form className='upload-form' onSubmit={uploading}>
        <p className='upload-title'>Upload Your Photos!</p>
        <div className='upload-form-labels'>
          <label>
            <input
              className='upload-label'
              type='text'
              value='title'
              onChange = {e => setTitle(e.target.value)}
              placeholder='Title'
              required
            />
          </label>
        </div>
        <div className='upload-form-labels'>
          <label>
            <input
              className='upload-label'
              type='text'
              value='photo_url'
              onChange={e => setPhoto_url(e.target.value)}
              placeholder='Photo URL'
              required
            />
          </label>
        </div>
        <div className='upload-form-labels'>
          <label>
            <input
              className='upload-label'
              type='text'
              value='caption'
              onChange={e => setCaption(e.target.value)}
              placeholder='Caption'
              required
            />
          </label>
        </div>
        {albums.length ?
          <div className='upload-form-labels'>
            <select className='select-album' value={album_id} onChange={e => setAlbum_id(e.target.value)}>
              <option className='upload-label album-option' value=''>Choose an album</option>
              {albums?.map(album =>
                <option className='upload-form-labels album-options' key={album.id} value={album.id}>
                  {album.name}
                </option>
              )}
            </select>
          </div>
          :
          <></>
        }
        <div className='upload-photo-btn'>
          <button type='submit'>Upload</button>
        </div>
        <div className='uplaod-photo-btn'>
          <Link className='cancel-upload' to='/'>Cancel</Link>
        </div>
      </form>
    </div>
  )
}

export default AddPhoto;
