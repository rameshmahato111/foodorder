import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LayOut from "./pages/LayOut";
import MenuPage from "./pages/MenuPage";
import { Provider } from "react-redux";
import { store } from "./app/store";
import {
  ContactComponent,
  LoginComponent,
  RegisterComponent,
  CartComponent,
  ProductDetailsComponent,
  ProductComponent,
} from "./components/Components";
import Graph from "./components/Dashboard/Graph";

const Routing = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route index element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/register" element={<RegisterComponent />} />
            <Route path="/contact" element={<ContactComponent />} />
            <Route path="/dessert" element={<ProductComponent />} />
            <Route
              path="/details/:itemsId"
              element={<ProductDetailsComponent />}
            />
            <Route path="/cart" element={<CartComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/dashboard" element={<Graph />} />


          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default Routing;
