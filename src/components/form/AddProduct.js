import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosApi from '../../service/axiosApi';

const AddProduct = () => {
  const initialProduct = {
    name: ' ',
    sku: '',
    img_url: '',
    price: 0,
    rating: 0,
    category_id: 0,
    status: 'InActive',
    description: '',
    available_qty: 0,
  };

  const [product, setProduct] = useState({ ...initialProduct });
  const [category, setCategory] = useState([{ name: '', id: '' }]);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const getCategory = async () => {
    const categories = await axiosApi.get('/categories');
    setCategory(categories.data);
  };

  useEffect(() => {
    getCategory();
  }, []);

  const sentApiRequest = () => {
    console.log(product);
    return axiosApi.post('./products', {
      ...product,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await sentApiRequest();

    console.log(response.status);
    if (response.status === 201) {
      setSuccess(!success);
      console.log(initialProduct);
      setProduct({ ...initialProduct });
      setSuccess(!success);
      navigate('/product/show');
    } else {
      alert('not success');
      return;
    }
  };

  return (
    <div>
      <div
        className={`alert alert-success container ${!success ? 'hidden' : ''}`}
        role='alert'
        style={{ marginTop: '50px' }}
      >
        <button
          type='button'
          className='close'
          data-dismiss='alert'
          aria-label='Close'
        >
          <span aria-hidden='true'>&times;</span>
        </button>
        <strong>Added Succesfully!</strong>
      </div>
      <div
        className='container form-bg'
        style={{ marginTop: '50px', marginBottom: '50px' }}
      >
        <form onSubmit={(e) => handleSubmit(e)} className='form-group  '>
          <div className='form-group'>
            <label>Product Name:</label>
            <input
              value={product.name}
              onChange={(e) =>
                setProduct({
                  ...product,
                  name: e.target.value,
                })
              }
              className='form-control'
              type='text'
            />
          </div>
          <div className='form-group'>
            <label>sku :</label>
            <input
              required
              value={product.sku}
              onChange={(e) =>
                setProduct({
                  ...product,
                  sku: Number(e.target.value),
                })
              }
              className='form-control'
              type='number'
            />
          </div>
          <div className='form-group'>
            <label>image :</label>
            <input
              required
              value={product.img_url}
              onChange={(e) =>
                setProduct({
                  ...product,
                  img_url: e.target.value,
                })
              }
              className='form-control'
              type='text'
            />
          </div>
          <div className='form-group'>
            <label>price :</label>
            <input
              required
              value={product.price}
              onChange={(e) =>
                setProduct({
                  ...product,
                  price: Number(e.target.value),
                })
              }
              className='form-control'
              type='number'
            />
          </div>
          <div className='form-group'>
            <label>rating :</label>
            <input
              value={product.rating}
              onChange={(e) =>
                setProduct({
                  ...product,
                  rating: Number(e.target.value),
                })
              }
              className='form-control'
              type='number'
            />
          </div>
          <div className='form-group'>
            <label>category :</label>
            <select
              value={product.category_id}
              onChange={(e) =>
                setProduct({
                  ...product,
                  category_id: Number(e.target.value),
                })
              }
              className='form-control'
            >
              <option key='select category' value={0}>
                select category
              </option>

              {category.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          <div className='form-group'>
            <div className='form-check'>
              <label className='form-check-label ml-5'>
                <input
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      status: `${e.target.checked ? 'Active' : 'Inactive'}`,
                    })
                  }
                  className={'form-check-input'}
                  type='checkbox'
                  id='gridCheck'
                  style={{ marginRight: '10px' }}
                  checked={product.status === 'Active'}
                />
                status
              </label>
            </div>
          </div>
          <div className='form-group'>
            <label>description :</label>
            <input
              value={product.description}
              onChange={(e) =>
                setProduct({
                  ...product,
                  description: e.target.value,
                })
              }
              className='form-control'
              type='text'
            />
          </div>
          <div className='form-group'>
            <label>available_qty :</label>
            <input
              value={product.available_qty}
              onChange={(e) =>
                setProduct({
                  ...product,
                  available_qty: Number(e.target.value),
                })
              }
              className='form-control'
              type='number'
            />
          </div>
          <button type='submit' className='btn btn-cart'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
