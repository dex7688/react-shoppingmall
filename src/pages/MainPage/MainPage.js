import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import DigitalSection from '../../components/DigitalSection/DigitalSection';
import FashionSection from '../../components/FashionSection/FashionSection';
import JewelrySection from '../../components/JewelrySection/JewelrySection';

export default function MainPage(props) {
  return (
    <>
      <Carousel />
      <FashionSection title={'패션'} />
      <JewelrySection title={'악세서리'} />
      <DigitalSection title={'디지털'} />
    </>
  );
}
