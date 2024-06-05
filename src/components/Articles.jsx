import { fetchArticles, fetchTopics } from "../api";
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ErrorPage from "./ErrorPage";
import CardDesign from "./CardDesign";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [articleTopic, setArticleTopic] = useState("");
  const [isError, setIsError] = useState(null)
  const [order, setOrder] = useState("DESC");
  const [sortBy, setSortBy] = useState("created_at");
  const [isAllArticlesLoading, setIsAllArticlesLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSortBy(e) {
    e.preventDefault();
    setSortBy(e.target.value);
  }

  function handleOrder(e) {
    e.preventDefault();
    setOrder(e.target.value);
  }

  function handleTopic(e) {
    e.preventDefault();
    setArticleTopic(e.target.value);
  }

  useEffect(() => {
    setIsAllArticlesLoading(true);
        setSearchParams({
          topic: articleTopic,
          sort_by: sortBy,
          order: order,
        });
    fetchArticles(articleTopic, order, sortBy)
      .then((articles) => {

        setArticles(articles)
          setIsAllArticlesLoading(false);
      })
      .catch(() => {
        setIsAllArticlesLoading(false);
        setIsError(true)
      });
  }, [searchParams, articleTopic, order, sortBy]);

  function captialiseWord(str) {
    const copyString = str;
    const capitalString =
      copyString.charAt(0).toUpperCase() + copyString.slice(1);
    return capitalString;
  }

  if (isError) {
    return <ErrorPage></ErrorPage>
  }

  return isAllArticlesLoading ? (
    <Box sx={{ display: "flex", justifyContent: "center", margin: "20px" }}>
      <CircularProgress />
    </Box>
  ) : (
    <div>
      {articleTopic ? (
        <h2 className="articles-header">
          {captialiseWord(articleTopic)} Articles
        </h2>
      ) : (
        <h2 className="articles-header">All Articles</h2>
      )}
      <select
        name="topics"
        id="topics"
        onChange={(e) => {
          handleTopic(e);
        }}
      >
        <option>Select Articles by Topic</option>
        <option value="all">All</option>
        <option value="coding">Coding</option>
        <option value="cooking">Cooking</option>
        <option value="football">Football</option>
      </select>

      <select
        name="sort"
        id="sort"
        onChange={(e) => {
          handleSortBy(e);
        }}
      >
        <option>Sort Articles</option>
        <option value="created_at">Date</option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
      </select>
      <select
        name="sort"
        id="sort"
        onChange={(e) => {
          handleOrder(e);
        }}
      >
        <option>Set Order</option>
        <option value="ASC">ASC</option>
        <option value="DESC">DESC</option>
      </select>
      <ul className="articles-list">
        {articles.map((article) => {
          return (
            <CardDesign key={article.article_id}>
              <ArticleCard article={article} />
            </CardDesign>
          );
        })}
      </ul>
    </div>
  );
}
