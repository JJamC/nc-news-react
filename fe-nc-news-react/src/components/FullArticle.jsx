import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticlebyId as fetchArticlesId } from '../api';
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Comments from './Comments';

export default function FullArticle() {
    const [article, setArticle] = useState({})
    const [isArticleLoading, setIsArticleLoading] = useState(true);

    const { article_id } = useParams()


    useEffect(() => { 
        setIsArticleLoading(true);
        fetchArticlesId(article_id).then((articleData) => {
            setArticle(articleData.data.article)
        })
            .then(() => {
                setIsArticleLoading(false)
            }).catch((err) => {
                setIsArticleLoading(false)
            });
    }, [article_id])

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
            <p>Upvotes: {article.votes}</p>
          </li>
                </ul>
                <Comments article_id={article_id} />
      </div>
    );
}
// needs further styling, topic needs to be capitalised