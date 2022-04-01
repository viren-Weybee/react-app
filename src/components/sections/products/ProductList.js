import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosApi from '../../../service/axiosApi';
import ProdutListCards from './ProdutListCards';

const ProductList = () => {
  const { term } = useParams();
  const [productLists, setProductList] = useState([]);
  const [categoryLists, setCategoryLists] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const loadProducts = async () => {
    try {
      let response = await axiosApi.get('/products');

      if (term) {
        console.log('in term');
        response.data = response.data.filter((product) =>
          product.name.toLowerCase().includes(term.toLowerCase())
        );
        console.log(response.data.length);
      }
      setProductList(response.data);
      response = await axiosApi.get('/categories');
      setCategoryLists(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    loadProducts();
    setIsLoading(false);
  }, [term]);

  if (isLoading) {
    return (
      <div className='load'>
        <div className='load-one'></div>
        <div className='load-two'></div>
        <div className='load-three'></div>
      </div>
    );
  }

  const getNumberOfProductsByCategory = (id) => {
    let counter = productLists.filter((product) => product.category_id === id);

    return counter.length;
  };

  const setCategoryThatIsClicked = (id) => {
    const addOrNotInSelectedCategory = selectedCategory.find(
      (cat) => cat.id === id
    );
    if (addOrNotInSelectedCategory && addOrNotInSelectedCategory.isSelected) {
      const filteredCategory = selectedCategory.filter(
        (cat) => cat.id !== addOrNotInSelectedCategory.id
      );
      setSelectedCategory([...filteredCategory]);
    } else {
      setSelectedCategory([
        ...selectedCategory,
        {
          id,
          isSelected: true,
        },
      ]);
    }
  };

  const isSelectedCategory = (id) => {
    const filteredSelected = selectedCategory.find((cat) => cat.id === id);
    return filteredSelected && filteredSelected.isSelected;
  };

  const renderProductCard = () => {
    let filterOrNot;
    if (!selectedCategory.length > 0) {
      return productLists.map((product) => (
        <ProdutListCards key={product.id} product={product} />
      ));
    }

    return productLists.map((product) => {
      filterOrNot = selectedCategory.find(
        (cat) => cat.id === product.category_id
      );

      return (
        filterOrNot && <ProdutListCards key={product.id} product={product} />
      );
    });
  };

  if (!productLists.length > 0) {
    return <div className='section-header'>No data Found...</div>;
  }

  return (
    <>
      <section id='feature' className='feature'>
        <div className='container'>
          <div className='section-header'>
            <h2>products</h2>
          </div>
          <div className='tagcloud03 my-5'>
            <ul>
              {categoryLists.map((cat) => {
                const noOfProductByCategory = getNumberOfProductsByCategory(
                  cat.id
                );

                return (
                  <li key={cat.id}>
                    <p
                      className={isSelectedCategory(cat.id) ? 'selected' : ''}
                      onClick={() =>
                        noOfProductByCategory !== 0
                          ? setCategoryThatIsClicked(cat.id)
                          : ''
                      }
                    >
                      {cat.name}
                      <span
                        className={isSelectedCategory(cat.id) ? 'selected' : ''}
                      >
                        {noOfProductByCategory}
                      </span>
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='feature-content'>
            <div className='row'>{renderProductCard()}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;
