
export default function ArticleCard({ article }) {
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
        <p>{article.created_at}</p>
        <p>{article.votes}</p>
        </div>
      </li>
    );
}

//needs further styling