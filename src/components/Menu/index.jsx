import React from "react";
import { Menu, MenuItems } from "./styles";
const index = () => {
  return (
    <Menu data-testid="menu">
      <MenuItems>
        <li>
          <a href="/">Item 1</a>
        </li>
        <li>
          <a href="/">Item 2</a>
        </li>
        <li>
          <a href="/">Item 3</a>
        </li>
        <li>
          <a href="/">Item 4</a>
        </li>
      </MenuItems>
    </Menu>
  );
};

export default index;
