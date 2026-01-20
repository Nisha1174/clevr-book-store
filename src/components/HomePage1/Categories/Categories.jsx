import "./Categories.css";

import cat1 from "../../../images/cat1.png";
import cat2 from "../../../images/cat2.png";
import cat3 from "../../../images/cat3.png";
import cat4 from "../../../images/cat4.png";
import cat5 from "../../../images/cat5.png";

/* ================= CATEGORIES DATA ================= */
const categories = [
  {
    id: 1,
    title: "Arts & Photography",
    items: "214 + items",
    image: cat1,
  },
  {
    id: 2,
    title: "Biographies & Memory",
    items: "124 + items",
    image: cat2,
  },
  {
    id: 3,
    title: "Children’s Book",
    items: "432 + items",
    image: cat3,
  },
  {
    id: 4,
    title: "CookBook",
    items: "241 + items",
    image: cat4,
  },
  {
    id: 5,
    title: "History",
    items: "54 + items",
    image: cat5,
  },
];

function Categories() {
  return (
    <section className="categories">
      {/* ================= HEADER ================= */}
      <div className="categories__header">
        <h2>Categories</h2>

        {/* slider dots (UI only) */}
        <div className="slider-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>

      {/* ================= CATEGORY LIST ================= */}
      <div className="categories__list">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="category-card"
            style={{ backgroundImage: `url(${cat.image})` }}
          >
            {/* overlay */}
            <div className="category-overlay">
              <h4>{cat.title}</h4>
              <span>{cat.items}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
