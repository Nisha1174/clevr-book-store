import "./Header.css";
import { HiShoppingCart } from "react-icons/hi";

function Header() {
  return (
    <header className="hp3-header">
      
      {/* LEFT: LOGO */}
      <div className="hp3-logo">
        <span className="logo-icon">📚</span>
        <span className="logo-text">Clevr</span>
      </div>

      {/* CENTER: NAV LINKS */}
      <nav className="hp3-nav">
        <span className="active">Home</span>
        <span>Books</span>
        <span>Magazine</span>
        <span>Textbooks</span>
        <span>Audiobooks</span>
        <span>Recommended</span>
        <span>Sale</span>
      </nav>

      {/* RIGHT: USER */}
      <div className="hp3-user">
        <HiShoppingCart />
        <button className="user-btn">Roberto</button>
      </div>

    </header>
  );
}

export default Header;
