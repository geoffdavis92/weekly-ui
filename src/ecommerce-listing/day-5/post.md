---
cover_image: https://thepracticaldev.s3.amazonaws.com/i/dyf1j6lzemg3aa4fwwp6.jpg
title: "Week 1 Day 5: Color Variant Thumbnail Buttons"
published: true
description: "Week 1 Day 5 of my Weekly UI challenge: Variety is the spice of life"
tags: ui,weeklyui,react
---

Welcome to Week 1, Day 5 of my Weekly UI challenge! As I stated in the [announcement post](https://dev.to/geoff/announcing-weekly-ui-challenge-h87), week 1 will focus on an **ecommerce listing** UI component; each day throughout this following week, I will pick one or two (usually related) subelements of the design to implement. For day five, our goal is to…

## Color Variant Thumbnail Buttons

They say that "the world is not black and white", which is definitely true; so why should our ecommerce products be restricted to just one color? Today we're going to add a small list of variants of the original product; such a component can be seen on such online shops as [J.Crew](https://www.jcrew.com/c/mens_category/teesfleece) (hover over a product) and [Madewell](https://www.madewell.com/madewell_category/SHOESANDBOOTS.jsp). This is yet another element that is not only nice to have for your users, but also can be crucial in showing all product options and availability to increase conversions.

Following the original design I created, this is what I've got for **Day 5**:

<!-- IMAGE -->
![ecommerce listing showing orange knitted winter hat, the name of item "Thinsulate Winter Cap", and the $20.99 sale price with a crossed out $34.99 price, and an "add to cart" button in blue, on the bottom](https://raw.githubusercontent.com/geoffdavis92/weekly-ui-assets/master/ecommerce-listing/day5/w1d5-final.png)

I positioned this list of variants below the product name and price– but above the cart button– because it's more of a secondary feature to those text elements and should come before the actionable UI item that would presumably take a user off the page (the cart button).

To highlight the currently selected variant, I place a border around the thumbnail image and fade out the unselected options. Lastly, once an item is in the cart, the variant is locked in, with an appropriate cursor around the variant selector to indicate as such.

Here's a GIF of the variant selector in action:

![Ecommerce listing GIF animation showing the different states of the variant selector, as it loops through various colors of the hat product](https://raw.githubusercontent.com/geoffdavis92/weekly-ui-assets/master/ecommerce-listing/day5/w1d5-variant-demo-ld.gif)

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
4. Sale price display, sold out states ✅
5. Color variant thumbnail buttons 🎯
6. 100% a11y score 
7. Tweaks, refactors, fixes 
