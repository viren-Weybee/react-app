import React, { useEffect, useState } from 'react';
import axiosApi from '../../service/axiosApi';
import NewArrivalProductCard from './products/NewArrivalProductCard';

const NewArrival = () => {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    let response = await axiosApi.get('/categories');
    const category = response.data.find(
      (category) => category.name === 'New Arrival'
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

  const renderProductCard = (product) => {
    return <NewArrivalProductCard key={product.id} product={product} />;
  };

  return (
    <div>
      <section id='new-arrivals' className='new-arrivals'>
        <div className='container'>
          <div className='section-header'>
            <h2>new arrivals</h2>
          </div>
          <div className='new-arrivals-content'>
            <div className='row'>
              {products.map((product) => renderProductCard(product))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewArrival;
