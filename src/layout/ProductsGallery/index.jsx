import React from "react";
import ProductBanner from "../../components/ProductBanner";

import { StyledProductGallery } from "./styles";

const ProductGallery = () => {
  return (
    <StyledProductGallery>
      <ProductBanner
        start={1}
        end={-1}
        src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
      />
      <ProductBanner src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" />
      <ProductBanner src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" />
    </StyledProductGallery>
  );
};

export default ProductGallery;
