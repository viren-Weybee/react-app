import React from 'react';
import Blog from './Blog';
import Client from './Client';
import FeatureProduct from './FeatureProduct';
import NewArrival from './NewArrival';
import PopularProduct from './PopularProduct';
import SofaCollections from './SofaCollections';

const MainSections = () => {
  return (
    <>
      <PopularProduct />
      <NewArrival />
      <SofaCollections />
      <FeatureProduct />
      <Blog />
      <Client />
    </>
  );
};

export default MainSections;
