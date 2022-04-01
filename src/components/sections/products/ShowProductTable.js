import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axiosApi from '../../../service/axiosApi';

const ShowProduct = () => {
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

  const [listOfProducts, setListOfProducts] = useState([]);
  const [category, setCategory] = useState([{ name: '', id: '' }]);
  const [product, setProduct] = useState({ ...initialProduct });
  const navigate = useNavigate();

  const getProducts = async () => {
    let response = await axiosApi.get('./products');
    setListOfProducts(response.data);
    response = await axiosApi.get('./categories');
    setCategory(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleDelete = async (id) => {
    console.log(id);
    await axiosApi.delete(`./products/${id}`);

    getProducts();
  };

  const editProductApi = () => {
    return axiosApi.put(`/products/${product.id}`, {
      ...product,
    });
  };

  const handleSubmit = async () => {
    await editProductApi();
    getProducts();
  };
  const handleEdit = async (product) => {
    setProduct({
      ...product,
    });
  };

  if (!listOfProducts.length > 0) {
    return <div>No data Found...</div>;
  }

  const addProduct = () => {
    navigate('/product/store');
  };

  const renderProduct = (product) => {
    return (
      <tr key={product.id}>
        <td className=''>{product.name}</td>
        <td className='align-self-center'>{product.img_url}</td>
        <td className='align-self-center'>{product.category_id}</td>
        <td className='align-self-center'>{product.sku}</td>
        <td className='align-self-center'>{product.status}</td>
        <td className='align-self-center'>{product.available_qty}</td>
        <td className='align-self-center'>{product.price}</td>
        <td className='align-self-center'>{product.rating}</td>
        <td className='align-self-center'>{product.description}</td>
        <td className='align-self-center'>
          <i
            onClick={() => handleDelete(product.id)}
            className='fa fa-trash'
            aria-hidden='true'
            style={{ marginRight: '5px' }}
          ></i>
        </td>
        <td>
          <i
            onClick={() => handleEdit(product)}
            className='fa fa-pencil-square-o'
            data-toggle='modal'
            data-target='#myModal'
            aria-hidden='true'
          ></i>
        </td>
      </tr>
    );
  };

  return (
    <div>
      <div id='myModal' className='modal fade' role='dialog'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button type='button' className='close' data-dismiss='modal'>
                &times;
              </button>
              <h4 className='modal-title'>Modal Header</h4>
            </div>
            <div className='modal-body'>
              <form className='form-group  '>
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
                            status: `${
                              e.target.checked ? 'Active' : 'Inactive'
                            }`,
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
                <button
                  data-dismiss='modal'
                  onClick={() => {
                    handleSubmit();
                  }}
                  type='button'
                  className='btn btn-default'
                >
                  Submit
                </button>
              </form>
            </div>
            <div className='modal-footer'>
              <button
                data-dismiss='modal'
                type='button'
                className='btn btn-default'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <h2 className='text-center' style={{ marginBlock: '30px' }}>
          Product table
        </h2>
        <div className='text-right'>
          <button
            className='btn-cart welcome-add-cart animated fadeInDown'
            onClick={() => addProduct()}
            style={{ opacity: 0 }}
          >
            <span className='lnr lnr-plus-circle'></span>
            add <span>to</span> Product
          </button>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>image url</th>
              <th>Category Name</th>
              <th>Sku</th>
              <th>status</th>
              <th>available_qty</th>
              <th>price</th>
              <th>rating</th>
              <th>description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {listOfProducts.map((product) => {
              return renderProduct(product);
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowProduct;
