import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { FaSignInAlt, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import "../styles/Header.css";
import logo from "../assets/imgs/logo.svg"; // Adjust the path to your logo image

const Header = () => {
  const { auth, logout } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="MyApp Logo" className="header__logo-img" />
        </Link>
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/">Hem</Link>
          </li>
          <li>
            <Link to="/about">OM OSS</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
          <li>
            <Link to="/blog">Blogg</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          {auth.isAdmin && (
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          )}
        </ul>
      </nav>
      <div className="header__auth">
        {auth.token ? (
          <button onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        ) : (
          <Link to="/login">
            <FaSignInAlt /> Logga In
          </Link>
        )}
      </div>
      <div className="header__menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`header__mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={closeMobileMenu}>
              Hem
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMobileMenu}>
              OM OSS
            </Link>
          </li>
          <li>
            <Link to="/faq" onClick={closeMobileMenu}>
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMobileMenu}>
              Kontakt
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={closeMobileMenu}>
              Blogg
            </Link>
          </li>

          <li>
            <Link to="/form" onClick={closeMobileMenu}>
              Form
            </Link>
          </li>
          {auth.isAdmin && (
            <li>
              <Link to="/admin" onClick={closeMobileMenu}>
                Admin
              </Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
