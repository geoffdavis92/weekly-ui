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
  max-width: calc(100% - 1em);
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
  max-width: 100%;
`;

export default class SearchBar extends React.Component {
  render() {
    return (
      <SearchForm
        onSubmit={e => {
          e.preventDefault();
          this.props.handleSubmit(this.Input.value);
          this.Form.reset();
        }}
        innerRef={node => (this.Form = node)}
      >
        <SearchInputWrapper>
          <SearchInput
            placeholder="Search..."
            innerRef={node => (this.Input = node)}
          />
        </SearchInputWrapper>
      </SearchForm>
    );
  }
}
