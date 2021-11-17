import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div className="navigation">Book<i>markd</i></div>
      </Link>
    </nav>
  );
}

export default Header;