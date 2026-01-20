import "./Footer.css";
import clverIcon from "../../../images/clvericon.png";

import {
  HiOutlineOfficeBuilding,
  HiOutlineUsers,
  HiOutlineBookOpen,
  HiOutlineHome,
  HiOutlineBookmark,
} from "react-icons/hi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      {/* ================= FOOTER STATS SECTION START ================= */}
<div className="footer-stats">

  <div className="stat">
    <div className="stat-top">
      <HiOutlineHome />
      <span className="stat-number">268</span>
    </div>
    <p className="stat-label">Our stores around the world</p>
  </div>

  <div className="stat">
    <div className="stat-top">
      <HiOutlineUsers />
      <span className="stat-number">25,634</span>
    </div>
    <p className="stat-label">Our happy customers</p>
  </div>

  <div className="stat">
    <div className="stat-top">
      <HiOutlineBookmark />
      <span className="stat-number">68+k</span>
    </div>
    <p className="stat-label">Book Collections</p>
  </div>

</div>
{/* ================= FOOTER STATS SECTION END ================= */}


      {/* ================= NEWSLETTER ================= */}
      <div className="footer-newsletter">
        <h3>
          Subscribe our newsletter <br />
          for newest books updates
        </h3>

        <div className="newsletter-form">
          <input type="email" placeholder="Type your email here" />
          <button>Subscribe</button>
        </div>

        <div className="newsletter-dots"></div>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="footer-main">
        {/* BRAND */}
        <div className="footer-brand">
            {/* BRAND LOGO */}
         <div className="footer-logo">
        <img src={clverIcon} alt="Clevr logo" />
        <h2>Clevr</h2>
         </div>
          <p>
            Clevr is an online bookstore website who sells genres of books from
            around the world. Find your book here.
          </p>

          <h3 className="follow-us">Follow Us</h3>

          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>About us</li>
            <li>Contact us</li>
            <li>Products</li>
            <li>Login</li>
            <li>Sign Up</li>
          </ul>
        </div>

        {/* CUSTOMER AREA */}
        <div className="footer-links">
          <h4>Customer Area</h4>
          <ul>
            <li>My Account</li>
            <li>Orders</li>
            <li>Tracking List</li>
            <li>Terms</li>
            <li>Privacy Policy</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* MINI NEWSLETTER */}
        <div className="footer-mini">
          <h4>Don't miss the newest books</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>

          <div className="mini-form">
            <input type="email" placeholder="Type your email here" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    
    {/* ================= FOOTER COPYRIGHT SECTION ================= */}
<div className="footer-bottom">
  <span>© 2020 Clevr. All rights reserved</span>
  <span>
    Made with <span className="heart">❤</span> by Nisha
  </span>
</div>

    </footer>
  );
}

export default Footer;
