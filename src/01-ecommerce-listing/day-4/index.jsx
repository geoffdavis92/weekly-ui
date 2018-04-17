import React from "react";
import styled from "styled-components";
import { faHeart } from "@fortawesome/fontawesome-free-regular";
import {
  faCartArrowDown,
  faCartPlus,
  faHeart as faHeartSolid,
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
  margin: 0.5em;
  padding: 1em;
  max-width: 300px;
`;

const ListingImage = styled.figure`
  margin: 0 auto 1em;
  position: relative;
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

const PriceDisplay = styled.h5`
  font-size: 1.2em;
  line-height: 1;
  margin: 0 auto 0.85em;
  text-align: right;
  vertical-align: middle;
`;

const FavButton = styled.button`
  background: transparent;
  border: none;
  color: ${props => (props.isFavorite ? THEME.red : "#fff")};
  cursor: pointer;
  font-size: 1.2em;
  line-height: 1;
  padding: 0;
  position: absolute;
  top: 0.5em;
  right: 0.5em;
`;

const CartButton = styled.button`
  background-color: ${props =>
    props.disabled
      ? THEME.gray
      : !props.showAddedToCart && props.inCart && props.hover
        ? THEME.red
        : props.inCart ? THEME.green : THEME.blue};
  border: none;
  border-radius: 2px;
  color: ${props => (props.disabled ? THEME.grayDark : "#fff")};
  cursor: ${props =>
    props.disabled
      ? "not-allowed"
      : props.hover && props.showAddedToCart ? "default" : "pointer"};
  display: block;
  font-family: ${THEME.fontFamily};
  font-size: 0.9em;
  padding: 0.5em;
  width: 100%;
`;

const Badge = styled.span`
  border: 2px solid
    ${props => (props.soldOut ? THEME.red : props.sale ? THEME.green : "none")};
  border-radius: 2px;
  color: ${props =>
    props.soldOut ? THEME.red : props.sale ? THEME.green : "inherit"};
  display: inline-block;
  font-size: 0.75em;
  line-height: 1;
  padding: 0.33em 0.5em;
  vertical-align: top;
`;

const Sale = styled.span`
  color: ${THEME.green};
  display: inline-block;
  margin: 0 0.5em;
  vertical-align: sub;
`;

const Strikethrough = styled.span`
  color: ${THEME.grayDark};
  text-decoration: line-through;
  vertical-align: sub;
`;

const ListingPrice = ({ children, sale, soldOut }) => {
  const Price = soldOut ? (
    <Badge soldOut>SOLD OUT</Badge>
  ) : sale ? (
    <React.Fragment>
      <Badge sale>SALE</Badge>
      <Sale>{sale}</Sale>
      <Strikethrough>{children}</Strikethrough>
    </React.Fragment>
  ) : (
    children
  );
  return <PriceDisplay>{Price}</PriceDisplay>;
};

class ListingCartButton extends React.Component {
  state = { hover: false };
  _toggleHoverState = e => {
    this.setState(prevState => ({
      hover: !prevState.hover,
      showAddedToCart: false
    }));
  };
  render() {
    const { disabled, inCart, onClick } = this.props;
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
      <CartButton
        hover={hover}
        onClick={e => {
          hover &&
            !showAddedToCart &&
            this.setState(
              prevState => ({
                showAddedToCart: inCart ? false : true
              }),
              () => onClick()
            );
        }}
        {...{ disabled, inCart, showAddedToCart }}
        onMouseEnter={() => (!disabled ? this._toggleHoverState() : null)}
        onMouseLeave={() => (!disabled ? this._toggleHoverState() : null)}
      >
        {ButtonContent}
      </CartButton>
    );
  }
}

export default class EcommerceListing extends React.Component {
  state = { inCart: false, isFavorite: false };
  _toggleFavorite = () => {
    this.setState(prevState => ({
      isFavorite: !prevState.isFavorite
    }));
  };
  _toggleInCart = () => {
    this.setState(prevState => ({
      inCart: !prevState.inCart
    }));
  };
  render() {
    const { sale, soldOut } = this.props;
    return (
      <React.Fragment>
        <style>
          /* import fonts for display */ @import
          url('https://fonts.googleapis.com/css?family=Roboto:400,700');
        </style>
        <ListingContainer>
          <ListingImage>
            <FavButton
              onClick={this._toggleFavorite}
              isFavorite={this.state.isFavorite}
            >
              <FA icon={this.state.isFavorite ? faHeartSolid : faHeart} />
            </FavButton>
            <img
              src="https://raw.githubusercontent.com/geoffdavis92/weekly-ui/master/assets/ecommerce-listing/thinsulate-hat-orange.jpg"
              alt="Thinsulate knitted winter cap in blaze orange"
            />
          </ListingImage>
          <header>
            <ListingTitle>Thinsulate Winter Cap</ListingTitle>
            <ListingSubtitle>Blaze Orange</ListingSubtitle>
          </header>
          <ListingPrice {...{ sale, soldOut }}>$34.99</ListingPrice>
          <footer>
            <ListingCartButton
              disabled={soldOut}
              inCart={this.state.inCart}
              onClick={this._toggleInCart}
            />
          </footer>
        </ListingContainer>
      </React.Fragment>
    );
  }
}
