import { Link } from "react-router-dom";
import myLogo from '../../assets/myLogo.png'
import { useLocation } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={myLogo} alt="logo"></img>
      </div>
      <nav className="links">
        {useLocation().pathname === "/" ? (
          <Link className="homeLink active" to="/">
            Accueil
          </Link>
        ) : (
          <Link className="homeLink" to="/">
            Accueil
          </Link>
        )}
        {useLocation().pathname === "/about" ? (
          <Link className="aboutLink active" to="/about">
            A Propos
          </Link>
        ) : (
          <Link className="aboutLink" to="/about">
            A Propos
          </Link>
        )}
        {useLocation().pathname === "/contact" ? (
          <Link className="aboutLink active" to="/contact">
            A Propos
          </Link>
        ) : (
          <Link className="aboutLink" to="/contact">
            A Propos
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;