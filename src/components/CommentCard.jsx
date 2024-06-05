import { useContext, useState, useEffect } from "react";
import * as React from "react";
import { Box, ThemeProvider } from "@mui/material";
import { color } from "@mui/system";
import { UserAccountContext } from "../contexts/UserAccount";
import { deleteComment } from "../api";

export default function CommentCard({ comment, setRefresh }) {

  const [isValidUser, setIsValidUser] = useState(true)
  const [commentIdDeleted, setCommentIdDeleted] = useState("");

    const originalDate = comment.created_at.split("T")
  const formattedDate = originalDate[0]
   
  function handleDelete(e) {
    e.preventDefault();
    if (loggedUser === comment.author) {
      deleteComment(e.target.value)
        .then(() => {
        setRefresh(Math.random)
      })
      }
  }

  const { loggedUser } = useContext(UserAccountContext);

  return (
    <div className="comment-card">
      <li>
        <p className="comment-card-author">{comment.author}</p>
        <p className="comment-card-info">{formattedDate}</p>
        <p className="comment-card-info">Votes: {comment.votes}</p>
        <p className="comment-card-info">{comment.body}</p>
        {commentIdDeleted === comment.comment_id ? (
          <button>Deleted</button>
        ) : (
          <button
            value={comment.comment_id}
            onClick={(e) => {
              handleDelete(e);
            }}
          >
            Delete
          </button>
        )}
      </li>
    </div>
  );
  }