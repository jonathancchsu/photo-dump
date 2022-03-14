import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateComment } from '../../../store/comments';
import { useHistory, useParams } from 'react-router-dom';
import './EditComment.css';

function EditComment() {
    const dispatch = useDispatch();
    const { photo_id, comment_id } = useParams();
    // const photo = useSelector(state => state.photoState);
    const sessionUser = useSelector(state => state.session.user);
    const comment = useSelector(state => state.commentState);
    const [updateThisComment, setUpdateThisComment] = useState(comment[comment_id]?.comments);
    const [errors, setErrors] = useState([]);
    const history = useHistory();
    console.log('------------',comment[comment_id].comments)
    const handleSubmit = e => {
        e.preventDefault();

        const updatedComment = {
            id: comment_id,
            uuser_id: sessionUser.id,
            photo_id: photo_id,
            comments: updateThisComment
        }

        if (updateThisComment) {
            history.push(`/photos/${photo_id}`)
            dispatch(updateComment(updatedComment));
            return;
        }
        return setErrors(['Please provide a comment.'])
    }

    const onClick = () => {
        history.push(`/photos/${photo_id}`)
    }


    return (
        <div className="postContainer">
            <ul>
                {errors.map((error, idx) =>
                <li id="error" key={idx}>{error}</li>)}
            </ul>
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
