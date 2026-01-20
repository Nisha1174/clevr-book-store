import "./LatestNews.css";

/* NEWS IMAGES */
import latest1 from "../../../images/latest1.png";
import latest2 from "../../../images/latest2.png";
import latest3 from "../../../images/latest3.png";
import latest4 from "../../../images/latest4.png";

/* AUTHOR ICON */
import authorIcon from "../../../images/authoricon.png";

const newsData = [
  {
    id: 1,
    title: "Why reading is important for our children?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    author: "James Wong",
    time: "2 days ago",
    image: latest1,
  },
  {
    id: 2,
    title: "Benefits of reading: Smart, Diligent, Happy",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "James Wong",
    time: "8 August 2020",
    image: latest2,
  },
  {
    id: 3,
    title: "What books you should read in 2020?",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    author: "James Wong",
    time: "3 August 2020",
    image: latest3,
  },
  {
    id: 4,
    title: "10 Things you must know to improve your reading skills",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    author: "James Wong",
    time: "1 August 2020",
    image: latest4,
  },
];

function LatestNews() {
  return (
    <section className="latest-news">
      {/* HEADER */}
      <div className="latest-header">
        <h2>Latest News</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* NEWS CARDS */}
      <div className="latest-grid">
        {newsData.map((item) => (
          <div className="news-card" key={item.id}>
            <img src={item.image} alt={item.title} />

            <h4>{item.title}</h4>
            <p className="news-desc">{item.description}</p>

            {/* AUTHOR INFO (ICON + NAME + TIME) */}
            <div className="news-author">
              <img
                src={authorIcon}
                alt={item.author}
                className="author-icon"
              />
              <div className="author-text">
                <span className="author-name">{item.author}</span>
                <span className="author-time">{item.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="latest-btn">View more →</button>
    </section>
  );
}

export default LatestNews;
