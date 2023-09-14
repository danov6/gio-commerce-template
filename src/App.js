import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Category } from './pages/Category';
import { Product } from './pages/Product';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';

function App() {
  return (
  <Routes>
    <Route exact path="/" element={<Home />}/>
    <Route path="/category" element={<Category />}/>
    <Route path="/product" element={<Product />}/>
    <Route path="/cart" element={<Cart />}/>
    <Route path="/checkout" element={<Checkout />}/>
  </Routes>
  );
}

export default App;
