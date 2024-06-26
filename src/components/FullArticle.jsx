import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlebyId as fetchArticlesId, patchArticleVote } from "../api";
import ErrorPage from "./ErrorPage";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Comments from "./Comments";

export default function FullArticle() {
  const [article, setArticle] = useState({});

  const [isArticleLoading, setIsArticleLoading] = useState(true);
  const [voteChange, setVoteChange] = useState(0);
  const [isError, setIsError] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    setIsArticleLoading(true);
    fetchArticlesId(article_id)
      .then((articleData) => {
        const originalDate = articleData.data.article.created_at.split("T");
        articleData.data.article.created_at = originalDate[0];
        setArticle(articleData.data.article);
      })
      .then((article) => {
        setIsArticleLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsArticleLoading(false);
        setIsArticleLoading(false);
      });
  }, [article_id]);

  function handleVote(vote, article_id) {
    patchArticleVote(vote, article_id);
    setVoteChange(vote);
  }

  if (isError) {
    return <ErrorPage></ErrorPage>;
  }

  return isArticleLoading ? (
    <Box sx={{ display: "flex", justifyContent: "center", margin: "20px" }}>
      <CircularProgress />
    </Box>
  ) : ( 
      <div className="full-article">
        <div className="full-article-title">
          <h2>{article.title}</h2>
          </div>
              <img className="full-article-img" src={article.article_img_url} alt="article image" />
          <div className="full-article-info">
          <p>{article.created_at}</p>
          <p>Posted by: {article.author}</p>
          <p>Topic: {article.topic}</p>
        </div>
        <p className="full-article-body">{article.body}</p>
        <div className="vote-buttons">
          <button
            type="button"
            className="upvote-button"
            disabled={voteChange === 1}
            onClick={() => {
              handleVote(1, article_id);
            }}
          >
            <span className="upvote-arrow">&#8657;</span>
          </button>
          <button
            type="button"
            className="upvote-button"
            disabled={voteChange === -1}
            onClick={() => {
              handleVote(-1, article_id);
            }}
          >
            <span className="upvote-arrow">&#8659;</span>
          </button>
          </div>
          <p>Votes: {article.votes + voteChange}</p>
      <Comments article_id={article_id} />
    </div>
  );
}
// needs further styling, topic needs to be capitalised
