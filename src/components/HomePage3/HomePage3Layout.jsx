import Header from "./Header/Header";
import Footer from "../HomePage1/Footer/Footer";
import Hero from "./Hero/Hero";
import TrendingWeek3 from "./TrendingWeek3/TrendingWeek3";
import Featured from "../HomePage1/Featured/Featured";
import Features from "../HomePage1/Features/Features";
import BestSellers from "../HomePage1/BestSellers/BestSellers";
import TopRated from "../HomePage1/TopRated/TopRated";
import FlashSale from "../HomePage1/FlashSale/FlashSale";
import LatestNews from "../HomePage1/LatestNews/LatestNews";
import Testimonials from "../HomePage1/Testimonials/Testimonials";


function HomePage3Layout() {
  return (
    <>
      <Header />
      <Hero />
      <TrendingWeek3 />
      <Featured />
      <Features />
      <BestSellers />
      <TopRated />
      <FlashSale />
      <LatestNews />
      <Testimonials />
      <Footer />
    </>
  );
}

export default HomePage3Layout;
