import "./MaybeLike.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import best1 from "../../../images/best1.png";
import best2 from "../../../images/best2.png";
import best3 from "../../../images/best3.png";

/* ================= MAYBE LIKE DATA ================= */
const maybeLikeBooks = [
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

function MaybeLike() {
  return (
    <section className="maybe-like">
      {/* HEADER */}
      <div className="maybe-like__header">
        <h2>Maybe you like it</h2>
        <span className="view-more">
          View more <HiChevronRight />
        </span>
      </div>

      {/* SLIDER */}
      <div className="maybe-like__slider">
        <button className="slider-btn left">
          <HiChevronLeft />
        </button>

        <div className="maybe-like__list">
          {maybeLikeBooks.map((book) => (
            
            <div className="maybe-card" key={book.id}>
              
              {/* IMAGE */}
              <div className="maybe-card__image">
                <img src={book.image} alt={book.title} />

                {/* ⭐ RATING ON IMAGE */}
                <span className="badge rating rating-top">
                  ⭐ {book.rating}
                </span>
              </div>

              {/* CONTENT */}
              <div className="maybe-card__content">
                {/* CATEGORY */}
                <span className="badge category">{book.category}</span>

                <h4 className="maybe-title">{book.title}</h4>
                <p className="maybe-author">{book.author}</p>

                <div className="maybe-price">
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

export default MaybeLike;
