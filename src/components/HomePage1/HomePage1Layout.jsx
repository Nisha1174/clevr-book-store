// 🔹 This is NOT a new component logic
// 🔹 It only GROUPS existing sections so routing can work

import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Trending from "./Trending/Trending";
import Features from "./Features/Features";
import BestSellers from "./BestSellers/BestSellers";
import Categories from "./Categories/Categories";
import TopRated from "./TopRated/TopRated";
import Featured from "./Featured/Featured";
import FlashSale from "./FlashSale/FlashSale";
import LatestNews from "./LatestNews/LatestNews";
import Testimonials from "./Testimonials/Testimonials";
import Footer from "./Footer/Footer";

function HomePage1Layout() {
  return (
    <>
      <Header />
      <Hero />
      <Trending />
      <Features />
      <BestSellers />
      <Categories />
      <TopRated />
      <Featured />
      <FlashSale />
      <LatestNews />
      <Testimonials />
      <Footer />
    </>
  );
}

export default HomePage1Layout;
