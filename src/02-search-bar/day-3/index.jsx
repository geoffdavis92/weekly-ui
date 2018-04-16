import React from "react";
import styled from "styled-components";
import { focusShadow, THEME } from "../util";

const SearchForm = styled.form`
  font-size: 20px;
  font-family: "Noto Sans", sans-serif;
  line-height: 1;

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
  display: inline-block;
  padding: 0.5em;
`;

const SearchInput = styled.input.attrs({
  type: "search"
}) `
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
}) `
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
    color: #fff;
  }
  &:focus {
    ${focusShadow(THEME.blue)};
  }
`;

export default props => (
  <SearchForm onSubmit={e => e.preventDefault()}>
    <SearchInputWrapper>
      <SearchInput />
    </SearchInputWrapper>
    <SearchButton />
  </SearchForm>
);
