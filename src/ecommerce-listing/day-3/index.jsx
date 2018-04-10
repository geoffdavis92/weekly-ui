import React from "react";
import styled from "styled-components";
import {
  faCartArrowDown,
  faCartPlus,
  faTrashAlt
} from "@fortawesome/fontawesome-free-solid";
import FA from "@fortawesome/react-fontawesome";
import { THEME } from "EcommerceListing/util";

const ListingContainer = styled.article`
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

const ListingButton = styled.button`
  background-color: ${props =>
    !props.showAddedToCart && props.inCart && props.hover
      ? THEME.red
      : props.inCart ? THEME.green : THEME.blue};
  border: none;
  border-radius: 2px;
  color: #fff;
  cursor: ${props =>
    props.hover && props.showAddedToCart ? "default" : "pointer"};
  display: block;
  font-family: ${THEME.fontFamily};
  font-size: 0.9em;
  padding: 0.5em;
  width: 100%;
`;

class ListingCartButton extends React.Component {
  state = { hover: false };
  _toggleHoverState = e => {
    this.setState(prevState => ({
      hover: !prevState.hover,
      showAddedToCart: false
    }));
  };
  render() {
    const { inCart, onClick } = this.props;
    const { hover, showAddedToCart } = this.state;
    const ButtonContent =
      inCart && showAddedToCart ? (
        <React.Fragment>
          <FA icon={faCartArrowDown} /> ADDED TO CART
        </React.Fragment>
      ) : inCart && hover ? (
        <React.Fragment>
          <FA icon={faTrashAlt} /> REMOVE FROM CART
        </React.Fragment>
      ) : !inCart ? (
        <React.Fragment>
          <FA icon={faCartPlus} /> ADD TO CART
        </React.Fragment>
      ) : (
        <React.Fragment>
          <FA icon={faCartArrowDown} /> ADDED TO CART
        </React.Fragment>
      );
    return (
      <ListingButton
        hover={hover}
        onClick={e => {
          hover && !showAddedToCart && this.setState(
            prevState => ({
              showAddedToCart: inCart ? false : true
            }),
            () => onClick()
          );
        }}
        {...{ inCart, showAddedToCart }}
        onMouseEnter={this._toggleHoverState}
        onMouseLeave={this._toggleHoverState}
      >
        {ButtonContent}
      </ListingButton>
    );
  }
}

export default class EcommerceListing extends React.Component {
  state = { inCart: false };
  _toggleInCart = () => {
    this.setState(prevState => ({
      inCart: !prevState.inCart
    }));
  };
  render() {
    return (
      <React.Fragment>
        <style>
          /* import fonts for display */ @import
          url('https://fonts.googleapis.com/css?family=Roboto:400,700');
        </style>
        <ListingContainer>
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
            <ListingCartButton
              inCart={this.state.inCart}
              onClick={this._toggleInCart}
            />
          </footer>
        </ListingContainer>
      </React.Fragment>
    );
  }
}
