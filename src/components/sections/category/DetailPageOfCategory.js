import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosApi from '../../../service/axiosApi';
import ProdutListCards from '../products/ProdutListCards';
import Slider from './carousel/Slider';

const DetailPageOfCategory = () => {
  const { id } = useParams();

  const [category, setCategory] = useState({
    name: '',
  });

  const [product, setProduct] = useState([]);

  const loadCategoryAndProduct = async () => {
    try {
      let response = await axiosApi.get(`/categories/${id}`);
      setCategory(response.data);

      try {
        response = await axiosApi.get('/products');

        const filteredProducts = response.data.filter(
          (product) =>
            product.category_id === Number(id) && product.status === 'Active'
        );

        setProduct(filteredProducts);
      } catch (error) {
        alert(error);
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    loadCategoryAndProduct();
  }, [id]);

  const getAllProducts = () => {
    if (!product.length > 0) {
      return (
        <div className='section-header my-5'>
          <h2>Data Not Availabel</h2>
        </div>
      );
    }
    return product.map((product) => (
      <ProdutListCards key={product.id} product={product} />
    ));
  };

  return (
    <div className='container'>
      <div className='my-5'>
        <Slider
          buttonHide={true}
          key={category.id}
          dataSlide={category.id}
          category={category}
        />
      </div>

      {getAllProducts()}
    </div>
  );
};

export default DetailPageOfCategory;
