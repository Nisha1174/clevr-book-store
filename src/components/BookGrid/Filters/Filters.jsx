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

        <label className="circle-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          <span className="label-text">All Genres</span>
        </label>

        <label className="circle-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          <span className="label-text">Art & Photography</span>
        </label>

        <label className="circle-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          <span className="label-text">Biographies & Memory</span>
        </label>

        <label className="circle-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          <span className="label-text">Children’s Book</span>
        </label>

        <label className="circle-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          <span className="label-text">Cookbook & Food</span>
        </label>

        <label className="circle-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          <span className="label-text">History</span>
        </label>

        <label className="circle-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          <span className="label-text">Literature & Fiction</span>
        </label>

        <label className="circle-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          <span className="label-text">Romance</span>
        </label>

        <label className="circle-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          <span className="label-text">Sci-Fi & Fantasy</span>
        </label>

        <label className="circle-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          <span className="label-text">Teen & Young Adult</span>
        </label>

        <button className="link-btn">+ Load More</button>
      </div>

      {/* Book Format */}
      <div className="filter-section">
        <div className="filter-header">
          <h4>Book Format</h4>
          <span>⌄</span>
        </div>

        <label className="circle-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          <span className="label-text">Hardcover</span>
        </label>

        <label className="circle-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          <span className="label-text">Paperback</span>
        </label>

        <label className="circle-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          <span className="label-text">E-book</span>
        </label>

        <label className="circle-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          <span className="label-text">Large Print</span>
        </label>
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
