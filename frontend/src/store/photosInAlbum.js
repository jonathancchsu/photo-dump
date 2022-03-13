import { csrfFetch } from "./csrf";

const CREATE_PHOTOSINALBUM = '/photosInAlbum/CREATE';

export const createPhotosInAlbum = photosInAlbum => {
  return {
    type: CREATE_PHOTOSINALBUM,
    photosInAlbum
  }
};

export const addPhotosInAlbum = (payload) => async dispatch => {
  if (payload.photo_id) {
    const res = await csrfFetch(`/api/photosInAlbum`, {
      method: 'POST',
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      const addedPhotosInAlbum = await res.json();
      dispatch(createPhotosInAlbum(addedPhotosInAlbum));
    }
  }
};

const initialState = { entries: [] };

const photosInAlbumReducer = ( state = initialState, action) => {
  let newState;
  switch (action.type) {
    case CREATE_PHOTOSINALBUM:
      return {...state, entries: [...state.entries, action.join]}
    default:
      return state;
  }
}

export default photosInAlbumReducer;
