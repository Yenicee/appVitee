import './App.css';
import Header from './header';
import logoImg from './img/logo.png';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import ProductDetails from './pages/product-details/productDetails';
import Slider from './slider';
import { CartProvider } from './context/cart-context';
import Cart from './header/cart';

function App() {
  return (
    <div>
      <CartProvider>
        <Header logoImg={logoImg} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path='/category' element={<Slider />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;