import { Routes, Route, Link } from "react-router-dom";
import FullArticle from "./FullArticle";


export default function ArticleCard({ article, }) {
  const articleLink = `/articles/${article.article_id}`

  const originalDate = article.created_at.split("T")
  const formattedDate = originalDate[0]

  return (
    <Link to={articleLink}>
      <li className="article-card">
        <img
          className="article-img"
          src={article.article_img_url}
          alt="article-image"
        />
        <div className="article-card-right">
          <div className="article-card-header">
            <h2>{article.title}</h2>
          </div>
          <div className="vertical-flex">
            <div className="article-card-info">
              <p>Date: {formattedDate}</p>
              <p>Votes: {article.votes}</p>
              <p>Comments: {article.comment_count}</p>
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
}

//needs further styling