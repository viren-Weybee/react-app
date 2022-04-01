import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = (props) => {
  const navigate = useNavigate();
  const { product } = props;

  const handleClick = (product) => {
    navigate(`/product/detail/${product.id}`);
  };

  return (
    <div className='col-md-3 col-sm-4'>
      <div className='single-new-arrival'>
        <div
          className='single-new-arrival-bg'
          onClick={() => {
            handleClick(product);
          }}
        >
          <img src={product.img_url} alt='new-arrivals images' />
          <div className='single-new-arrival-bg-overlay'></div>
          <div className='sale bg-1'>
            <p>sale</p>
          </div>
          <div className='new-arrival-cart'>
            <p>
              <span className='lnr lnr-cart'></span>
              <a href='#'>
                add <span>to </span> cart
              </a>
            </p>
            <p className='arrival-review pull-right'>
              <span className='lnr lnr-heart'></span>
              <span className='lnr lnr-frame-expand'></span>
            </p>
          </div>
        </div>
        <h4>
          <a href='#'>{product.name}</a>
        </h4>
        <p className='arrival-product-price'>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
