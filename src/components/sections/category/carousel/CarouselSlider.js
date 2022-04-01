import React from 'react';
import Slider from './Slider';

const CarouselSlider = (porps) => {
  const { listOfCategories, dataSlide } = porps;

  return (
    <div className='carousel-inner' role='listbox'>
      {listOfCategories.map((cat, index) => (
        <Slider key={cat.id} dataSlide={index} category={cat} />
      ))}
    </div>
  );
};

export default CarouselSlider;
