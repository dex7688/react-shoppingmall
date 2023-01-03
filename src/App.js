import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import FashionPage from './pages/FashionPage/FashionPage';
import DigitalPage from './pages/DigitalPage/DigitalPage';
import JewerlyPage from './pages/JewelryPage/JewelryPage';
import ItemPage from './pages/ItemPage/ItemPage';
import CartPage from '../src/pages/CartPage/CartPage';
import store from './redux/store';
import { Provider } from 'react-redux';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
// basename={process.env.PUBLIC_URL}
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path='/' element={<MainPage />} />
          <Route path='/fashion' element={<FashionPage />} />
          <Route path='/accessory' element={<JewerlyPage />} />
          <Route path='/digital' element={<DigitalPage />} />
          <Route path='/products/:docId' element={<ItemPage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
