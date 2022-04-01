import React, { useEffect, useState } from 'react';
import axiosApi from '../../service/axiosApi';
import Carouselindicator from '../sections/category/carousel/Carouselindicator';
import CarouselSlider from '../sections/category/carousel/CarouselSlider';

const Carousel = () => {
  const [listOfCategories, setListOfCategories] = useState([]);

  const getCategories = async () => {
    const categories = await axiosApi.get('./categories');

    setListOfCategories(categories.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div
      id='header-carousel'
      className='carousel slide carousel-fade '
      data-ride='carousel'
    >
      <Carouselindicator listOfCategories={listOfCategories} />

      <CarouselSlider listOfCategories={listOfCategories} />
    </div>
  );
};

export default Carousel;
