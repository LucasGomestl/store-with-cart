import React from "react";
import Header from "../../layout/Header";
import ProductsGallery from "../../layout/ProductsGallery";
import ProductList from "../../layout/ProductLists";

import { Main } from "./styles";
const Home = () => {
  return (
    <Main>
      <Header />
      <ProductsGallery />
      <ProductList />
    </Main>
  );
};

export default Home;
