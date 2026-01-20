import "./Trending.css";

/* ================= TRENDING DATA (STATIC FOR NOW) ================= */
const trendingBooks = [
  {
    id: 1,
    title: "Such a Fun Age",
    author: "James Elvian",
    category: "Biography",
    price: "$56.9",
    rating: "4.5",
    bg: "#0C2C55",
  },
  {
    id: 2,
    title: "The Adventure",
    author: "James Elvian",
    category: "Adventure",
    price: "$34.6",
    rating: "4.2",
    bg: "#561530",
  },
  {
    id: 3,
    title: "Emily and the Backbone",
    author: "James Elvian",
    category: "Fairy Tales",
    price: "$41.3",
    rating: "4.1",
    bg: "#63A361",
  },
  {
    id: 4,
    title: "Luster: a Novel",
    author: "James Elvian",
    category: "Fiction",
    price: "$44.9",
    rating: "4.7",
    bg: "#6E5034",
  },
  {
    id: 5,
    title: "Real Life",
    author: "James Elvian",
    category: "Nature",
    price: "$54.6",
    rating: "3.4",
    bg: "#CD2C58",
  },
];

function Trending() {
  return (
    <section className="trending">
      {/* ================= SECTION TITLE ================= */}
      <div className="trending__header">
        <h2>Trending this week</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* ================= BOOK CARDS ================= */}
      <div className="trending__list">
        {trendingBooks.map((book) => (
          <div className="book-card" key={book.id}>
            
            {/* ---------- BOOK COVER ---------- */}
            <div
              className="book-cover"
              style={{ backgroundColor: book.bg }}
            >
              {/* ---------- RATING BADGE ---------- */}
              <div className="book-rating">
                <span className="rating-star">★</span>
                <span className="rating-value">{book.rating}</span>
              </div>
            </div>

            {/* ---------- BOOK INFO ---------- */}
            <div className="book-info">
              <span className="book-category">{book.category}</span>
              <h4 className="book-title">{book.title}</h4>
              <p className="book-author">{book.author}</p>
              <button className="book-price">{book.price}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trending;
