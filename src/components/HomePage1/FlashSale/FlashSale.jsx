import { useState } from "react";
import "./FlashSale.css";

import img1 from "../../../images/top1.png";
import img2 from "../../../images/top2.png";
import img3 from "../../../images/top3.png";
import img4 from "../../../images/top4.png";

const flashBooks = [
  {
    id: 1,
    title: "Story of Everest",
    author: "Henry Martopo",
    price: "21.99",
    oldPrice: "25",
    stock: 45,
    category: "Adventure",
    rating: 4.8,          // ⭐ ADDED rating
    reviews: 459,         // ⭐ ADDED review count
    image: img1,
  },
  {
    id: 2,
    title: "Theory: Is Alien Real",
    author: "Alan Runner",
    price: "15.63",
    oldPrice: "18.54",
    stock: 2,
    category: "Fiction",
    rating: 4.6,
    reviews: 412,
    image: img2,
  },
  {
    id: 3,
    title: "What colors of the sky",
    author: "Lunce Axe",
    price: "13.77",
    oldPrice: "18.13",
    stock: 12,
    category: "Science",
    rating: 4.5,
    reviews: 389,
    image: img3,
  },
  {
    id: 4,
    title: "Electronic Basic",
    author: "John Doe",
    price: "19.23",
    oldPrice: "23",
    stock: 8,
    category: "Technology",
    rating: 4.4,
    reviews: 301,
    image: img4,
  },
];

function FlashSale() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === flashBooks.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? flashBooks.length - 1 : prev - 1
    );
  };

  const visibleCards = [
    flashBooks[activeIndex],
    flashBooks[(activeIndex + 1) % flashBooks.length],
  ];

  return (
    <section className="flash-sale">
      {/* LEFT CONTENT */}
      <div className="flash-left">
        <h2>Flash Sale</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore.
        </p>
        <div className="flash-timer">05 : 42 : 19 : 54</div>
      </div>

      {/* SLIDER */}
      <div className="flash-slider">

        {/* 🔵 DOT PATTERN (3 × 6) */}
        <div className="dot-pattern"></div>

        <button className="slider-btn left" onClick={handlePrev}>
          &#8249;
        </button>

        <div className="flash-cards">
          {visibleCards.map((book, index) => (
            <div
              key={book.id}
              className={`flash-card ${index !== 0 ? "inactive" : ""}`}
            >
              <div className="flash-card__image">
                <img src={book.image} alt={book.title} />
              </div>

              <div className="flash-card__info">
                <div className="top-line">
                  <span className="tag">{book.category}</span>

                  {/* ⭐ RATING ADDED */}
                  <span className="rating">
                    ★★★★☆ <small>({book.reviews})</small>
                  </span>
                </div>

                <h4>{book.title}</h4>
                <p className="author">{book.author}</p>

                <div className="price">
                  <strong>${book.price}</strong>
                  <span>${book.oldPrice}</span>
                </div>

                <div className="stock">{book.stock} books left</div>
              </div>
            </div>
          ))}
        </div>

        <button className="slider-btn right" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </section>
  );
}

export default FlashSale;
