import './App.css';
import Header from './header';
import logoImg from './img/logo.png';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import ProductDetails from './pages/product-details/productDetails';



function App() {
  return (
      <div>
          <Header logoImg={logoImg} />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/product/:productId" element={<ProductDetails />} />

          </Routes>
      </div>
  );
}

export default App;