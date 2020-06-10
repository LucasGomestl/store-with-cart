import React from "react";

import { Title, StyledSiteMap, MapColumn } from "./styles";

const SiteMap = () => {
  return (
    <>
      <StyledSiteMap>
        <div>
          <Title>ABOUT</Title>
          <MapColumn>
            <li>About us</li>
            <li>Guide Shops</li>
          </MapColumn>
        </div>

        <div>
          <Title>HELP</Title>
          <MapColumn>
            <li>FAQ</li>
            <li>Shipping and Delivery</li>
            <li>Devolution</li>
            <li>Personal Stylist</li>
            <li>Talk to Us</li>
          </MapColumn>
        </div>

        <div>
          <Title>ACCOUNT</Title>
          <MapColumn>
            <li>My Account</li>
            <li>My Orders</li>
            <li>My Creduts</li>
          </MapColumn>
        </div>
        <div>
          <Title>MOST SEARCHED</Title>
          <MapColumn>
            <li>Mens Casual T-Shirts</li>
            <li>Women's Short</li>
            <li>Curved Gaming Monitor</li>
            <li>SSD</li>
          </MapColumn>
        </div>
      </StyledSiteMap>
    </>
  );
};

export default SiteMap;
