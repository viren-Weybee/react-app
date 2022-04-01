import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axiosApi from '../../../service/axiosApi';

const ShowCategoryTable = () => {
  // const [isDeleted, setIsDeleted] = useState(false);
  const [listOfCategories, setListOfCategories] = useState([]);
  const [category, setCategory] = useState({
    name: '',
    code: '',
    description: '',
    img_url: '',
    status: 'inactive',
  });
  const navigate = useNavigate();
  const getCategories = async () => {
    try {
      const categories = await axiosApi.get('./categories');
      setListOfCategories(categories.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const loadDataAgain = () => {
    getCategories();
  };

  const handleDelete = async (id) => {
    try {
      await axiosApi.delete(`./categories/${id}`);
      loadDataAgain();
    } catch (error) {
      console.log(error);
    }
  };

  if (!listOfCategories.length > 0) {
    return <div>No data Found...</div>;
  }

  const editCategoryApi = () => {
    return axiosApi.put(`/categories/${category.id}`, {
      ...category,
    });
  };

  const handleSubmit = async () => {
    try {
      await editCategoryApi();
      loadDataAgain();
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = async (category) => {
    setCategory({
      ...category,
    });
  };

  const addCategory = () => {
    navigate('/category/store');
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
                    type={'text'}
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
                    type={'text'}
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
                            status: `${
                              e.target.checked ? 'active' : 'inactive'
                            }`,
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
                <button
                  onClick={() => {
                    handleSubmit();
                  }}
                  data-dismiss='modal'
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
      {/* <div
        className={`alert alert-danger container ${!isDeleted && 'hidden'}`}
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
        <strong>Deleted Succesfully!</strong>
      </div> */}

      <div className='container'>
        <h2 className='text-center' style={{ marginBlock: '30px' }}>
          CategoryTable
        </h2>
        <div className='text-right'>
          <button
            className='btn-cart welcome-add-cart animated fadeInDown'
            onClick={() => addCategory()}
            style={{ opacity: 0 }}
          >
            <span className='lnr lnr-plus-circle'></span>
            add <span>to</span> Category
          </button>
        </div>
        <table className='table' style={{ whiteSpace: 'nowrap' }}>
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Category Code</th>
              <th>Category description</th>
              <th>Category img_url</th>
              <th>status</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {listOfCategories.map((cat) => (
              <tr key={cat.id}>
                <td className=''>{cat.name}</td>
                <td className='align-self-center'>{cat.code}</td>
                <td className='align-self-center'>{cat.description}</td>
                <td className='align-self-center'>{cat.img_url}</td>
                <td className='align-self-center'>{cat.status}</td>
                <td style={{ cursor: 'pointer', paddingBlock: '20px' }}>
                  <i
                    onClick={() => handleDelete(cat.id)}
                    className='fa fa-trash'
                    aria-hidden='true'
                    style={{ marginRight: '5px' }}
                  ></i>
                </td>
                <td style={{ cursor: 'pointer', paddingBlock: '20px' }}>
                  <i
                    onClick={() => handleEdit(cat)}
                    className='fa fa-pencil-square-o'
                    data-toggle='modal'
                    data-target='#myModal'
                    aria-hidden='true'
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowCategoryTable;
