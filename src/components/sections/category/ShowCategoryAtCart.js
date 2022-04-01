import React, { useEffect, useState } from 'react';
import axiosApi from '../../../service/axiosApi';
import CategoryItem from './CategoryItem';
import { connect } from 'react-redux';

const ShowCategory = () => {
  const [listOfCategories, setListOfCategories] = useState([]);

  const getCategories = async () => {
    const categories = await axiosApi.get('./categories');

    setListOfCategories(categories.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  if (!listOfCategories.length > 0) {
    return (
      <div className='dropdown-menu cart-list s-cate fadeOutUp'>
        No data Found...
      </div>
    );
  }
  return (
    <ul className='dropdown-menu cart-list s-cate'>
      <CategoryItem listOfCategories={listOfCategories} />
    </ul>
  );
};

export default connect()(ShowCategory);
