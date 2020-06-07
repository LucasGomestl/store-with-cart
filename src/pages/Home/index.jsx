import React from "react";
import Header from "../../layout/Header";
import ProductsGallery from "../../layout/ProductsGallery";

import { Main } from "./styles";
const Home = () => {
  return (
    <Main>
      <Header />
      <ProductsGallery />
    </Main>
  );
};

export default Home;
