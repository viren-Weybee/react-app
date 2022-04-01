import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();

  const getSearchResult = () => {
    navigate(`/product/list/${term}`);
  };
  return (
    <div className='top-search'>
      <div className='container'>
        <div className='input-group'>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            onKeyUp={(e) => e.key === 'Enter' && getSearchResult()}
            type='text'
            className='form-control'
            placeholder='Search'
          />
          <span className='input-group-addon' onClick={() => getSearchResult()}>
            <i className='fa fa-search'></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
