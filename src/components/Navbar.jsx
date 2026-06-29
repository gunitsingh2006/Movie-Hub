function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="nav-brand">
          Movie<span>HUB</span> - <span>Gunit Singh</span>
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/favorites" className="nav-link">
              Favorites
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a href="/logout" className="nav-link-logout">
            
              LogOut
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
