import "./TrendingWeek3.css";
import { HiOutlineSearch } from "react-icons/hi";

function TrendingWeek() {
  return (
    <section className="hp3-trending">

      {/* ===== Title ===== */}
      <div className="hp3-trending__header">
        <h2>Trending this week</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* ===== Cards Layout ===== */}
      <div className="hp3-trending__layout">

        {/* LEFT BIG CARD */}
        <div className="hp3-featured-card">
          <div className="dots">● ● ●</div>
          <h3>
            Be your self & <br />
            Never Surrender
          </h3>
        </div>

        {/* RIGHT GRID */}
        <div className="hp3-cards-grid">

          <div className="hp3-card purple">
            <h4>The Adventure</h4>
          </div>

          <div className="hp3-card green">
            <h4>Life of Wilds</h4>
          </div>

          <div className="hp3-card brown">
            <h4>Luster <br /> A Novel</h4>
          </div>

          <div className="hp3-card blue">
            <h4>Such <br /> a Fun Age</h4>
          </div>

          <div className="hp3-card dark">
            <HiOutlineSearch className="search-icon" />
            <h4>Is Alien Real</h4>
          </div>

          <div className="hp3-card pink">
            <h4>REAL <br /> LIFE</h4>
          </div>

        </div>
      </div>
    </section>
  );
}

export default TrendingWeek;
