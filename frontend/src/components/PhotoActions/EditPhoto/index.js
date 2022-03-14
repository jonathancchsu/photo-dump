import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory, Link } from 'react-router-dom'
import * as sessionActions from '../../../store/session'

import { getAllPhotos } from '../../../store/photos'
import { editingPhoto } from '../../../store/photos'

import './EditPhoto.css'

function EditPhoto() {
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
    const [errors, setErrors] = useState([]);
    // console.log('=================', editPhoto?.title)
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
      // console.log("this is payload--------------",payload);
      const edit = await dispatch(editingPhoto(payload));

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
        <div className='errors'>
          <ul>
            {errors.map((error, i) => <li key={i}>{error}</li>)}
          </ul>
        </div>
        <form className='edit-form' onSubmit={handleEdits}>
          <p className='title'>Edit Your Photo</p>
          <div className='label-container'>
            <label>
              <input
                className='form-label'
                type='text'
                value={title}
                onChange={ e => setTitle(e.target.value)}
              />
            </label>
            </div>
            <div className='label-container'>
              <label>
                <textarea
                  className='form-label'
                  type='text'
                  rows='5'
                  value={caption}
                  onChange={ e => setCaption(e.target.value)}
                />
            </label>
            </div>
            <div className='edit-photo'>
              <button className='btn' type='submit'>Update</button>
            </div>
            <div className='edit-photo'>
              <Link className='btn' to={`/photos/${editPhoto.id}`}>Cancel</Link>
            </div>
        </form>
      </div>
    )
}

export default EditPhoto;
