import * as types from "./actionTypes";

import axios from "axios";

export async function getLists(categories) {
  const request = categories.map(async (category) => {
    return await axios
      .get(
        "https://fakestoreapi.com/products/category/" + category + "?limit=4"
      )
      .then((res, err) => res.data);
  });

  const lists = await Promise.all(request).then((promise) => promise);

  return {
    type: types.GET_PRODUCTS,
    payload: lists,
  };
}
