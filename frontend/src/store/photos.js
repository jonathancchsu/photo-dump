import { csrfFetch } from './csrf';

const FETCH_PHOTOS = 'photos/FETCH';
const UPLOAD_PHOTO = 'photos/UPLOAD';
const EDIT_PHOTO = 'photos/EDIT';
const DELETE_PHOTO = 'photos/DELETE';

export const fetchPhotos = photos => {
  return {
    type: FETCH_PHOTOS,
    photos
  }
};

export const uploadPhoto = payload => {
  return {
    type: UPLOAD_PHOTO,
    payload
  }
};

export const editPhoto = editedPhoto => {
  return {
    type: EDIT_PHOTO,
    editedPhoto
  }
};

export const deletePhoto = deletedPhoto => {
  return {
    type: DELETE_PHOTO,
    deletedPhoto
  }
};

export const getAllPhotos = () => async dispatch => {
  const res = await csrfFetch('/api/photos', {
    method: 'GET'
  })

  if (res.ok) {
    const photos = await res.json();
    dispatch(fetchPhotos(photos));
  }
};

export const uploadingPhoto = uplaodPhoto => async dispatch => {
  const res = await csrfFetch('/api/photos', {
    method: 'POST',
    body: JSON.stringify(uploadPhoto)
  })

  if (res.ok) {
    const newPhoto = await res.json();
    dispatch(uploadPhoto(uplaodPhoto));
    return newPhoto;
  }
};

export const editingPhoto = photo => dispatch => {
  const res = await csrfFetch(`/api/photos/${photo.id}`, {
    method: 'PATCH',
    body: JSON.stringify(photo)
  })

  if (res.ok) {
    const editedPhoto = await res.json();
    dispatch(editPhoto(editedPhoto));
    return editedPhoto;
  }
};

export const deletingPhoto = photo => dispatch => {
  const res = await csrfFetch(`/api/photos/${photo}`, {
    method: 'DELETE'
  })

  if (res.ok) {
    const deletedPhoto = await res.json();
    dispatch(deletePhoto(deletedPhoto));
  }
};

const initialState = { entries: [] };

const photoReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case FETCH_PHOTOS:
      return {...state, entries: [...action.photos]}
    case UPLOAD_PHOTO:
      return {...state, entries: [...state.entries, action.payload]}
    case DELETE_PHOTO:
      newState = {...state }
      delete newState[action.deletedPhoto]
      return newState
    case EDIT_PHOTO:
      return {...state, [action.editedPhoto.id]: action.id }
    default:
      return state;
  }
}

export default photoReducer;
