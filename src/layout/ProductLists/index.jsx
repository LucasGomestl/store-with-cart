import React, { useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import ProductList from "../../components/ProductList";
import { StyledProductLists, ListContainer, Title } from "./styles";

import { getLists } from "../../components/ProductList/actions";

const ProductLists = () => {
  const dispatch = useDispatch();

  const lists = useSelector((state) => state.productList.products) || [];

  const dispatchGetList = React.useCallback(
    (categories) => {
      dispatch(getLists(categories));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatchGetList(["women clothing", "men clothing", "electronics"]);
  }, [dispatchGetList]);

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
  return { products: state.productList };
};

export default connect(mapStateToProps)(React.memo(ProductLists));
