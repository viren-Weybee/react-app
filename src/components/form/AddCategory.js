import React, { useState } from 'react';
import axiosApi from '../../service/axiosApi';
import { useNavigate } from 'react-router-dom';

const AddCategory = () => {
  const navigate = useNavigate();
  const initalState = {
    name: '',
    code: '',
    description: '',
    img_url: '',
    status: 'inactive',
  };
  const [category, setCategory] = useState({
    ...initalState,
  });

  const sentApiRequest = () => {
    return axiosApi.post('./categories', {
      ...category,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resposne = await sentApiRequest();

    if (resposne.status === 201) {
      setCategory({
        ...initalState,
      });
      navigate('/category/show');
    } else {
      alert('not success');
      return;
    }
  };

  return (
    <div>
      <div
        className='alert alert-success container hidden'
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
            <label>Category Name:</label>
            <input
              value={category.name}
              onChange={(e) =>
                setCategory({
                  ...category,
                  name: e.target.value,
                })
              }
              className='form-control'
              type='text'
            />
          </div>
          <div className='form-group'>
            <label>Category Code:</label>
            <input
              value={category.code}
              onChange={(e) =>
                setCategory({
                  ...category,
                  code: e.target.value,
                })
              }
              className='form-control'
              type='text'
            />
          </div>
          <div className='form-group'>
            <label>Category description:</label>
            <input
              value={category.description}
              onChange={(e) =>
                setCategory({
                  ...category,
                  description: e.target.value,
                })
              }
              className='form-control'
              type='text'
            />
          </div>
          <div className='form-group'>
            <label>Category image:</label>
            <input
              value={category.img_url}
              onChange={(e) =>
                setCategory({
                  ...category,
                  img_url: e.target.value,
                })
              }
              className='form-control'
              type='text'
            />
          </div>
          <div className='form-group'>
            <div className='form-check'>
              <label className='form-check-label ml-5'>
                <input
                  onChange={(e) =>
                    setCategory({
                      ...category,
                      status: `${e.target.checked ? 'active' : 'inactive'}`,
                    })
                  }
                  className={
                    category.status === 'active'
                      ? 'checked form-check-input '
                      : 'form-check-input'
                  }
                  type='checkbox'
                  id='gridCheck'
                  style={{ marginRight: '10px' }}
                  checked={category.status === 'active'}
                />
                status
              </label>
            </div>
          </div>
          <button type='submit' className='btn btn-cart'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
