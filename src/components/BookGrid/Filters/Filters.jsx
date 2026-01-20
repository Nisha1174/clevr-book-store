import "./Filters.css";

function Filters() {
  return (
    <aside className="filters">

      <h3 className="filters-title">Filter</h3>

      {/* Categories */}
      <div className="filter-section">
        <div className="filter-header">
          <h4>Categories</h4>
          <span>⌄</span>
        </div>

        <label><input type="checkbox" /> All Genres</label>
        <label><input type="checkbox" /> Art & Photography</label>
        <label><input type="checkbox" /> Biographies & Memory</label>
        <label><input type="checkbox" /> Children’s Book</label>
        <label><input type="checkbox" /> Cookbook & Food</label>
        <label><input type="checkbox" /> History</label>
        <label><input type="checkbox" /> Literature & Fiction</label>
        <label><input type="checkbox" /> Romance</label>
        <label><input type="checkbox" /> Sci-Fi & Fantasy</label>
        <label><input type="checkbox" /> Teen & Young Adult</label>

        <button className="link-btn">+ Load More</button>
      </div>

      {/* Book Format */}
      <div className="filter-section">
        <div className="filter-header">
          <h4>Book Format</h4>
          <span>⌄</span>
        </div>

        <label><input type="checkbox" /> Hardcover</label>
        <label><input type="checkbox" /> Paperback</label>
        <label><input type="checkbox" /> E-book</label>
        <label><input type="checkbox" /> Large Print</label>
      </div>

      {/* Publisher */}
      <div className="filter-section">
        <div className="filter-header">
          <h4>Publisher</h4>
          <span>⌄</span>
        </div>
      </div>

      {/* Years */}
      <div className="filter-section">
        <div className="filter-header">
          <h4>Years</h4>
          <span>⌄</span>
        </div>
      </div>

      {/* Price Range */}
      <div className="filter-section">
        <div className="filter-header">
          <h4>Price Range</h4>
        </div>

        <input type="range" min="0" max="100" />
        <div className="price-range">
          <span>$0</span>
          <span>$100</span>
        </div>
      </div>

      {/* Buttons */}
      <button className="btn-primary">Refine Search</button>
      <button className="btn-secondary">Reset Filter</button>

    </aside>
  );
}

export default Filters;
