import { Routes, Route } from 'react-router-dom';
import MainSections from './sections/MainSections';
import AddCategory from './form/AddCategory';
import Carousel from './header/Carousel';

import ShowCategoryTable from './sections/category/ShowCategoryTable';
import AddProduct from './form/AddProduct';
import ShowProductTable from './sections/products/ShowProductTable';
import DetailPageOfProduct from './sections/products/DetailPageOfProduct';
import ProductList from './sections/products/ProductList';
import CategoryLists from './sections/category/CategoryLists';
import DetailPageOfCategory from './sections/category/DetailPageOfCategory';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={[
          <Carousel key={'carousel'} />,
          <MainSections key={'mainsection'} />,
        ]}
      />
      <Route path='/category/show' element={<ShowCategoryTable />} />

      <Route path='/category/store' element={<AddCategory />} />

      <Route path='/category/detail/:id' element={<DetailPageOfCategory />} />

      <Route path='/category/list' element={<CategoryLists />} />

      <Route path='/product/store' element={<AddProduct />} />

      <Route path='/product/list' element={<ProductList />} />

      <Route path='/product/list/:term' element={<ProductList />} />

      <Route path='/product/detail/:id' element={<DetailPageOfProduct />} />

      <Route path='/product/show' element={<ShowProductTable />} />
    </Routes>
  );
}

export default App;
