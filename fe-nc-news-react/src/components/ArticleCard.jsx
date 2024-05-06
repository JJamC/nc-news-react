
export default function ArticleCard({ article }) {
    return (
      <li key={article.id} className="article-card">
        <h2>{article.title}</h2>
        <p>{article.topic}</p>
        <p>{article.author}</p>
        <p>{article.created_at}</p>
        <p>{article.votes}</p>
            <p>{article.topic}</p>
            <img src={article.article_img_url} alt="article-image" />
      </li>
    );
}