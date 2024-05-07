import { useEffect, useState } from "react";
import { fetchCommentsbyArticleId } from "../api";
import CommentCard from "./CommentCard";

export default function Comments({ article_id }) {
    const [comments, setComments] = useState([])
    useEffect(() => {
        fetchCommentsbyArticleId(article_id)
            .then((comments) => {
            setComments(comments.data.comments);
          })
          .catch()
    }, [article_id])

    // struggling to get the h3 centered on the page!
    return (
      <div className="comments">
        <h3 className="comments-header">Comments</h3>
        <ul className="comments-list">
          {comments.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
        </ul>
      </div>
    );
}
