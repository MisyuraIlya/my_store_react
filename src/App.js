
import './App.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from './pages/Home';
import Manufacturers from './pages/Manufacturers';
import Categories from './pages/Categories';
import Products from './pages/Products';
import { ManufacturerProvider } from './states/ManufacturerProvider';
import { ProductsProvider } from './states/ProductsProvider';
import Navbar from './components/Navbar';
function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <ManufacturerProvider>
          <ProductsProvider>
          <Navbar/> 
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/manufacturers" element={<Manufacturers />}/>
              <Route path="/products/:id" element={<Products />}/>
              <Route path="/categories" element={<Categories />}/>
            </Routes>
          </ProductsProvider>
        </ManufacturerProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
