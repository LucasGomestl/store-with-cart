import React from "react";
import Header from "../../layout/Header";
import ProductsGallery from "../../layout/ProductsGallery";
import ProductListsByCategory from "../../layout/ProductListsByCategory";
import Footer from "../../layout/Footer";

import { Main } from "./styles";
const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <ProductsGallery />
        <ProductListsByCategory />
      </Main>
      <Footer />
    </>
  );
};

export default Home;
