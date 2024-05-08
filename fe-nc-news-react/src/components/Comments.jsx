import { useEffect, useState } from "react";
import { fetchCommentsbyArticleId } from "../api";
import CommentCard from "./CommentCard";
import Textarea from '@mui/joy/Textarea';
import { postNewComment } from "../api";

export default function Comments({ article_id }) {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState({});
  const [newInput, setNewInput] = useState("")
  const [pendingComment, setPendingComment] = useState(false)
  const [commentPosted, setCommentPosted] = useState(false)
  const [isError, setIsError] = useState(false)

    useEffect(() => {
        fetchCommentsbyArticleId(article_id)
            .then((comments) => {
            setComments(comments.data.comments);
          })
          .catch()
    }, [article_id, commentPosted])
    
  function handleCommentPost(e) {
    e.preventDefault();
    setNewComment({ username: 'cooljmessy', body: newInput })
    setNewInput("")
  }

  useEffect(() => {
    setCommentPosted(false)
    setIsError(false)
      setPendingComment(true)
    postNewComment( article_id, newComment)
      .then(() => {
        setPendingComment(false)
        setCommentPosted(true)
      }).catch((err) => {
        setIsError(true)
        setPendingComment(false)
    })
    }
    , [newComment])

    return (
      <div className="comments">
        <h3 className="comments-header">{isError ? 'Error invalid comment' : 'Comments'}</h3>
        <label>{commentPosted ? 'Comment posted' : 'Enter your comment here...' }</label>
        <br />
        <form
          className="post-comment-form"
          onSubmit={(e) => {
            handleCommentPost(e);
          }}
        >
          <input type="text" id="comment" name="comment" value={newInput} onChange={(e) => {
            setNewInput(e.target.value)
            setCommentPosted(false)
          }}/>
          <br />
          <button disabled={pendingComment === true}>
            {pendingComment ? 'Submitting' : 'Submit'}
          </button>
        </form>
        <ul className="comments-list">
          {comments.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
        </ul>
      </div>
    );
}
