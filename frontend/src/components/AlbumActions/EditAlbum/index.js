import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';
import * as sessionActions from '../../../store/session';

import { editingAlbum, getAllAlbums } from '../../../store/album';

import './EditAlbum.css';

function EditAlbum() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const sessionUser = useSelector(state => state.session.user);
  const allAlbums = useSelector(state => state.albumState.entries);
  const user_id = sessionUser.id;
  const selectedAlbum = allAlbums.find(album => album.id === + id);

  const [name, setName] = useState(selectedAlbum?.name);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(getAllAlbums());
    dispatch(sessionActions.restoreUser());
  }, [dispatch]);

  useEffect(() => {
    let errors = [];
    if (!name) errors.push('Please provide a name for your album.');
    setErrors(errors);
  }, [name]);

  const editingSelectedAlbum = async (e) => {
    e.preventDefault();

    const payload = {
      id,
      name
    };

    const editThisAlbum = await dispatch(editingAlbum(payload));
    if (editThisAlbum) history.push(`/albums/${id}`);
  }

  if (!selectedAlbum) {
    return (
      <p className='album-not-exist'>This album does not exist.</p>
    )
  }

  if (user_id !== selectedAlbum?.user_id) {
    return (
      <p className='album-wrong-owner'>This is not your album.</p>
    )
  }

  return (
    <div className='album-edit-form-div'>
      <div className='errors-div'>
        <ul className='error-list'>
          {errors.map((error) =>
            <li key={error}>{error}</li>
          )}
        </ul>
      </div>
      <form className='album-edit-form' onSubmit={editingSelectedAlbum}>
        <p className='album-edit-form-title'>Edit Album</p>
        <div className='album-edit-label'>
          <label>
            <input
              className='album-edit-label'
              type='text'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
        </div>
        <div className='album-edit'>
          <button type='submit'>Update</button>
        </div>
        <div className='album-edit'>
          <Link className='album-edit-cancel' to ={`/albums/${selectedAlbum.id}`}>Cancel</Link>
        </div>
      </form>
    </div>
  )
}

export default EditAlbum;
