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
})`
  background: transparent;
  border: none;
  display: inline-block;
  font-size: 1em;
  outline: none;
  width: 33ch;
`;

export default props => (
  <SearchForm onSubmit={e => e.preventDefault()}>
    <SearchInputWrapper>
      <SearchInput />
    </SearchInputWrapper>
  </SearchForm>
);
