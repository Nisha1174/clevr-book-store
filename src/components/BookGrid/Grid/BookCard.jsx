import "./BooksGrid.css";

function BookCard({ book }) {
  return (
    <div className="book-card">
      <div className="book-image">
        {book.badge && <span className="badge">{book.badge}</span>}

        <img src={book.image} alt={book.title} />

        <div className="hover-icons">
          <button>♡</button>
          <button>🔍</button>
          <button>🛒</button>
        </div>
      </div>

      <div className="book-info">
        <p className="category">{book.category}</p>
        <h4>{book.title}</h4>
        <p className="author">{book.author}</p>

        <div className="rating">
          ⭐ {book.rating} <span>({book.reviews} reviews)</span>
        </div>

        <p className="price">${book.price}</p>
      </div>
    </div>
  );
}

export default BookCard;
