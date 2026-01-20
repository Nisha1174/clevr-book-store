import "./Breadcrumb.css";
import { Link } from "react-router-dom";

function Breadcrumb() {
  return (
    <div className="breadcrumb">
      <Link to="/" className="breadcrumb-link">Home</Link>
      <span className="breadcrumb-separator">/</span>
      <span className="breadcrumb-current">Books</span>
    </div>
  );
}

export default Breadcrumb;
