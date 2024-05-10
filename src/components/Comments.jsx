import { useContext, useEffect, useState } from "react";
import { fetchCommentsbyArticleId } from "../api";
import CommentCard from "./CommentCard";
import Textarea from '@mui/joy/Textarea';
import { postNewComment } from "../api";
import { UserAccountContext } from "../contexts/UserAccount";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Comments({ article_id }) {
  const [comments, setComments] = useState([])
  const [newInput, setNewInput] = useState("")
  const [pendingComment, setPendingComment] = useState(false)
  const [isError, setIsError] = useState(false)
  const [commentsAreLoading, setCommentsAreLoading] = useState(false)

  useEffect(() => {
      setCommentsAreLoading(true)
        fetchCommentsbyArticleId(article_id)
            .then((comments) => {
              setComments(comments.data.comments);
              setCommentsAreLoading(false)
            })
          .then(() => { 

          })
          .catch()

  }, [])
    
  function handleCommentPost(e) {
    e.preventDefault();
    setNewInput("")
      setIsError(false);
      setPendingComment(true);
      postNewComment(article_id, { username: "cooljmessy", body: newInput })
        .then(() => {
          setPendingComment(false);
        })
        .catch((err) => {
          setIsError(true);
          setPendingComment(false);
        });
  }

    return (
      <div className="comments">
        <h3 className="comments-header">
          {isError ? "Error invalid comment" : "Comments"}
        </h3>
        <label>
        Enter your comment here...
        </label>
        <br />
        <form
          className="post-comment-form"
          onSubmit={(e) => {
            handleCommentPost(e);
          }}
        >
          <input
            type="text"
            id="comment"
            name="comment"
            required
            value={newInput}
            onChange={(e) => {
              setNewInput(e.target.value);
            }}
          />
          <br />
          <button disabled={pendingComment}>
            {pendingComment ? "Submitting" : "Submit"}
          </button>
        </form>
        <ul className="comments-list">
          {commentsAreLoading ? (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress />
            </Box>
          ) : (
            comments.map((comment) => {
              return (
                <CommentCard
                  key={comment.comment_id}
                  comment={comment}
                />
              );
            })
          )}
        </ul>
      </div>
    );
}
