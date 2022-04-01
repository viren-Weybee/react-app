import React, { useEffect, useState } from 'react';
import axiosApi from '../../service/axiosApi';
import FeatureProductCard from './products/FeatureProductCard';

const FeatureProduct = () => {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    let response = await axiosApi.get('/categories');
    const category = response.data.find(
      (category) => category.name === 'Featured Products'
    );
    if (category.id) {
      response = await axiosApi.get('/products');
      const filteredProducts = response.data.filter(
        (res) => res.status === 'Active' && res.category_id === category.id
      );
      setProducts(filteredProducts);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const renderProductCard = (product, index) => {
    return (
      <FeatureProductCard key={product.id} product={product} index={index} />
    );
  };
  return (
    <>
      <section id='feature' className='feature'>
        <div className='container'>
          <div className='section-header'>
            <h2>featured products</h2>
          </div>
          <div className='feature-content'>
            <div className='row'>
              {products.map((product) => renderProductCard(product, 1))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureProduct;
