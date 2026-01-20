import "./TopRated.css";
import { HiChevronLeft, HiChevronRight, HiShoppingBag } from "react-icons/hi";

import top1 from "../../../images/top1.png";
import top2 from "../../../images/top2.png";
import top3 from "../../../images/top3.png";
import top4 from "../../../images/top4.png";
import top5 from "../../../images/top5.png";
import top6 from "../../../images/top6.png";

/* ================= TOP RATED DATA ================= */
const topRatedBooks = [
  { id: 1, title: "SUNGLASSES", author: "Samuel Lee", price: "$18.13", rating: 4, image: top1 },
  { id: 2, title: "Electronic Basic", author: "John Doe", price: "$19.23", rating: 4, image: top2 },
  { id: 3, title: "What colors of the sky", author: "Lunaris Ave", price: "$13.77", rating: 4, image: top3 },
  { id: 4, title: "Theory is Alien Real", author: "Alan Runner", price: "$15.63", rating: 4, image: top4 },
  { id: 5, title: "SAKURA", author: "Elsa Mack", price: "$19.99", rating: 4, image: top5 },
  { id: 6, title: "Be yourself & Never surrender", author: "Jess Steve", price: "$15.63", rating: 4, image: top6 },
];

function TopRated() {
  return (
    <section className="top-rated">
      {/* ================= HEADER ================= */}
      <div className="top-rated__header">
        <h2>10 Top Rated Books</h2>
        <span className="view-more">
          View more <HiChevronRight />
        </span>
      </div>

      {/* ================= SLIDER ================= */}
      <div className="top-rated__slider">
        <button className="nav-btn left">
          <HiChevronLeft />
        </button>

        <div className="top-rated__list">
          {topRatedBooks.map((book, index) => (
            <div
              className={`top-card ${
                index === 0 ? "fade-left" : index === topRatedBooks.length - 1 ? "fade-right" : ""
              }`}
              key={book.id}
            >
              <div className="top-card__image">
                <img src={book.image} alt={book.title} />
              </div>

              <div className="top-rating">{"★".repeat(book.rating)}</div>
              <h4 className="top-title">{book.title}</h4>
              <p className="top-author">{book.author}</p>

              <div className="top-bottom">
                <span className="top-price">{book.price}</span>
                <button className="cart-btn">
                  <HiShoppingBag />
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-btn right">
          <HiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default TopRated;
