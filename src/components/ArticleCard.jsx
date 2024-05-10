import { Routes, Route, Link } from "react-router-dom";
import FullArticle from "./FullArticle";


export default function ArticleCard({ article, }) {
  const articleLink = `/articles/${article.article_id}`

  const originalDate = article.created_at.split("T")
  const formattedDate = originalDate[0]

    return (
      <li className="article-card">
        <img
          className="article-img"
          src={article.article_img_url}
          alt="article-image"
        />
        <div className="article-info">
          <h2 className="article-card-header">{article.title}</h2>
          <p>Author: {article.author}</p>
          <p>{formattedDate}</p>
          <p>{article.votes}</p>
          <p>{article.comment_count}</p>
          <Link to={articleLink}>
            Read Full Article
          </Link>
        </div>
      </li>
    );
}

//needs further styling