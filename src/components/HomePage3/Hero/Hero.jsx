import "./Hero.css";
import heroBg from "../../../images/hero3.png";

function Hero() {
  return (
    <section
      className="hp3-hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* 🔹 Purple overlay */}
      <div className="hp3-hero__overlay"></div>

      
      {/* 🔹 Hero content */}
      <div className="hp3-hero__content">
        <h1>Welcome to <span>Clevr</span>.</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
      </div>

      {/* 🔹 Search box */}
      <div className="hp3-hero__search">
        <select>
          <option>Your</option>
        </select>

        <select>
          <option>Publisher</option>
        </select>

        <input type="text" placeholder="Enter book name here" />

        <button>
          Search <span>→</span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
