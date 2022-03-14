import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import { uploadingPhoto } from '../../../store/photos';

import * as sessionActions from '../../../store/session';

import './AddPhoto.css';

function AddPhoto () {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const [user_id, setUser_id] = useState();
  const [title, setTitle] = useState('');
  const [photo_url, setPhoto_url] = useState('');
  const [caption, setCaption] = useState('');
  const [errors, setErrors] = useState([]);

  useEffect (() => {
    if (sessionUser.id) {
      setUser_id(sessionUser.id);
    }
    if (sessionUser.user) {
      setUser_id(sessionUser.user.id);
    }
  }, [sessionUser.id, sessionUser.user]);

  // useEffect(() => {
  //   dispatch(getAllAlbums());
  //   dispatch(sessionActions.restoreUser());
  // }, []);

  const uploading = async (e) => {
    e.preventDefault();

    let payload = {
      user_id,
      title,
      photo_url,
      caption
    };

    let errs = [];

    const image = await dispatch(uploadingPhoto(payload));
    // console.log('image', image)
    // if (image && album_id) {
    //   let photosInAlbumPayload = {
    //     album_id: +album_id,
    //     photo_id: image.id
    //   }

      // const addingPhotosInAlbum = await dispatch(addPhotosInAlbum(photosInAlbumPayload));
    // }

    if (image.errors) {
      const errorList = Object.values(image.errors);
      const errorArr = [...errorList];
      errorArr.map(error => errs.push(error.msg));
      setErrors(errs);
    } else {
      history.push(`/`);
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
              value={title}
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
              value={photo_url}
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
              value={caption}
              onChange={e => setCaption(e.target.value)}
              placeholder='Caption'
              required
            />
          </label>
        </div>
        <div className='btn-container'>
          <button className='upload-photo-btn' type='submit'>Upload</button>
        </div>
        <div className='uplaod-photo-btn'>
          <Link className='upload-photo-btn' to='/'>Cancel</Link>
        </div>
      </form>
    </div>
  )
}

export default AddPhoto;
