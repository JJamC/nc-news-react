import { Link } from "react-router-dom";

export default function Header() {
    return (
      <div className="header">
        <h1>NC News</h1>
        <nav className="nav-bar">
          <Link className="nav-bar-element" to="/">
            Home
          </Link>
          <Link className="nav-bar-element" to="/topics">
            Topics
          </Link>
          <Link className="nav-bar-element" to="/articles">
            Articles
          </Link>
          <Link className="nav-bar-element" to="/users">
            Users
          </Link>
        </nav>
      </div>
    );
}