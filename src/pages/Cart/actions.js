import * as types from "./actionTypes";

export const addProductToCart = (product, cart, quantity = 1) => {
  const updatedCart = [...cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === product.id
  );
  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex],
    };

    if (quantity === 1) {
      updatedItem.quantity++;
    } else {
      if (quantity !== "") {
        const parsedQuantity = Number.parseInt(quantity);
        updatedItem.quantity = parsedQuantity;
      } else {
        updatedItem.quantity = "";
      }
    }
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return {
    type: types.ADD_PRODUCT_TO_CART,
    payload: updatedCart,
  };
};

export const removeProductFromCart = (id, cart) => {
  const updatedCart = [...cart];
  const updatedItemIndex = updatedCart.findIndex((item) => item.id === id);

  const updatedItem = { ...updatedCart[updatedItemIndex] };

  if (updatedItem.quantity > 1) {
    updatedItem.quantity--;
    updatedCart[updatedItemIndex] = updatedItem;
  } else {
    updatedCart.splice(updatedItemIndex, 1);
  }
  return {
    type: types.REMOVE_PRODUCT_FROM_CART,
    payload: updatedCart,
  };
};

export const deleteProductFromCart = (id, cart) => {
  const updatedCart = [...cart];
  const updatedItemIndex = updatedCart.findIndex((item) => item.id === id);

  updatedCart.splice(updatedItemIndex, 1);

  return {
    type: types.DELETE_PRODUCT_FROM_CART,
    payload: updatedCart,
  };
};
