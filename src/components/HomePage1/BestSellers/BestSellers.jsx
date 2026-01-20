import "./BestSellers.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import best1 from "../../../images/best1.png";
import best2 from "../../../images/best2.png";
import best3 from "../../../images/best3.png";

/* ================= BEST SELLERS DATA ================= */
const bestSellers = [
  {
    id: 1,
    title: "So You Want To Talk About Race",
    author: "Ijeoma Oluoulo",
    category: "Biography",
    price: "$15.63",
    oldPrice: "$19.99",
    rating: "4.8",
    image: best1,
  },
  {
    id: 2,
    title: "Life of Wilds",
    author: "Jasmine Bulla",
    category: "Nature",
    price: "$24.99",
    rating: "3.6",
    image: best2,
  },
  {
    id: 3,
    title: "Story of Everest",
    author: "Henry Martoppo",
    category: "Adventure",
    price: "$21.99",
    oldPrice: "$25",
    rating: "4.7",
    image: best3,
  },
];

function BestSellers() {
  return (
    <section className="best-sellers">
      {/* ================= HEADER ================= */}
      <div className="best-sellers__header">
        <h2>Best Sellers</h2>
        <span className="view-more">
          View more <HiChevronRight />
        </span>
      </div>

      {/* ================= SLIDER ================= */}
      <div className="best-sellers__slider">
        <button className="slider-btn left">
          <HiChevronLeft />
        </button>

        <div className="best-sellers__list">
          {bestSellers.map((book) => (
            <div className="best-card" key={book.id}>
              
              {/* IMAGE */}
              <div className="best-card__image">
                <img src={book.image} alt={book.title} />
              </div>

              {/* CONTENT */}
              <div className="best-card__content">
                <div className="best-badges">
                  <span className="badge category">{book.category}</span>
                  <span className="badge rating">⭐ {book.rating}</span>
                </div>

                <h4 className="best-title">{book.title}</h4>
                <p className="best-author">{book.author}</p>

                <div className="best-price">
                  <span className="price">{book.price}</span>
                  {book.oldPrice && (
                    <span className="old-price">{book.oldPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="slider-btn right">
          <HiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default BestSellers;
