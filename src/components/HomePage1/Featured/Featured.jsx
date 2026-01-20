import "./Featured.css";
import bookMain from "../../../images/best1.png";
import bookLeft from "../../../images/best2.png";
import bookRight from "../../../images/best3.png";

function Featured() {
  return (
    <section className="featured">
      {/* ================= HEADER ================= */}
      <div className="featured__header">
        <h2>Featured Book</h2>
        <a href="#" className="view-more">
          View more →
        </a>
      </div>

      {/* ================= SLIDER ================= */}
      <div className="featured__slider">
        {/* LEFT SLIDER BUTTON */}
        <button className="slider-btn slider-btn--left">‹</button>

        {/* LEFT BLUR CARD */}
        <div className="featured-card featured-card--blur">
          <img src={bookLeft} alt="Previous book" />
        </div>

        {/* MAIN CARD */}
        <div className="featured-card featured-card--main">
          <div className="featured-image">
            <img src={bookMain} alt="Emily and the Backbone" />
          </div>

          <div className="featured-content">
            <div className="featured-meta">
              <span className="badge">Biography</span>
              <span className="reviews">⭐ 450 Reviews</span>
            </div>

            <h3>Emily and the Backbone</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="featured-price">
              <span className="price">$19.23</span>
              <span className="old-price">$20.00</span>
            </div>

            <div className="featured-actions">
              <button className="btn-primary">🛒 Add to cart</button>
              <button className="btn-outline">❤</button>
              <a href="#" className="details-link">
                View Details
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT BLUR CARD */}
        <div className="featured-card featured-card--blur">
          <img src={bookRight} alt="Next book" />
        </div>

        {/* RIGHT SLIDER BUTTON */}
        <button className="slider-btn slider-btn--right">›</button>
      </div>
    </section>
  );
}

export default Featured;
