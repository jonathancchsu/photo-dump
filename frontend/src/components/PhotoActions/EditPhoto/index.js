import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory, Link } from 'react-router-dom'
import { addPhotosInAlbum } from '../../../store/photosInAlbum'
import * as sessionActions from '../../../store/session'

import { getAllPhotos } from '../../../store/photos'
import { editingPhoto } from '../../../store/photos'

import './EditPhoto.css'

function EditPhoto({ albums }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const sessionUser = useSelector(state => state.session.user);
    const allPhotos = useSelector(state => state.photoState.entries);
    const editPhoto = allPhotos.find(one => one.id === +id);

    useEffect(() => {
        dispatch(getAllPhotos());
        dispatch(sessionActions.restoreUser());
    }, [dispatch])

    const [title, setTitle] = useState(editPhoto?.title);
    const [caption, setCaption] = useState(editPhoto?.caption);
    const [album_id, setAlbum_id] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
      let errors = [];
      if (!title) {
        errors.push('You need a title for your photo.');
      }
      if (!caption) {
        errors.push('You need a caption for your photo.');
      }

      setErrors(errors);
    }, [title, caption])

    useEffect(() => {
        if(!title) {
          setTitle(editPhoto?.title)
        }
        if(!caption) {
          setCaption(editPhoto?.caption)
        }
    }, [editPhoto])

    const handleEdits = async (e) => {
      e.preventDefault();

      const payload = {
        id: editPhoto.id,
        title,
        caption
      }

      const photosInAlbumPayload = {
        photo_id: editPhoto.id,
        album_id
      }

      const updateThisPhoto = await dispatch(editingPhoto(payload));

      if (album_id) {
        const addToAlbum = await dispatch(addPhotosInAlbum(photosInAlbumPayload));
      }

      history.push(`/photos/${id}`);
    }

    if (!editPhoto) {
        return (
            <p className='does-not-exist'>This photo does not exist.</p>
        )
    }

    if (editPhoto.user_id !== sessionUser.id) {
        return (
            <p className='does-not-exist'>This is not your photo.</p>
        )
    }


    return (
      <div className='edit-form-main'>
        <ul>
          {errors.map((error, i) => <li key={i}>{error}</li>)}
        </ul>
        <form className='edit-form' onSubmit={handleEdits}>
          <p className='edit-title'>Edit Your Photo</p>
          <div className='label-container'>
            <label>
              <input
                className='edit-label'
                type='text'
                value={title}
                onChange={ e => setTitle(e.target.value)}
              />
            </label>
            </div>
            <div className='label-container'>
              <label>
                <textarea
                  className='edit-label'
                  type='text'
                  rows='5'
                  value={caption}
                  onChange={ e => setCaption(e.target.value)}
                />
            </label>
            </div>
            {albums.length ?
              <div className='label-container'>
                <select className='album-select' value={album_id} onChange={ e => setAlbum_id(e.target.value)}>
                  <option className='upload-label-area album-option' value=''>Choose an album</option>
                  {albums?.map(album => <option className='upload-label-area album-option' key={album.id} value={album.id}>{album.name}</option>)}
                </select>
              </div>
              :
              <></>}
            <div className='edit-photo'>
              <button type='submit'>Update</button>
            </div>
            <div className='edit-photo'>
              <Link className='edit-cancel' to={`/photos/${editPhoto.id}`}>Cancel</Link>
            </div>
        </form>
      </div>
    )
}

export default EditPhoto;
