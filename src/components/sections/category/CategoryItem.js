import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryItem = (props) => {
  const navigate = useNavigate();
  const handleClick = (category) => {
    console.log('itis clicked');
    navigate(`/category/detail/${category.id}`);
  };
  return props.listOfCategories.map((cat) => (
    <li
      key={cat.id}
      style={{ cursor: 'pointer' }}
      className='single-cart-list'
      onClick={() => handleClick(cat)}
    >
      {cat.name}
    </li>
  ));
};

export default CategoryItem;
