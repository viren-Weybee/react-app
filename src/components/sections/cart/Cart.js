import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axiosApi from '../../../service/axiosApi';

const Cart = (props) => {
  const [productLists, setProductList] = useState([]);

  const addProductToProductList = async () => {
    if (props.product_id) {
      const response = await axiosApi.get(`/products/${props.product_id}`);
      setProductList([
        ...productLists,
        { ...response.data, current_quantity: 1 },
      ]);
    }
  };

  const removeFromCart = (product_id) => {
    const filteredCartProduct = productLists.filter(
      (product) => product.id !== product_id
    );
    setProductList(filteredCartProduct);
  };

  const manageQuantity = (add, maxQuantity, index) => {
    let currentQuantity = productLists[index].current_quantity;
    if (add) {
      if (currentQuantity === maxQuantity) return;
      currentQuantity += 1;
    } else {
      if (currentQuantity === 1) return;
      currentQuantity -= 1;
    }
    productLists[index].current_quantity = currentQuantity;
    setProductList([...productLists]);
  };

  useEffect(() => {
    addProductToProductList();
  }, [props.product_id]);

  const getTotalPriceOfProducts = () => {
    let total = 0;
    productLists.forEach(
      (product) => (total += product.price * product.current_quantity)
    );
    return total;
  };

  const renderList = (product, index) => {
    return (
      <li key={product.id} className='single-cart-list'>
        <a href='#' className='photo'>
          <img src={product.img_url} className='cart-thumb' alt='image' />
        </a>
        <div className='cart-list-txt'>
          <h6>
            <a href='#'>{product.name}</a>
          </h6>
          <p>
            {product.current_quantity} x{' '}
            <span className='price'>{product.price}</span>
            <i
              style={{ marginRight: '10px', marginLeft: '10px' }}
              className='fa fa-plus-circle'
              onClick={() => {
                manageQuantity(true, product.available_qty, index);
              }}
            ></i>
            <i
              className='fa fa-minus-circle'
              onClick={() => {
                manageQuantity(false, product.available_qty, index);
              }}
            ></i>
          </p>
        </div>
        <div className='cart-close'>
          <span
            className='lnr lnr-cross'
            onClick={() => removeFromCart(product.id)}
          ></span>
        </div>
      </li>
    );
  };

  return (
    <>
      <a href='#' className='dropdown-toggle' data-toggle='dropdown'>
        <span className='lnr lnr-cart'></span>
        <span className='badge badge-bg-1'>
          {productLists.length !== 0 ? productLists.length : ''}
        </span>
      </a>
      <ul className='dropdown-menu cart-list s-cate'>
        {productLists.map((product, index) => renderList(product, index))}

        <li className='total'>
          {productLists.length !== 0 ? (
            <span>Total: ${getTotalPriceOfProducts()}</span>
          ) : (
            <span>No item in Cart</span>
          )}
        </li>
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Cart);
