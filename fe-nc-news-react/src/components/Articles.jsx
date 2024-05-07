import { fetchArticles } from "../api";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Articles({ isLoading, setIsLoading,}) {
  const [articles, setArticles] = useState([])
  const [isAllArticlesLoading, setIsAllArticlesLoading] = useState(true);
  // const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsAllArticlesLoading(true)
    fetchArticles().then((res) => {
      setArticles(res.data.articles)
        .then(() => {
          setIsAllArticlesLoading(false)
        })
    }).catch((err) => {
      setIsAllArticlesLoading(false); // feel as if this useEffect is unnecessary, add err handling
    });
  },
    [])
  //loading circle needs centering more
  return isAllArticlesLoading ? (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  ) : (
    <div className="articles">
      <h2>Articles</h2>
      <ul className="article-list">
          {articles.map((article) => {
            return <ArticleCard key= {article.article_id}article={article} />;
        })}
      </ul>
    </div>
  );
}
