import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticlebyId as fetchArticlesId, patchArticleVote } from '../api';
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Comments from './Comments';

export default function FullArticle() {
  const [article, setArticle] = useState({})
  
  const [isArticleLoading, setIsArticleLoading] = useState(true);
  const [voteChange, setVoteChange] = useState(0)
    const [isError, setIsError] = useState(false);
  const { article_id } = useParams()
  
  // set API error message


    useEffect(() => { 
        setIsArticleLoading(true);
      fetchArticlesId(article_id).then((articleData) => {
              const originalDate = articleData.data.article.created_at.split("T");
              articleData.data.article.created_at = originalDate[0];
            setArticle(articleData.data.article)
        })
            .then((article) => {
              setIsArticleLoading(false)
            }).catch((err) => {
              setIsError(true)
              setIsArticleLoading(false)
                setIsArticleLoading(false)
            });
    }, [article_id])
  
  function handleVote(vote, article_id) {
    patchArticleVote(vote, article_id)
    setVoteChange(vote)
  }


    return isArticleLoading ? (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    ) : (
      <div>
        <h2>{article.title}</h2>
        <ul>
          <li>
            <img src={article.article_img_url} alt="article image" />
            <p>{article.created_at}</p>
            <p>Posted by {article.author}</p>
            <p>Topic: {article.topic}</p>
            <p>{article.body}</p>
          </li>
          <li>
            <p>Comments: {article.comment_count}</p>
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
            <p>Votes: {article.votes + voteChange}</p>
          </li>
        </ul>
        <Comments article_id={article_id} />
      </div>
    );
}
// needs further styling, topic needs to be capitalised