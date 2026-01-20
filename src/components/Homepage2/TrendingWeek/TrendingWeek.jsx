import { useState } from "react";
import "./TrendingWeek.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const books = [
  "Such a Fun Age",
  "The Adventure",
  "Emily and the Backbone",
  "Luster: A Novel",
  "Real Life",
  "Another Story",
];

function TrendingSlider() {
  const [center, setCenter] = useState(2);

  const prev = () => {
    if (center > 0) setCenter(center - 1);
  };

  const next = () => {
    if (center < books.length - 1) setCenter(center + 1);
  };

  return (
    <section className="trending-fixed">
      <h2>Trending this week</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <div className="slider-shell">
        {/* LEFT BUTTON */}
        <button className="nav-btn left" onClick={prev}>
          <HiChevronLeft />
        </button>

        {/* CARD WINDOW (IMPORTANT) */}
        <div className="card-window">
          {books.map((title, index) => {
            const position = index - center;

            if (Math.abs(position) > 2) return null; // ❌ hide far cards

            return (
              <div
                key={index}
                className={`card slot-${position}`}
              >
                {title}
              </div>
            );
          })}
        </div>

        {/* RIGHT BUTTON */}
        <button className="nav-btn right" onClick={next}>
          <HiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default TrendingSlider;
