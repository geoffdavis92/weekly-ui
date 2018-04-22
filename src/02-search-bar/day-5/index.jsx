import React from "react";
import styled from "styled-components";
import Downshift from "downshift";
import { focusShadow, THEME } from "../util";

const SearchForm = styled.form.attrs({ id: "search-form" })`
  display: inline-block;
  font-size: 20px;
  font-family: "Noto Sans", sans-serif;
  line-height: 1;
  position: relative;

  &:focus-within {
    section,
    input[type="submit"] {
      border-color: #333;
      color: #333;
    }
    section {
      &:focus-within {
        ${focusShadow(THEME.blue)};
      }
    }
  }
`;

const SearchInputWrapper = styled.section`
  background-color: #fff;
  border: 1px solid #999;
  border-radius: 2px;
  cursor: text;
  display: inline-block;
  padding: 0.5em;
`;

const SearchInput = styled.input.attrs({
  name: "search-query",
  type: "search"
})`
  background: transparent;
  border: none;
  display: inline-block;
  font-size: 1em;
  outline: none;
  width: 33ch;
`;

const SearchButton = styled.input.attrs({
  type: "submit",
  value: "Search"
})`
  background: #fff;
  border: 1px solid #999;
  border-radius: 2px;
  color: #999;
  font-size: 1em;
  margin: 0 auto 0 0.5em;
  outline: none;
  padding: calc(0.5em + 1px) 0.5em;

  &:active {
    background: ${THEME.blue};
    border-color: #fff !important;
    color: #fff !important;
  }
  &:focus {
    ${focusShadow(THEME.blue)};
  }
`;

const SearchContainer = styled.section`
  border-radius: 2px;
  display: inline-block;
  position: relative;
`;

const AutocompleteWrapper = styled.dialog`
  border: 1px solid #333;
  border-radius: 2px;
  padding: 0;
  position: absolute;
  top: calc(100% + 0.33em);
  right: auto;
  left: 0;

  width: calc(100% - 2px);
`;
const AutocompleteList = styled.ol`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
const AutocompleteItem = styled.li`
  background: transparent;
  color: #333;
  cursor: default;
  padding: 0.33em 1em;
  &:hover {
    background: ${THEME.blue};
    color: #fff;
  }
  &:first-of-type {
    margin-top: 0.75em;
  }
  &:last-of-type {
    margin-bottom: 0.75em;
  }
`;

const PastSearchLabel = styled.label`
  color: #999;
  display: inline-block;
  padding: 0 0 0 1em;
  position: relative;
  &:after {
    content: "";
    display: inline-block;
    height: 0.5em;
    width: calc(100%);
    position: absolute;
    top: 5%;
    right: calc(-100% - 0.5em);
    border-bottom: 2px solid #aaa;
  }
`;
const PastSearchBreak = styled.hr`
  display: inline-block;
`;

const AutocompleteResults = ({
  filterItems,
  items,
  pastItems,
  isOpen,
  getItemProps,
  highlightedIndex,
  selectItem
}) => {
  const filteredPastItems = pastItems.filter(filterItems);
  const filteredItems = items.filter(filterItems);
  const mappedItems = filteredItems.map((item, i) => {
    return (
      <AutocompleteItem
        {...getItemProps({
          item,
          index: i,
          value: item
        })}
        key={item}
        highlighted={i === highlightedIndex}
        onMouseDown={e => {
          selectItem({ item });
        }}
      >
        {item}
      </AutocompleteItem>
    );
  });
  const mappedPastItems = filteredPastItems.map((item, i) => {
    return (
      <AutocompleteItem
        {...getItemProps({
          item,
          index: i,
          value: item
        })}
        key={item}
        highlighted={i === highlightedIndex}
        onMouseDown={e => {
          selectItem({ item });
        }}
      >
        {item}
      </AutocompleteItem>
    );
  });
  return (
    isOpen && (
      <AutocompleteWrapper
        open={(mappedItems.length || mappedPastItems) && isOpen}
      >
        {mappedItems.length ? (
          <AutocompleteList>{mappedItems}</AutocompleteList>
        ) : null}
        {!mappedItems.length && mappedPastItems.length ? <br /> : null}
        {mappedPastItems.length ? (
          <PastSearchLabel>Past search terms</PastSearchLabel>
        ) : null}
        {mappedPastItems.length ? (
          <AutocompleteList>{mappedPastItems}</AutocompleteList>
        ) : null}
      </AutocompleteWrapper>
    )
  );
};

export default class SearchBar extends React.Component {
  state = { query: "" };
  Input = false;
  componentDidMount() {
    // console.log(this.DS);
  }
  _filterItems = ({ inputValue }) => i =>
    !inputValue || i.toLowerCase().includes(inputValue.toLowerCase());
  _handleItemClick = ({ item }) => {
    alert(item);
    this.setState(prevState => ({
      selectedItemValue: item
    }));
  };
  _handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit({ event: e, query: this.Input.value });
    this.Form.reset();
    this.DS.clearSelection();
  };
  render() {
    const { items, pastItems } = this.props;
    return (
      <SearchForm
        onSubmit={this._handleSubmit}
        innerRef={node => (this.Form = node)}
      >
        <SearchContainer>
          <Downshift ref={n => (this.DS = n)}>
            {({
              getRootProps,
              getItemProps,
              getInputProps,
              inputValue,
              isOpen,
              highlightedIndex,
              selectItem,
              selectedItem
            }) => {
              return (
                <SearchInputWrapper
                  {...getRootProps({ refKey: "search-wrapper" })}
                >
                  <SearchInput
                    placeholder={"Search..."}
                    innerRef={n => (this.Input = n)}
                    {...getInputProps({
                      value: selectedItem ? selectedItem.item : undefined
                    })}
                  />
                  <AutocompleteResults
                    {...{
                      filterItems: this._filterItems({
                        inputValue
                      }),
                      items,
                      pastItems,
                      isOpen,
                      getItemProps,
                      highlightedIndex,
                      selectItem
                    }}
                  />
                </SearchInputWrapper>
              );
            }}
          </Downshift>
        </SearchContainer>
        <SearchButton />
      </SearchForm>
    );
  }
}
