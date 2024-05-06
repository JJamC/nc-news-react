import { fetchArticles } from "../api";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

export default function Articles() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetchArticles().then((res) => {
            setArticles(res.data.articles)
        })
    }, [])
    console.log(articles);
  return (
    <div className="articles">
      <h2>Articles</h2>
      <ul className="article-list">
              {articles.map((article) => {
                  return <ArticleCard article={article} />;
        })}
      </ul>
    </div>
  );
}
