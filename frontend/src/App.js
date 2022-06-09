import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Confirmation from './components/Confirmation';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Signup from './components/Signup';
import SingleProduct from './components/SingleProduct';

function App() {
  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/:id" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/confirmation/:id" element={<Confirmation />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
