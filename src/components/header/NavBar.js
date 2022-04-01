import React from 'react';
import { NavLink } from 'react-router-dom';
import Cart from '../sections/cart/Cart';
import ShowCategoryAtCart from '../sections/category/ShowCategoryAtCart';
import SearchBar from '../sections/searchbar/SearchBar';

const NavBar = () => {
  return (
    <div className='top-area ' style={{ height: '110px' }}>
      <div className='header-area '>
        <nav
          className='navbar  navbar-default bootsnav  navbar-sticky navbar-scrollspy'
          data-minus-value-desktop='70'
          data-minus-value-mobile='55'
          data-speed='1000'
        >
          <SearchBar />

          <div className='container'>
            <div className='attr-nav'>
              <ul>
                <li className='search'>
                  <a href='#'>
                    <span className='lnr lnr-magnifier'></span>
                  </a>
                </li>
                <li className='nav-setting'>
                  <a href='#'>
                    <span className='lnr lnr-cog'></span>
                  </a>
                </li>
                <li className='dropdown'>
                  <Cart />
                </li>
              </ul>
            </div>

            <div className='navbar-header'>
              <button
                type='button'
                className='navbar-toggle'
                data-toggle='collapse'
                data-target='#navbar-menu'
              >
                <i className='fa fa-bars'></i>
              </button>
              <a className='navbar-brand' href='index.html'>
                sine<span>mkt</span>.
              </a>
            </div>

            <div
              className='collapse navbar-collapse menu-ui-design '
              id='navbar-menu'
            >
              <ul
                className='nav navbar-nav navbar-center '
                data-in='fadeInDown'
                data-out='fadeOutUp'
              >
                <li>
                  <NavLink to='/' activeclassname='active'>
                    home
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/product/list'>Products</NavLink>
                </li>

                <li>
                  <NavLink to='/product/show'>Product Table</NavLink>
                </li>

                <li className='dropdown'>
                  <NavLink to='/category/show' activeclassname='active'>
                    categories Table
                  </NavLink>
                  <ShowCategoryAtCart />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className='clearfix'></div>
    </div>
  );
};

export default NavBar;
