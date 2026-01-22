import BookCard from "./BookCard";
import "./BooksGrid.css";

import book1 from "../../../images/top1.png";
import book2 from "../../../images/top2.png";
import book3 from "../../../images/top3.png";
import book4 from "../../../images/cat1.png";
import book5 from "../../../images/cat2.png";
import book6 from "../../../images/cat3.png";
import book7 from "../../../images/cat4.png";
import book8 from "../../../images/cat5.png";
import book9 from "../../../images/top4.png";
import book10 from "../../../images/top5.png";
import book11 from "../../../images/top6.png";
import book12 from "../../../images/best1.png";

const booksData = [
  {
    id: 1,
    title: "Electronic Basic",
    author: "John Doe",
    category: "Biography",
    price: 56.9,
    rating: 4.6,
    reviews: 214,
    badge: "Best Seller",
    image: book1,
  },
  {
    id: 2,
    title: "Theory: Is Alien Real",
    author: "Alan Runner",
    category: "Fiction",
    price: 21.4,
    rating: 4.4,
    reviews: 245,
    image: book2,
  },
  {
    id: 3,
    title: "Be Yourself & Never Surrender",
    author: "Jesse Stone",
    category: "History",
    price: 39.9,
    rating: 4.8,
    reviews: 186,
    badge: "Best Seller",
    image: book3,
  },
  {
    id: 4,
    title: "Life of Wilds",
    author: "James Sullivan",
    category: "Animals",
    price: 27.4,
    rating: 4.3,
    reviews: 124,
    image: book4,
  },
  {
    id: 5,
    title: "What colors of the sky",
    author: "Lunar Ace",
    category: "Art & Photography",
    price: 37.9,
    rating: 4.7,
    reviews: 156,
    badge: "Best Seller",
    image: book5,
  },
  {
    id: 6,
    title: "SAKURA",
    author: "Elisa Moon",
    category: "History",
    price: 29.9,
    rating: 4.5,
    reviews: 98,
    image: book6,
  },
  {
    id: 7,
    title: "Emily and the Backbone",
    author: "Leo Monroe",
    category: "Biography",
    price: 19.9,
    rating: 4.6,
    reviews: 112,
    badge: "Best Seller",
    image: book7,
  },
  {
    id: 8,
    title: "Story of Everest",
    author: "Henry Montopo",
    category: "Adventure",
    price: 18.4,
    rating: 4.2,
    reviews: 90,
    image: book8,
  },
  {
    id: 9,
    title: "Real Life",
    author: "David Johnson",
    category: "Children",
    price: 17.5,
    rating: 4.4,
    reviews: 78,
    image: book9,
  },
  {
    id: 10,
    title: "Real Life",
    author: "David Johnson",
    category: "Children",
    price: 17.5,
    rating: 4.4,
    reviews: 78,
    image: book10,
  },
  {
    id: 11,
    title: "Real Life",
    author: "David Johnson",
    category: "Children",
    price: 17.5,
    rating: 4.4,
    reviews: 78,
    image: book11,
  },
  {
    id: 12,
    title: "Real Life",
    author: "David Johnson",
    category: "Children",
    price: 17.5,
    rating: 4.4,
    reviews: 78,
    image: book12,
  },
];

function BooksGrid() {
  return (
    <div className="books-grid-wrapper">
      <div className="books-header">
        <div>
          <h2>Books</h2>
          <p>Over 475+ books available here, find it now!</p>
        </div>

        <div className="books-actions">
          <select>
            <option>Newest</option>
            <option>Popular</option>
          </select>

          <button className="grid-btn">▥</button>
          <button className="grid-btn">☰</button>
        </div>
      </div>

      <div className="books-grid">
        {booksData.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      <button className="load-more">Load More</button>
    </div>
  );
}

export default BooksGrid;
