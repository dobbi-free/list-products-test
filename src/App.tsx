import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/Products/Products";
import ProductItem from "./components/Products/ProductItem";
import Header from "./components/Header/Header";
import { initCommentData, initListItemsData } from "./data/data";
import { MainView } from "./components/MainView/MainView";

function App() {
  useEffect(() => {
    if (!localStorage.getItem("listItems")) {
      localStorage.setItem("listItems", initListItemsData);
      localStorage.setItem("comments", initCommentData);
    }
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <div className="products_wrapper">
        <Routes>
          <Route path={"/"} element={<MainView />}>
            <Route path={"/"} element={<Products />} />
            <Route path={"/product/:productId"} element={<ProductItem />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
