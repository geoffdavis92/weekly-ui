
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
import EcommerceListing from "EcommerceListing";

storiesOf("Week 1: Ecommerce Listing", module).add("Day 2", () => (
  <EcommerceListing.Day2 />
));