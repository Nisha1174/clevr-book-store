import "./Hero.css";
import { HiArrowRight } from "react-icons/hi";
import { HiBookOpen, HiUsers } from "react-icons/hi";

/* Book images */
import top1 from "../../../images/top1.png";
import top2 from "../../../images/top2.png";
import top3 from "../../../images/top3.png";
import top4 from "../../../images/top4.png";

function Hero() {
  return (
    <section className="hp2-hero">
      
      {/* ================= LEFT CONTENT ================= */}
      <div className="hp2-hero__content">

        <h1 className="hp2-hero__title">
          Welcome to <span>Clevr</span><br />
          Online Book Store
        </h1>

        <p className="hp2-hero__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* STATS */}
        <div className="hp2-hero__stats">
          <div className="stat">
            <HiBookOpen />
            <div>
              <strong>68k+</strong>
              <span>Books Collections</span>
            </div>
          </div>

          <div className="stat">
            <HiUsers />
            <div>
              <strong>25,634</strong>
              <span>Happy Customers</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button className="hp2-hero__btn">
          Go to Collections <HiArrowRight />
        </button>
      </div>

      {/* ================= RIGHT BOOK CARDS ================= */}
      <div className="hp2-hero__books">

        <div className="hp2-book-card">
          <span className="badge">Best Seller</span>
          <img src={top1} alt="book" />
        </div>

        <div className="hp2-book-card">
          <span className="badge">Best Seller</span>
          <img src={top2} alt="book" />
        </div>

        <div className="hp2-book-card">
          <span className="badge">Best Seller</span>
          <img src={top3} alt="book" />
        </div>

        <div className="hp2-book-card faded">
          <span className="badge">Best Seller</span>
          <img src={top4} alt="book" />
        </div>

      </div>

    </section>
  );
}

export default Hero;
