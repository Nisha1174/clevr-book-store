import Header from "../HomePage1/Header/Header";
import Footer from "../HomePage1/Footer/Footer";

import Breadcrumb from "./Breadcrumb/Breadcrumb";
import Filters from "./Filters/Filters";
import BooksGrid from "./Grid/BooksGrid";
import MaybeLike from "./MaybeLike/MaybeLike";

import "./BookGridLayout.css";

function BookGridLayout() {
  return (
    <>
      <Header />

      <Breadcrumb />

      {/* MAIN TWO COLUMN LAYOUT */}
      <section className="books-layout">
        <aside className="books-filter">
          <Filters />
        </aside>

        <main className="books-content">
          <BooksGrid />
        </main>
      </section>

      <MaybeLike />

      <Footer />
    </>
  );
}

export default BookGridLayout;
