import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory, Link, NavLink } from 'react-router-dom';

import { deleteComment, getAllTheComments } from '../../../store/comments';
import { getAllPhotos, deletingPhoto } from '../../../store/photos';
import { getUsers } from '../../../store/users';
import * as sessionActions from '../../../store/session';
import PostComment from '../../CommentActions/PostComment';

import './ViewPhoto.css';


function ViewPhoto () {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const allPhotos = useSelector(state => state.photoState.entries);
  const allComments = useSelector(state => state.commentState);
  const allUsers = useSelector(state => state.usersState);
  const selectedPhoto = allPhotos.find(photo => photo.id === +id);
  console.log(selectedPhoto)
  const comments = Object.values(allComments);
  const users = Object.values(allUsers);

  useEffect(() => {
    dispatch(getAllPhotos())
    dispatch(sessionActions.restoreUser())
    dispatch(getAllTheComments(id))
    dispatch(getUsers())
  }, [dispatch]);

  const getUsername = (user_id) => {
    const username = users.find(user => user.id === user_id)
    return username?.username;
  }

  function onDeleteComment(comment_id) {
    let result = window.confirm("Are you sure you want to delete?")
    if (result) {
        let res = dispatch(deleteComment(id, comment_id))
        if (res) {
            history.push(`/photos/${id}`)
        }
    }
  }

  const handleDelete = async (e) => {

    const deleting = await dispatch(deletingPhoto(selectedPhoto))

    history.push('/')
  }

  if (!selectedPhoto) {
    return (
      <p className='does-not-exist'>This photo does not exist.</p>
    )
  }

  return (
    <>
      <div className='photo-div'>
        <img className='photo' src={selectedPhoto?.photo_url} />
      </div>
      <div className='photo-data'>
        <h1 className='photo-title'>{selectedPhoto.title}</h1>
        <p className='description'>Caption: {selectedPhoto.caption}</p>
        <p className='taken-by'>Taken By: {selectedPhoto?.User?.username}</p>
        <div className='btn-container'>
          {selectedPhoto?.user_id === sessionUser.id ?
            <button className='btn' onClick={handleDelete} type='submit'>
              Delete
            </button>
            :
            <></>
          }
          {selectedPhoto?.user_id === sessionUser.id ?
            <Link to={`/photos/${selectedPhoto.id}/edit`}>
              <button className='btn' type='submit'>
                Edit
              </button>
            </Link>
            :
            <></>
          }
        </div>
      </div>
      <div>
          <PostComment />
      </div>
      <div className="commentsContainer">
        <div className="allComments">
          {comments?.map((comment) => (
            <div className="singleComment" key={comment.id}>
              <div>
                {getUsername(comment?.user_id)}: {comment.comments}
              </div>
              <div className="editDeleteContain">
                {sessionUser.id === comment?.user_id ?
                  <NavLink className="editDelete" exact to={`/photos/${id}/${comment.id}/edit`}>
                      Edit
                  </NavLink> : null}
                {sessionUser.id === comment?.user_id ?
                  <Link to={`/photos/${id}`} className="editDelete" onClick={() => onDeleteComment(comment.id)}>
                      Delete
                  </Link> : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ViewPhoto;
