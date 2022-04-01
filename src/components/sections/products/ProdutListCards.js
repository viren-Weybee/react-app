import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCartAction } from '../../../redux/actions/addToCartAction';
const ProdutListCards = (props) => {
  const { product } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/detail/${product.id}`);
  };

  const addToCartClicked = (product_id) => {
    props.addToCartAction(product_id);
  };

  return (
    <div className='col-md-3 col-sm-4'>
      <div className='single-new-arrival'>
        <div className='single-new-arrival-bg'>
          <img src={product.img_url} alt='new-arrivals images' />
          <div
            onClick={() => {
              handleClick(product);
            }}
            className='single-new-arrival-bg-overlay'
          ></div>
          <div className='sale bg-1'>
            <p>sale</p>
          </div>
          <div className='new-arrival-cart'>
            <p onClick={() => addToCartClicked(product.id)}>
              <span className='lnr lnr-cart'></span>
              <button>
                add <span>to </span> cart
              </button>
            </p>
          </div>
        </div>
        <h4>
          <p>{product.name}</p>
        </h4>
        <p className='arrival-product-price'>${product.price}</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCartAction: (product_id) => {
      dispatch(addToCartAction(product_id));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProdutListCards);
