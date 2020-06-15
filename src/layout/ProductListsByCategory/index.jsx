import React, { useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import ProductList from "../../components/ProductList";
import { StyledProductLists, ListContainer, Title } from "./styles";

import { getProductListsByCategory } from "./actions";

const ProductLists = () => {
  const dispatch = useDispatch();

  const lists = useSelector((state) => state.productList.listsByCategory) || [];

  useEffect(() => {
    dispatch(
      getProductListsByCategory([
        "women clothing",
        "men clothing",
        "electronics",
      ])
    );
  }, [dispatch]);

  return (
    <>
      <StyledProductLists>
        {lists.map((list, index) => (
          <ListContainer key={index}>
            <Title>{list[0].category}</Title>
            <ProductList list={list} />
          </ListContainer>
        ))}
      </StyledProductLists>
    </>
  );
};

const mapStateToProps = (state) => {
  return { listsByCategory: state.productList };
};

export default connect(mapStateToProps)(ProductLists);
