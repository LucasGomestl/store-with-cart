import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector, connect } from "react-redux";
import axios from "axios";

import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Button from "../../components/Button";
import ProductList from "../../components/ProductList";
import Loading from "../../components/Loading";

import { formatter } from "../../utils";

import { addProductToCart } from "../Cart/actions";
import { getProductListsByCategory } from "../../layout/ProductListsByCategory/actions";

import {
  Main,
  StyledProduct,
  ProductImage,
  Title,
  ProductInfo,
  Description,
  Price,
  ButtonsContainer,
} from "./styles";

const Product = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart) || [];
  const lists = useSelector((state) => state.productList.listsByCategory) || [];

  const { id } = useParams();

  async function getProduct(id) {
    const request = await axios.get("https://fakestoreapi.com/products/" + id);
    setProduct(request.data);
  }

  const getRecommendedList = useCallback(() => {
    dispatch(getProductListsByCategory([product.category]));
  }, [dispatch, product.category]);

  useEffect(() => {
    getProduct(id);
    getRecommendedList();
  }, [id, getRecommendedList]);

  setTimeout(function () {
    setIsLoading(false);
  }, 1300);
  return (
    <>
      <Header />
      <Main>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <StyledProduct>
              <ProductImage src={product.image} />
              <ProductInfo>
                <Title data-testid="productTitle">{product.title}</Title>
                <Price>{formatter.format(product.price)}</Price>
                <ButtonsContainer>
                  <Button label="Buy now" icon="shopping-bag" width="120px" />
                  <Button
                    label="Add To Cart"
                    icon="shopping-cart"
                    width="150px"
                    onClick={() => dispatch(addProductToCart(product, cart))}
                  />
                </ButtonsContainer>
                <Description>{product.description}</Description>
              </ProductInfo>
            </StyledProduct>
            <Title>Recommended</Title>
            {lists.map((list, index) => (
              <ProductList list={list} key={index} filter={product.id} />
            ))}
          </>
        )}
      </Main>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    listsByCategory: state.productList,
  };
};
export default connect(mapStateToProps)(Product);
