import React from "react";
import Carousel from "./components/Carousel";
import DigitalSection from "./components/DigitalSection";
import FashionSection from "./components/FashionSection";
import Footer from "./components/Footer";
import JewelrySection from "./components/JewelrySection";
import Nav from "./components/Nav";

export default function MainPage(props) {
  return (
    <>
      <Nav />
      <Carousel />
      <FashionSection title={"패션"} />
      <JewelrySection title={"악세서리"} />
      <DigitalSection title={"디지털"} />
      <Footer />
    </>
  );
}
