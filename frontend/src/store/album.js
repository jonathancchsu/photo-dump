import { csrfFetch } from './csrf';

const FETCH_ALBUMS = 'albums/FETCH';
const MAKE_ALBUM = 'albums/MAKE';
const EDIT_ALBUM = 'albums/EDIT';
const DELETE_ALBUM = 'albums/DELETE';

export const fetchAlbums = albums => {
  return {
    type: FETCH_ALBUMS,
    albums
  }
};

export const makeAlbum = album => {
  return {
    type: MAKE_ALBUM,
    album
  }
};

export const editAlbum = editedAlbum => {
  return {
    type: EDIT_ALBUM,
    editedAlbum
  }
};

export const deleteAlbum = deletedAlbum => {
  return {
    type: DELETE_ALBUM,
    deletedAlbum
  }
};

export const getAllAlbums = (id) => async dispatch => {
  if (id) {
    const res = await csrfFetch(`/api/albums/users/${id}`, {
      method: 'GET'
    })

    if (res.ok) {
      const albums = await res.json();
      dispatch(fetchAlbums(albums));
    }
  }
};

export const uploadingAlbum = (payload) => async dispatch => {
  if(payload.userId) {
      const res = await csrfFetch(`/api/albums`, {
          method: 'POST',
          body: JSON.stringify(payload)
      })
      if (res.ok) {
          const newAlbum = await response.json();
          dispatch(makeAlbum(newAlbum));
          return newAlbum;
      }
  }
};

export const editingAlbum = album => dispatch => {
  const res = await csrfFetch(`/api/albums/${album.id}`, {
    method: 'PATCH',
    body: JSON.stringify(album)
  })

  if (res.ok) {
    const editedAlbum = await res.json();
    dispatch(editAlbum(editedAlbum));
    return editedAlbum;
  }
};

export const deletingAlbum = album => dispatch => {
  const res = await csrfFetch(`/api/albums/${album}`, {
    method: 'DELETE'
  })

  if (res.ok) {
    const deletedAlbum = await res.json();
    dispatch(deleteAlbum(deletedAlbum));
  }
};

const initialState = { entries: [] };

const albumReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case FETCH_ALBUMS:
      return {...state, entries: [...action.albums]}
    case MAKE_ALBUM:
      return {...state, entries: [...state.entries, action.payload]}
    case DELETE_ALBUM:
      newState = {...state }
      delete newState[action.deletedAlbum]
      return newState
    case EDIT_ALBUM:
      return {...state, [action.editedAlbum.id]: action.id }
    default:
      return state
  }
}

export default albumReducer;
