import { useState, useEffect } from "react";

export default function CommentCard({ comment }) {

    const [date, setDate] = useState("")
    useEffect(() => {
        const originalDate = comment.created_at
        const formattedDate = originalDate.split("T")
        setDate(formattedDate[0])
    }, [comment])
    //this state feels unnecessary ??
    // needs one row per comment come back

    return (
      <li className="comment-card">
        <p className="comment-card-info">{comment.author}</p>
        <p className="comment-card-info">{date}</p>
        <p className="comment-card-info">Votes: {comment.votes}</p>
        <p className="comment-card-info">{comment.body}</p>
      </li>
    );
}