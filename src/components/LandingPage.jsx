import Banner from "./Banner";
import Blog from "./Blog";
import Commitment from "./Commitment";
import ContactUs from "./ContactUs";
import Headline from "./Headline";
import Marquee from "./Marquee";

import Logos from "./Logos";
import PriceCard from "./PriceCard";
import Review from "./Review";
import Slides from "./Slides";
import Statistics from "./Statistics";

export default function LandingPage() {
  return (
    <>
      <div className="hero-section">
        <Headline />
        <Banner />
      </div>
      <Statistics />
      <Slides />
      <Commitment />
      <PriceCard />
      <Review />
      <ContactUs />
      <Blog />
      <Marquee />
      <Logos />
    </>
  );
}
