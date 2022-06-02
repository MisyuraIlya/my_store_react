
import './App.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from './pages/Home';
import Manufacturers from './pages/Manufacturers';
import Categories from './pages/Categories';


function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/manufacturers" element={<Manufacturers />}/>
          <Route path="/categories" element={<Categories />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
