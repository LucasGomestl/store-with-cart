import React from "react";
import Header from "../../layout/Header";
import ProductsGallery from "../../layout/ProductsGallery";
import ProductList from "../../layout/ProductLists";
import Footer from "../../layout/Footer";

import { Main } from "./styles";
const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <ProductsGallery />
        <ProductList />
      </Main>
      <Footer />
    </>
  );
};

export default Home;
