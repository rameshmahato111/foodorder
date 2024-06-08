import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LayOut from "./pages/LayOut";
import MenuPage from "./pages/MenuPage";
import { Provider } from "react-redux";
import { store } from "./app/store";
import {
  ContactComponent,
  CartComponent,
  ProductDetailsComponent,
  ProductComponent,
} from "./components/Components";
import Graph from "./components/Dashboard/Graph";
import UserProfilePage from "./components/UserProfile/UserProfile";
import AuthComponent from "./components/Authentication/AuthComponent";

const Routing = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route index element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/contact" element={<ContactComponent />} />
            <Route path="/dessert" element={<ProductComponent />} />
            <Route
              path="/details/:itemsId"
              element={<ProductDetailsComponent />}
            />
            <Route path="/cart" element={<CartComponent />} />
            <Route path="/login" element={<AuthComponent />} />
            <Route path="/dashboard" element={<Graph />} />
            <Route path="/user-order" element={<UserProfilePage />} />




          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default Routing;
