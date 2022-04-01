import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import axiosApi from '../../../service/axiosApi';
import { addToCartAction } from '../../../redux/actions/addToCartAction';

const DetailPageOfProduct = (props) => {
  const { id } = useParams();
  console.log(props);
  const [product, setProducts] = useState({
    id: '',
    name: '',
    img_url: '',
    price: 0,
    description: '',
  });

  const setProductDetails = async () => {
    const response = await axiosApi.get(`/products/${id}`);
    setProducts(response.data);
  };
  useEffect(() => {
    setProductDetails();
  }, [id]);

  const addToCartClicked = (product_id) => {
    console.log('clicked');
    props.addToCartAction(product_id);
  };

  return (
    <>
      <div className='container my-5'>
        <div className='populer-products-content'>
          <div className='row align-item-center justify-content-center '>
            <div className='col-md-6'>
              <div className='single-populer-products'>
                <div className='single-inner-populer-products'>
                  <div className='row'>
                    <div className='col-md-4 col-sm-12'>
                      <div className='single-inner-populer-product-img'>
                        <img
                          src={product.img_url}
                          alt='populer-products images'
                        />
                      </div>
                    </div>
                    <div className='col-md-8 col-sm-12'>
                      <div className='single-inner-populer-product-txt'>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <div className='populer-products-price'>
                          <h4>
                            Sales Start from <span>${product.price}</span>
                          </h4>
                        </div>
                        <button
                          onClick={() => {
                            addToCartClicked(product.id);
                          }}
                          className='btn-cart welcome-add-cart populer-products-btn'
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCartAction: (product_id) => {
      dispatch(addToCartAction(product_id));
    },
  };
};

export default connect(null, mapDispatchToProps)(DetailPageOfProduct);
