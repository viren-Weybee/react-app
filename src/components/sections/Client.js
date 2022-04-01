import React from 'react';

const Client = () => {
  return (
    <div>
      <section id='clients' className='clients'>
        <div className='container'>
          <div className='owl-carousel owl-theme' id='client'>
            <div className='item'>
              <a href='#'>
                <img src='assets/images/clients/c1.png' alt='brand-image' />
              </a>
            </div>
            <div className='item'>
              <a href='#'>
                <img src='assets/images/clients/c2.png' alt='brand-image' />
              </a>
            </div>
            <div className='item'>
              <a href='#'>
                <img src='assets/images/clients/c3.png' alt='brand-image' />
              </a>
            </div>
            <div className='item'>
              <a href='#'>
                <img src='assets/images/clients/c4.png' alt='brand-image' />
              </a>
            </div>
            <div className='item'>
              <a href='#'>
                <img src='assets/images/clients/c5.png' alt='brand-image' />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Client;
