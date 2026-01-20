import "./MenuNav.css";
import { useNavigate } from "react-router-dom";

function MenuNav() {
  const navigate = useNavigate();

  return (
    <nav className="menu-nav">
      <ul>
        <li onClick={() => navigate("/home")}>Home</li>
        <li onClick={() => navigate("/books")}>Books</li>
        <li>Magazine</li>
        <li>Textbooks</li>
        <li>Audiobooks</li>
        <li>Recommended</li>
        <li>Sale</li>
      </ul>
    </nav>
  );
}

export default MenuNav;
