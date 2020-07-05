import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/product/:id" component={Product} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
