import React from 'react';
import { useNavigate } from 'react-router-dom';

const Slider = (props) => {
  const { category, dataSlide } = props;
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/category/detail/${category.id}`);
  };

  return (
    <div className={`item welcome-hero ${dataSlide === 0 ? 'active' : ''} `}>
      <div className={`single-slide-item slide${category.id}`}>
        <div className='container'>
          <div className='welcome-hero-content'>
            <div className='row'>
              <div className='col-sm-7'>
                <div className='single-welcome-hero'>
                  <div className='welcome-hero-txt'>
                    <h4>{category.code}</h4>
                    <h2>{category.name}</h2>
                    <p>
                      {category.description}
                      Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit,
                      Sed Do Eiuiana Smod Tempor Ut Labore Et Dolore Magna
                      Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation
                      Ullamco Laboris Nisi Ut Aliquip.
                    </p>

                    {!props.buttonHide ? (
                      <button
                        onClick={() => handleClick(category)}
                        className='btn-cart welcome-add-cart welcome-more-info'
                      >
                        more info
                      </button>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
              <div className='col-sm-5'>
                <div className='single-welcome-hero'>
                  <div className='welcome-hero-img'>
                    <img src={category.img_url} alt='slider image' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
