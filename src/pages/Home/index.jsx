import React from "react";
import Header from "../../layout/Header";
import ProductListsByCategory from "../../layout/ProductListsByCategory";
import Footer from "../../layout/Footer";

import { Main } from "./styles";
const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <ProductListsByCategory />
      </Main>
      <Footer />
    </>
  );
};

export default Home;
