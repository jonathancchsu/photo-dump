import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addComment } from '../../../store/comments';


function PostComment() {
    const { photo_id } = useParams();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [newComment, setNewComment] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();

        const newComments = {
            userId: sessionUser.id,
            photo_id: photo_id,
            comment: newComment
        }
        if (newComment) {
            dispatch(addComment(newComments))
            setNewComment('')
            return;
        }
        return setErrors(['Please provide a comment.'])
    }


    return (
        <div>
            <ul>
                {errors.map((error, idx) =>
                <li id="error" key={idx}>{error}</li>)}
            </ul>
            <form className="postComment" onSubmit={handleSubmit}>
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    name="body"
                    placeholder="Enter a comment here"
                    rows="5"
                    className="commentInput"
                ></textarea>
                <div className="postButtonContainer">
                    <button className="postButton" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );

}

export default PostComment;
