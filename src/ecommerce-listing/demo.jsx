import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import EcommerceListingCollection from "./";

const { Day6: EcommerceListing } = EcommerceListingCollection;

const Center = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  justify-content: center;
`;

ReactDOM.render(
  <Center>
    <EcommerceListing sale={12.99} />
    <EcommerceListing />
    <EcommerceListing soldOut />
  </Center>,
  document.getElementById("app")
);
