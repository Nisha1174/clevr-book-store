import "./Testimonials.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

/* PROFILE IMAGES */
import user1 from "../../../images/authoricon.png";
import user2 from "../../../images/authoricon.png";
import user3 from "../../../images/authoricon.png";
import user4 from "../../../images/authoricon.png";

const testimonials = [
  {
    id: 1,
    name: "Steve Henry",
    role: "Book Lovers",
    rating: 4,
    text: "Shopping book in Clevr is very easy. Quick delivery and fast response. Their services is awesome.",
    image: user1,
  },
  {
    id: 2,
    name: "Subashah",
    role: "CEO of Adrinon Store",
    rating: 3,
    text: "Clevr went above and beyond – great and friendly customer services and prompt delivery of my book. Highly recommend them.",
    image: user2,
  },
  {
    id: 3,
    name: "Vicky Wong",
    role: "Sales Marketing",
    rating: 5,
    text: "Excellent service. The books were wrapped securely and arrived in pristine condition. I sent an email after books arrived and asked about the authors.",
    image: user3,
  },
  {
    id: 4,
    name: "Ruby Hering",
    role: "Book Lovers",
    rating: 4,
    text: "This item was not available on Amazon somehow. I located it on the publisher's website. Awesome.",
    image: user4,
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      {/* HEADER */}
      <div className="testimonials-header">
        <h2>Testimonials</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* TESTIMONIAL CARDS */}
      <div className="testimonials-row">
        {testimonials.map((item) => (
          <div key={item.id} className="testimonial-card">

            {/* STARS */}
            <div className="stars">
              {"★".repeat(item.rating)}
              {"☆".repeat(5 - item.rating)}
            </div>

            {/* TEXT */}
            <p className="review">{item.text}</p>

            {/* USER */}
            <div className="user">
              <img src={item.image} alt={item.name} />
              <div>
                <span className="name">{item.name}</span>
                <span className="role">{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* SLIDER BUTTONS */}
      <div className="testimonial-controls">
        <button className="control-btn">
          <HiChevronLeft />
        </button>
        <button className="control-btn active">
          <HiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Testimonials;
