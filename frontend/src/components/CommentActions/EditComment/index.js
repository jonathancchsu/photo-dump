import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateComment } from '../../../store/comments';
import { useHistory, useParams } from 'react-router-dom';
import './EditComment.css';

function EditComment() {
    const dispatch = useDispatch();
    const { id, comment_id } = useParams();
    const photo = useSelector(state => state.photoState);
    const sessionUser = useSelector(state => state.session.user);
    const comment = useSelector(state => state.commentState);
    const [updateThisComment, setUpdateThisComment] = useState(comment[comment_id].comments);
    const history = useHistory();

    const handleSubmit = e => {
        // e.preventDefault();

        const updatedComment = {
            id: comment_id,
            user_id: sessionUser.id,
            photo_id: photo[id].id,
            comment: updateThisComment
        }
        // console.log('-----------', updatedComment.id)

        // if (updatedComment.comment) {
            dispatch(updateComment(updatedComment));
            history.push(`/photos/${id}`)
        // }
    }

    const onClick = () => {
        history.push(`/photos/${id}`)
    }


    return (
        <div className="postContainer">
            <form className="postInputs" onSubmit={handleSubmit}>
                <textarea
                    value={updateThisComment}
                    onChange={(e) => setUpdateThisComment(e.target.value)}
                    name="body"
                    rows="5"
                    className="descriptionInput"
                ></textarea>
                <div className="postButtonContainer">
                    <button className="btn" type="submit">Submit</button>
                    <div onClick={onClick} className="btn">
                        Cancel
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditComment;
