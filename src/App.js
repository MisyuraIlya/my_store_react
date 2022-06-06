
import './App.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from './pages/Home';
import Manufacturers from './pages/Manufacturers';
import Categories from './pages/Categories';
import ManufacturerProduct from './pages/ManufacturerProduct';
import CategoriesProduct from './pages/CategoriesProduct';
import { ManufacturerProvider } from './states/ManufacturerProvider';
import { ProductsProvider } from './states/ProductsProvider';
import { CategoriesProvider } from './states/CategoriesProvider';
import HeaderNav from './components/HeaderNav';
import Registration from './pages/Registration';
function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <ManufacturerProvider>
          <ProductsProvider>
            <CategoriesProvider>
            <HeaderNav/> 
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/manufacturers" element={<Manufacturers />}/>
                <Route path="/manufacturer/:id" element={<ManufacturerProduct />}/>
                <Route path="/categories/:id" element={<CategoriesProduct />}/>
                <Route path="/categories" element={<Categories />}/>
                <Route path="/registration" element={<Registration />}/>
              </Routes>
            </CategoriesProvider>
          </ProductsProvider>
        </ManufacturerProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
