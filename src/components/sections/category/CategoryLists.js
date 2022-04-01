import React, { useEffect, useState } from 'react';

import axiosApi from '../../../service/axiosApi';
import CategoryItem from './CategoryItem';

const CategoryLists = () => {
  const [listOfCategories, setListOfCategories] = useState([]);

  const getCategories = async () => {
    const categories = await axiosApi.get('./categories');

    setListOfCategories(categories.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className='container'>
      <br />
      <div className='section-header'>
        <h3>Category</h3>
      </div>
      <br />
      <ul className='category-list'>
        {<CategoryItem listOfCategories={listOfCategories} />}
      </ul>
      <br />
    </div>
  );
};

export default CategoryLists;
