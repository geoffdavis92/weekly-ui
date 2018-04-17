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
  text-transform: capitalize;
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

const VariantWrapper = styled.span`
  display: block;
  margin: 1em 0;
`;

const VariantInlineBlock = styled.span`
  display: inline-block;
  vertical-align: middle;
`;

const VariantGrid = styled.span`
  display: flex;
  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(4, 40px);
    grid-column-gap: 0.5em;
    grid-row-gap: 0.5em;
  }
`;

const VariantImage = styled.span`
  cursor: ${props => (props.disableSelection ? "not-allowed" : "default")};
  display: inline-block;
  width: 2em;
  img {
    border: ${props => (props.selected ? `.25em solid ${THEME.blue}` : "none")};
    border-radius: 2px;
    display: block;
    opacity: ${props => (props.selected ? 1 : 0.5)};
    max-width: ${props => (props.selected ? `calc(100% - .5em)` : "100%")};
  }
`;

const ListingVariants = ({
  children,
  onClick,
  disableSelection,
  selectedVariant
}) => {
  return (
    <VariantWrapper>
      <VariantInlineBlock>Colors:&nbsp;</VariantInlineBlock>
      <VariantInlineBlock>
        <VariantGrid>
          {React.Children.map(children, (child, index) => (
            <VariantImage
              key={index}
              selected={index === selectedVariant}
              onClick={e =>
                !disableSelection ? onClick({ index, imgsrc: child }) : null
              }
              {...{ disableSelection }}
            >
              <img src={child} />
            </VariantImage>
          ))}
        </VariantGrid>
      </VariantInlineBlock>
    </VariantWrapper>
  );
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
  state = {
    listingImageSrc:
      "https://raw.githubusercontent.com/geoffdavis92/weekly-ui/master/assets/ecommerce-listing/thinsulate-hat-orange.jpg",
    inCart: false,
    isFavorite: false,
    selectedVariant: 0
  };
  _selectVariant = ({ index, imgsrc }) => {
    this.setState(prevState => ({
      listingImageSrc: imgsrc,
      selectedVariant: index
    }));
  };
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
    const pattern = /.+\-([a-z]+)+.[a-z]+$/;
    const [_, productColor] = pattern.exec(this.state.listingImageSrc);
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
              src={this.state.listingImageSrc}
              alt={`Thinsulate knitted winter cap in ${productColor}`}
            />
          </ListingImage>
          <header>
            <ListingTitle>Thinsulate Winter Cap</ListingTitle>
            <ListingSubtitle>{productColor}</ListingSubtitle>
          </header>
          <ListingPrice {...{ sale, soldOut }}>$34.99</ListingPrice>
          <ListingVariants
            disableSelection={this.state.inCart}
            selectedVariant={this.state.selectedVariant}
            onClick={!this.state.inCart ? this._selectVariant : null}
          >
            {[
              "https://raw.githubusercontent.com/geoffdavis92/weekly-ui/master/assets/ecommerce-listing/thinsulate-hat-orange.jpg",
              "https://raw.githubusercontent.com/geoffdavis92/weekly-ui/master/assets/ecommerce-listing/thinsulate-hat-blue.jpg",
              "https://raw.githubusercontent.com/geoffdavis92/weekly-ui/master/assets/ecommerce-listing/thinsulate-hat-gray.jpg",
              "https://raw.githubusercontent.com/geoffdavis92/weekly-ui/master/assets/ecommerce-listing/thinsulate-hat-yellow.jpg"
            ]}
          </ListingVariants>
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
