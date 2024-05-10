import { fetchArticles, fetchTopics } from "../api";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Articles({ isLoading, setIsLoading,}) {
  const [articles, setArticles] = useState([])
  const [isAllArticlesLoading, setIsAllArticlesLoading] = useState(true);
  const [articleTopic, setArticleTopic] = useState("")

  function handleTopic(e) {
    e.preventDefault()
    setArticleTopic(e.target.value)
  }

  useEffect(() => {
    setIsAllArticlesLoading(true)
    fetchArticles(articleTopic).then((res) => {
      setArticles(res.data.articles)
        .then(() => {
          setIsAllArticlesLoading(false)
        })
    }).catch((err) => {
      setIsAllArticlesLoading(false);
    });
  },
    [articleTopic])
  
  function captialiseWord(str) {
    const copyString = str
    const capitalString = copyString.charAt(0).toUpperCase() + copyString.slice(1)
    return capitalString
}

  
  return isAllArticlesLoading ? (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  ) : (
    <div className="articles">
        {articleTopic ? (
          <h2 className="articles-header">{captialiseWord(articleTopic)} Articles</h2>
        ) : (
          <h2 className="articles-header">All Articles</h2>
        )}
      <select
        onChange={(e) => {
          handleTopic(e);
        }}
      >
        <option value="selected">
          Select your option
        </option>
        <option value="all">All</option>
        <option value="coding">Coding</option>
        <option value="cooking">Cooking</option>
        <option value="football">Football</option>
      </select>
      <ul className="article-list">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </div>
  );
}
