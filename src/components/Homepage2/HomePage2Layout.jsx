// 🔹 Homepage-2 layout
// 🔹 Reuses Header, Footer, Features, TopRated from HomePage1

import Header from "../HomePage1/Header/Header";
import Footer from "../HomePage1/Footer/Footer";

import Features from "../HomePage1/Features/Features";
import TopRated from "../HomePage1/TopRated/TopRated";
import BestSellers from "../HomePage1/BestSellers/BestSellers";
import FlashSale from "../HomePage1/FlashSale/FlashSale";
import Freatured from "../HomePage1/Featured/Featured";
import LatestNews from "../HomePage1/LatestNews/LatestNews";
import Testimonials from "../HomePage1/Testimonials/Testimonials";


import MenuNav from "./MenuNav/MenuNav";
import Hero from "./Hero/Hero";
import TrendingWeek from "./TrendingWeek/TrendingWeek";


function HomePage2Layout() {
  return (
    <>
      <Header />
      <MenuNav />
      <Hero />

      {/* 🔁 reused from homepage1 */}
      <Features />

      {/* 🔥 new custom design for homepage2 */}
      <TrendingWeek />

      {/* 🔁 reused from homepage1 */}
      <TopRated />
      <BestSellers />
      <FlashSale />
      <Freatured />
      <LatestNews />
      <Testimonials />

      <Footer />
    </>
  );
}

export default HomePage2Layout;
