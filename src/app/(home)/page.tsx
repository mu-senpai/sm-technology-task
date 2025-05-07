import Footer from "../components/Footer";
import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import OurBlog from "./components/OurBlog";
import OurProducts from "./components/OurProducts";
import SpecialOffer from "./components/SpecialOffer";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <div>
      <Banner />
      <OurProducts />
      <AboutUs />
      <SpecialOffer />
      <Testimonial />
      <OurBlog />
      <Footer />
    </div>
  );
}