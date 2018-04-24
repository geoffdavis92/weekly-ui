import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
import EcommerceListing from "EcommerceListing";
import SearchBar from "SearchBar";
import ResultsPage from "ResultsPage";

storiesOf("Week 1: Ecommerce Listing", module)
  .add("Day 2", () => <EcommerceListing.Day2 />)
  .add("Day 3", () => <EcommerceListing.Day3 />)
  .add("Day 4", () => (
    <React.Fragment>
      <EcommerceListing.Day4 sale="$20.99" /> <EcommerceListing.Day4 soldOut />
    </React.Fragment>
  ))
  .add("Day 5", () => <EcommerceListing.Day5 />)
  .add("Day 6", () => <EcommerceListing.Day6 />)
  .add("Day 7", () => <EcommerceListing.Day7 />);

storiesOf("Week 2: Search Bar", module)
  .add("Day 2", () => (
    <SearchBar.Day2
      handleSubmit={query => {
        action("Searched term")(query);
      }}
    />
  ))
  .add("Day 3", () => (
    <SearchBar.Day3
      handleSubmit={({ event, query }) => {
        event.preventDefault();
        action("Searched term")(query);
      }}
    />
  ))
  .add("Day 4", () => (
    <SearchBar.Day4
      items={["bluegrass", "folk rock", "indiepop", "shoegaze"]}
      handleSubmit={({ event, query }) => {
        event.preventDefault();
        if (query.length) action("Searched term")(query);
      }}
    />
  ))
  .add("Day 5", () => (
    <SearchBar.Day5
      items={[
        "bluegrass",
        "folk rock",
        "indiepop",
        "shoegaze",
        "hip hop",
        "electronica",
        "southern rap",
        "funk",
        "house",
        "speed metal"
      ]}
      pastItems={["hard rock", "trap", "new wave"]}
      handleSubmit={({ event, query }) => {
        event.preventDefault();
        if (query.length) action("Searched term")(query);
      }}
    />
  ));

storiesOf("Week 3: Results Page", module).add("Day 2", () => (
  <React.Fragment>
    <style>
      @import
      url('https://fonts.googleapis.com/css?family=Merriweather:400,700|Open+Sans:400,700');
    </style>
    <ResultsPage.Day2 query="MLS Week 8" />
  </React.Fragment>
));
