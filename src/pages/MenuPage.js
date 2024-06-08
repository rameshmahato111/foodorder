import React from "react";
import { Helmet } from "react-helmet";
import { ProductComponent } from "../components/Components";
const MenuPage = () => {
  return (
    <>
      <Helmet>
        <title>menu page</title>
      </Helmet>

      <ProductComponent />
    </>
  );
};

export default MenuPage;
