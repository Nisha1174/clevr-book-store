import BookCard from "./BookCard";
import "./BooksGrid.css";

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
    image: "/images/book1.png",
  },
  {
    id: 2,
    title: "Theory: Is Alien Real",
    author: "Alan Runner",
    category: "Fiction",
    price: 21.4,
    rating: 4.4,
    reviews: 245,
    image: "/images/book2.png",
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
    image: "/images/book3.png",
  },
];

function BooksGrid() {
  return (
    <div className="books-grid-wrapper">

      {/* Header */}
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

    <button className="grid-btn">☰</button>
    <button className="grid-btn">▦</button>
  </div>
</div>


      {/* Grid */}
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
