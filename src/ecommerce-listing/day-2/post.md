---
cover_image: https://thepracticaldev.s3.amazonaws.com/i/80pa2qepn715k4qdf0gi.jpg
title: "Week 1 Day 2: Display Product Name, Price, and Image"
published: true
description: "Week 1 Day 2 of my Weekly UI challenge: display the essentials!"
tags: ui,weeklyui,react
---

Welcome to Week 1, Day 2 of my Weekly UI challenge! As I stated in the
[announcement post](https://dev.to/geoff/announcing-weekly-ui-challenge-h87), week 1 will focus on an **ecommerce listing** UI
component; each day throughout this following week, I will pick one or two
(usually related) subelements of the design to implement. For day two, our goal is to…

## Display product name, price, and image

Now that we have our design ready to go, it is time to start implementing some features. A good starting point for any kind of ecommerce component is to display the bare essentials of what customers need to know to purchase a product: the name of the product, the price, and perhaps a photo or graphic relating to the product.

I am basing *my* component around a [photograph of a hat](https://unsplash.com/photos/GsKf0FXVj3Y) I found on Unsplash; it was a great shot,  FREE, (and [permissively licensed](https://unsplash.com/license)) so I decided to use it for my product. The **Thinsulate Winter cap** is the perfect low-price beanie/toboggan/[insert regional winter knitted hat name here] for *you*, and now my job is to get it listed on an ecommerce platform so folks can actually buy the piece. 

Following the original design I created, this is what I've got for **Day 2**:

![ecommerce listing showing orange knitted winter hat, the name of item "Thinsulate Winter Cap", and the $34.99 price](https://raw.githubusercontent.com/geoffdavis92/weekly-ui-assets/master/ecommerce-listing/day2/w1d2-final.png)

I went with a classic "card" style design for the container element, giving ample whitespace padding around the inner contents; it's got a subtle **2px** `border-radius` to soften the edges, but not enough to make it seem "kiddy" or malformed. If you look closely, you will see I added the same radius to the product image, so as to make the two elements look unified.

I decided to use a base `font-size` of **20px**, which is a [recommended font size for body copy](https://blog.usejournal.com/your-body-text-is-too-small-5e02d36dc902) for readability and visual impact. (read that article, it's got some other great points) For my `font-family`, I am using **Droid Sans** for the preferred typeface, with **Roboto** and the system sans-serif typefaces as fallbacks.

Both the product title and subtitle use semantic heading tags: `h4` and `h5` respectively; this is good for SEO and a11y ratings, but may not be necessary, as properly contrasted font sizes and weights could do the trick. The title and price elements are slightly bigger than the base size to convey importance, and they also leverage a higher `font-weight` for the same reason, and to aid in readability whilst scanning. 

You can check out my coded implementation [on my Github pages site for this project]
(https://geoffdavis92.github.io/weekly-ui/).

## Now it's your turn

I used [React.js](https://reactjs.org) and [Storybook](http://storybook.js.org) to develop my implementation, but you can use whatever technology stack you would like! (hint: if you use [Vue.js](https://vuejs.org/) or [Angular.js](https://angularjs.org), you can still use [Storybook for those libraries](https://storybook.js.org/basics/slow-start-guide/))

You don't even have to use a view library if you don't want to; HTML and CSS-only (and non-view JavaScript library) components are more than possible, especially for this step.

Also, please add your repos and/or images of your designs in the comments for inspiration! I would love to see what designs you all create.

Happy coding! 🎉

### Week 1 Calendar

1. Design component ✅
2. Display product name, price, and image 🎯
3. Add to cart button, favorite button
4. Sale price display, sold out states
5. Color variant thumbnail buttons
6. 100% a11y score
7. Tweaks, refactors, fixes

### Resources

* [How To Use H1-H6 HTML Elements Properly](https://www.hobo-web.co.uk/headers/)
* [Your Body Text is Too Small](https://blog.usejournal.com/your-body-text-is-too-small-5e02d36dc902)
* [Storybook](https://storybook.js.org) - JavaScript view library development environment
* [Unsplash](https://unsplash.com) - Free and unlicensed high-quality images