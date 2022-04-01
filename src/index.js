import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/Footer';
import App from './components/App';
import Header from './components/header/Header';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import cartReducer from './redux/reducers/cartReducer';

const store = createStore(cartReducer);

// import AddCategory from './Components/Form/AddCategory';
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <App />
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
