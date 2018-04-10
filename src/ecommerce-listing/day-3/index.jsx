import React from "react";
import styled from "styled-components";
import FA from '@fortawesome/fontawesome-free-regular';
import { THEME, Button } from "EcommerceListing/util";

const EcommerceListing = styled.article`
  border: 1px solid #eee;
  border-radius: 2px;
  display: inline-block;
  font-family: ${THEME.fontFamily};
  font-size: 20px;
  padding: 1em;
  max-width: 300px;
`;

const ListingImage = styled.figure`
  margin: 0 auto 1em;
  img {
    border-radius: 2px;
    display: block;
    max-width: 100%;
  }
`;

const ListingTitle = styled.h3`
  font-size: 1.2em;
  margin: 0 auto 0.5em;
`;

const ListingSubtitle = styled.h4`
  font-weight: 400;
  margin: 0 auto 1em;
`;

const ListingPrice = styled.h5`
  font-size: 1.2em;
  margin: 0 auto 0.85em;
  text-align: right;
`;

export default props => (
  <React.Fragment>
    <style>
      /* import fonts for display */ @import
      url('https://fonts.googleapis.com/css?family=Roboto:400,700');
    </style>
    <EcommerceListing>
      <ListingImage>
        <img
          src="https://raw.githubusercontent.com/geoffdavis92/weekly-ui/master/assets/ecommerce-listing/thinsulate-hat-orange.jpg"
          alt="Thinsulate knitted winter cap in blaze orange"
        />
      </ListingImage>
      <header>
        <ListingTitle>Thinsulate Winter Cap</ListingTitle>
        <ListingSubtitle>Blaze Orange</ListingSubtitle>
      </header>
      <ListingPrice>$34.99</ListingPrice>
      <footer>
        <Button>ADD TO CART</Button>
      </footer>
    </EcommerceListing>
  </React.Fragment>
);
