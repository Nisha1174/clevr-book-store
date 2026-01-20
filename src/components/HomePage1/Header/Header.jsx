import "./Header.css";
import clverIcon from "../../../images/clvericon.png";
import { HiOutlineSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";




function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">

      {/* ================= LOGO SECTION ================= */}
      <div className="header__logo">
       <img src={clverIcon} alt="Clevr logo" className="logo-icon" />

        {/* Logo Text */}
        <span className="logo-text">Clevr</span>
      </div>

      {/* ================= MENU BUTTON SECTION ================= */}
      <div className="header__menu">
        <button className="menu-btn" 
        onClick={() => navigate("/menu")}>
          Menu 
        <span className="menu-arrow">▾</span>
        </button>
      </div>

      {/* ================= SEARCH BAR SECTION ================= */}
      <div className="header__search">
        <input
          type="text"
          placeholder="Find books here..."
          className="search-input"
        />
        <span className="search-icon">
           <HiOutlineSearch />
        </span>

      </div>

      {/* ================= RIGHT ACTIONS SECTION ================= */}
      <div className="header__actions">

        {/* ---------- Basket Icon ---------- */}
        <button className="basket-btn">🛒</button>

        {/* ---------- Sign In Button ---------- */}
        <button className="signin-btn">Sign in</button>

        {/* ---------- Create Account Button ---------- */}
        <button className="create-btn">Create account</button>

      </div>

    </header>
  );
}

export default Header;
