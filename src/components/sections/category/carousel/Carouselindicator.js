import React from 'react';

const Carouselindicator = ({ listOfCategories }) => {
  return (
    <ol className='carousel-indicators'>
      {listOfCategories &&
        listOfCategories.map((category, i) => (
          <li
            key={category.id}
            data-target='#header-carousel'
            data-slide-to={i}
            className={`${i == 0 && 'active'}`}
          >
            <span className='small-circle'></span>
          </li>
        ))}
    </ol>
  );
};

export default Carouselindicator;
