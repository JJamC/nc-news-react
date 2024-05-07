import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticlebyId as fetchArticlesId } from '../api';
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function FullArticle({ isLoading, setIsLoading}) {
    const [article, setArticle] = useState({})

    const { article_id } = useParams()

    useEffect(() => { 
        setIsLoading(true);
        fetchArticlesId(article_id).then((res) => {
            setArticle(res.data.article)
        })
            .then(() => {
                setIsLoading(false)
            }).catch((err) => {
                setIsLoading(false)
            });
    }, [article_id])
    return isLoading ? (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    ) : (
      <div>
        <h2>{article.title}</h2>
        <ul>
          <li>
            <img src={article.article_img_url} alt="article image" />
            <p>Date Written: {article.created_at}</p>
            <p>Author: {article.author}</p>
            <p>Topic: {article.topic}</p>
            <p>{article.body}</p>
          </li>
          <li>
            <p>Comments: {article.comment_count}</p>
            <p>Upvotes: {article.votes}</p>
          </li>
        </ul>
      </div>
    );
}
// needs further styling, topic needs to be capitalised