---
cover_image: https://thepracticaldev.s3.amazonaws.com/i/fcezbhi5pdhaw0iybyep.jpg
title: "Week 1 Day 3: Add to Cart, Favorite Buttons"
published: false
description: "Week 1 Day 3 of my Weekly UI challenge: buttons!"
tags: ui,weeklyui,react
---

Welcome to Week 1, Day 3 of my Weekly UI challenge! As I stated in the [announcement post](https://dev.to/geoff/announcing-weekly-ui-challenge-h87), week 1 will focus on an **ecommerce listing** UI component; each day throughout this following week, I will pick one or two (usually related) subelements of the design to implement. For day three, our goal is to…

## Add to Cart, Favorite Buttons

My listing has the all essentials: title, price, photo, that's it right? All finished? Nope…

I forgot to make it available for purchase, a pretty imporant step unless you are operating a window shopping ecommerce platform!

Following the original design I created, this is what I've got for **Day 3**:

![ecommerce listing showing orange knitted winter hat, the name of item "Thinsulate Winter Cap", and the $34.99 price, and a "add to cart" button in blue, on the bottom](https://raw.githubusercontent.com/geoffdavis92/weekly-ui-assets/master/ecommerce-listing/day3/w1d3-final.png)

Like the title and price of the product, a way to purchase a product or add it to your basket/cart should be prominently displayed on an ecommerce listing. I chose to implement this using a block-level button, or a button that is 100% width, and/or utilizes `display: block`. This **Cart button** uses the "[Bootstrap](https://getbootstrap.com)" color scheme; this is essentially: **blue** for information or primary button state (e.g. a CTA), **green** for success state (e.g. "the thing was done"), and **red** for danger state (e.g. "be careful considering this option").

The **Favorite button** in the top-right of the product image would be helpful if your ecommerce app had some sort of wishlist or "save for later" feature. Both the Favorite and Cart buttons use [Fontawesome Icons](https://fontawesome.com/icons) and color to better convey the message of the button and/or its state, even if one may not understand the label.

Here's a GIF with the different states of both the Cart button and the Favorite button:

![ecommerce listing animated GIF showing different states of the "Add to Cart" button and "favorite" button](https://media.giphy.com/media/1wXbgS8b4A4ObXbZ4P/giphy.gif)

You can check out my coded implementation [on my Github pages site for this project](https://geoffdavis92.github.io/weekly-ui/).

## Now it's your turn

I used [React.js](https://reactjs.org) and [Storybook](http://storybook.js.org) to develop my implementation, but you can use whatever technology stack you would like! (hint: if you use [Vue.js](https://vuejs.org/) or [Angular.js](https://angularjs.org), you can still use [Storybook for those libraries](https://storybook.js.org/basics/slow-start-guide/))

You don't even have to use a view library if you don't want to; HTML and CSS-only (and non-view JavaScript library) components are more than possible, especially for this step.

Also, please add your repos and/or images of your designs in the comments for inspiration! I would love to see what designs you all create.

Happy coding! 🎉

### Week 1 Calendar

1. Design component ✅
2. Display product name, price, and image ✅
3. Add to cart button, favorite button 🎯
4. Sale price display, sold out states
5. Color variant thumbnail buttons
6. 100% a11y score
7. Tweaks, refactors, fixes

### Resources

* [Fontawesome Icons](https://fontawesome.com) - Free and Pro (paid) icons
* [Learnstorybook.com](https://dev.to/chroma/introducing-learnstorybookcom-1k6d) - Learn Storybook using a FREE UI tutorial from the folks at [Chroma](http://chromaticqa.com)
* [Button UX Design: Best Practices, Types and States](https://uxplanet.org/button-ux-design-best-practices-types-and-states-647cf4ae0fc6)
