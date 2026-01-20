import "./Hero.css";
import heroBg from "../../../images/homepage2.png";


function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* ================= DARK PURPLE OVERLAY ================= */}
      <div className="hero__overlay"></div>

      {/* ================= HERO CONTENT WRAPPER ================= */}
      <div className="hero__content">

        {/* ---------- HOT PROMO BADGE ---------- */}
        <div className="hero__promo">
          <span className="promo-tag">HOT PROMO</span>
          <span className="promo-text">Discount 60% Special World Book Day</span>
        </div>

        {/* ---------- HERO TITLE ---------- */}
        <h1 className="hero__title">
          Find over 20 million <br /> book in Clevr.
        </h1>

        {/* ---------- HERO DESCRIPTION ---------- */}
        <p className="hero__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* ---------- HERO BUTTON ---------- */}
        <button className="hero__button">
          Go to Collections <span className="arrow"> →</span>
        </button>
      </div>
      {/* ================= HERO SLIDER INDICATOR ================= */}
      <div className="hero__indicator">
          <span className="line"></span>
          <span className="line active"></span>
          <span className="line"></span>
      </div>

    </section>
  );
}

export default Hero;
