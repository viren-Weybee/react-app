import React from 'react';
import { useNavigate } from 'react-router-dom';

const FeatureProductCard = (props) => {
  const { product, index } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/detail/${product.id}`);
  };

  return (
    <div className='col-sm-3' key={product.id}>
      <div className='single-feature' onClick={() => handleClick()}>
        <img src={`assets/images/features/f${index}.jpg`} alt='feature image' />
        <div className='single-feature-txt text-center'>
          <p>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            <i className='fa fa-star'></i>
            <span className='spacial-feature-icon'>
              <i className='fa fa-star'></i>
            </span>
            <span className='feature-review'>(45 review)</span>
          </p>
          <h3>
            <a href='#'>{product.name}</a>
          </h3>
          <h5>${product.price}</h5>
        </div>
      </div>
    </div>
  );
};

export default FeatureProductCard;
