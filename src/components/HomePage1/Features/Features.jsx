import "./Features.css";
import { FaShippingFast, FaShieldAlt, FaMedal, FaUndo, FaClock, FaCreditCard, FaRegCreditCard } from "react-icons/fa";

function Features() {
  return (
    <section className="features">
      {/* ================= FEATURES CONTAINER ================= */}
      <div className="features__container">

        {/* ===== Feature Item 1 ===== */}
        <div className="feature-item">
          <FaClock className="feature-icon" />
          <h4>Quick Delivery</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

        {/* ===== Feature Item 2 ===== */}
        <div className="feature-item">
          <FaRegCreditCard className="feature-icon" />
          <h4>Secure Payment</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

        {/* ===== Feature Item 3 ===== */}
        <div className="feature-item">
          <FaMedal className="feature-icon" />
          <h4>Best Quality</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

        {/* ===== Feature Item 4 ===== */}
        <div className="feature-item">
          <FaShieldAlt className="feature-icon" />
          <h4>Return Guarantee</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Features;
