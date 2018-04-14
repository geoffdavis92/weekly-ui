import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
import EcommerceListing from "EcommerceListing";

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
