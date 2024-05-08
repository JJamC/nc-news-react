import { useState, useEffect } from "react";

export default function CommentCard({ comment }) {

    const originalDate = comment.created_at.split("T")
    const formattedDate = originalDate[0]

    return (
      <li className="comment-card">
        <p className="comment-card-info">{comment.author}</p>
        <p className="comment-card-info">{formattedDate}</p>
        <p className="comment-card-info">Votes: {comment.votes}</p>
        <p className="comment-card-info">{comment.body}</p>
      </li>
    );
}