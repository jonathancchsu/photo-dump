import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-dom';
import { useHistory, Link } from 'react-router-dom';
import { uploadingAlbum } from '../../../store/album';
import * as sessionActions from '../../../store/session';

import './AddAlbum.css';

function AddAlbum () {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const [name, setName] = useState([]);

  useEffect(() => {
    dispatch(sessionActions.restore());
  }, []);

  useEffect(() => {
    let errors = [];

    if (!name) errors.push("Please provide a name for your new album.");
    setErrors(errors);
  }, [name]);

  const makingNewAlbum = async (e) => {
    e.preventDefault();

    let payload = {
      name,
      userId: sessionUser.id
    };

    const album = await dispatch(uploadingAlbum(payload));
    if (album) history.push('/albums');
  }

  return (
    <div className='album-form-div'>
      <div className='errors-div'>
        <ul className='error-list'>
          {errors.map((error) =>
            <li key={error}>{error}</li>
          )}
        </ul>
      </div>
      <form className='album-form-form' onSubmit={makingNewAlbum}>
        <p className='album-create-title'>Make a New Album!</p>
          <div className='album-form-label-div'>
            <label>
              <input
                className='album-label'
                type='text'
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder='Album Name'
                required
              />
            </label>
          </div>
          <div className='album-create-button'>
            <button type='submit'>Create Album</button>
          </div>
          <div className='album-cancel-create-button'>
            <Link className='cancel-album-creation' to='/albums'>Cancel</Link>
          </div>
      </form>
    </div>
  )
}

export default AddAlbum;
