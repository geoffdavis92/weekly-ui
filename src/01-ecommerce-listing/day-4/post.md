---
cover_image: https://thepracticaldev.s3.amazonaws.com/i/4emvycmpar0yg27cpau3.jpg
title: "Week 1 Day 4: Sale price display, sold out states"
published: false
description: "Week 1 Day 4 of my Weekly UI challenge: Sales and sell-outs!"
tags: ui,weeklyui,react
---

Welcome to Week 1, Day 4 of my Weekly UI challenge! As I stated in the [announcement post](https://dev.to/geoff/announcing-weekly-ui-challenge-h87), week 1 will focus on an **ecommerce listing** UI component; each day throughout this following week, I will pick one or two (usually related) subelements of the design to implement. For day four, our goal is to…

## Sale Price Display, Sold Out States

Sometimes when you are a business owner, you have to generate interest for your items or incentivize customers to purchase a product. With a brick-and-mortar store, perhaps that's a flashy sign or a kitschy local TV ad; with an online store, that could be a banner across the top of the listing, a ribbon decorating an upper corner of a product card, or a **SALE** callout on the listing, which is what I have configured. 

Conversely, it's nice to tell your customers– before they click through to the product page– whether an item is still in stock or not. To aid my users in their search for products they can actually buy, I've added a **SOLD OUT** callout in place of a price.

Following the original design I created, this is what I've got for **Day 4**:

<!-- IMAGE -->
![ecommerce listing showing orange knitted winter hat, the name of item "Thinsulate Winter Cap", and the $20.99 sale price with a crossed out $34.99 price, and an "add to cart" button in blue, on the bottom](https://raw.githubusercontent.com/geoffdavis92/weekly-ui-assets/master/ecommerce-listing/day4/w1d4-final-group.png)

For the sale price display, I added a green callout, or "badge" as [it's referred to sometimes](https://getbootstrap.com/docs/4.1/components/badge/). I then render the sale price next to it, naturally; to cap off the sale update, I strike-through the original price, so users can *see* their savings! (we're talking about *literally* slashing prices here)

For the sold out display, I actually use the same badge component with different props to make the border/text color red. No need to display the price for this product, since it is not available for sale; if this was hooked up to a larger ecommerce platform, you could/should still link the component through to the product page, and display the price there, for inquisitive minds and long-term planners.

Finally, in order to make sure the ecommerce database team doesn't need to go in and scrub some orders and issue apology emails, I need to disable the button and its function. Since this is a semantic `button` element, I can add the `disabled` attribute (or since I'm using React, a "prop") to render the button unclickable; to be safe, I also remove the `onClick` handler as well, and make the button grayscale for visual shoppers.

You can check out my coded implementation [on my Github pages site for this project](https://geoffdavis92.github.io/weekly-ui/).

## Now it's your turn

I used [React.js](https://reactjs.org) and [Storybook](http://storybook.js.org) to develop my implementation, but you can use whatever technology stack you would like! (hint: if you use [Vue.js](https://vuejs.org/) or [Angular.js](https://angularjs.org), you can still use [Storybook for those libraries](https://storybook.js.org/basics/slow-start-guide/))

You don't even have to use a view library if you don't want to; HTML and CSS-only (and non-view JavaScript library) components are more than possible, especially for this step.

Also, please add your repos and/or images of your designs in the comments for inspiration! I would love to see what designs you all create.

Happy coding! 🎉

### Week 1 Calendar

1. Design component ✅
2. Display product name, price, and image ✅
3. Add to cart button, favorite button ✅
4. Sale price display, sold out states 🎯
5. Color variant thumbnail buttons
6. 100% a11y score
7. Tweaks, refactors, fixes
