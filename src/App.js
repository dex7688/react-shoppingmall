import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import FashionPage from "./FashionPage";
import DigitalPage from "./DigitalPage";
import JewerlyPage from "./JewelryPage";
import ItemPage from "./ItemPage";
import CartPage from "./CartPage";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider
      store={store}
      basename={"http://dex7688.github.io/react-shoppingmall"}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="/fashion" element={<FashionPage />} />
          <Route path={"/products/:docId"} element={<ItemPage />} />

          <Route path="/accessory" element={<JewerlyPage />} />
          <Route path={"/products/:docId"} element={<ItemPage />} />

          <Route path="/digital" element={<DigitalPage />} />
          <Route path={"/products/:docId"} element={<ItemPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
