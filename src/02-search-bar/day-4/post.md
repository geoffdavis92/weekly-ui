---
cover_image: https://thepracticaldev.s3.amazonaws.com/i/esxpbj7v1zc27o49ymzm.jpg
title: "Weekly UI Challenge Week 2 Day 3: Add a submit button"
published: false
description: "Week 2 Day 3 of my Weekly UI challenge: Pressing buttons"
tags: ui,weeklyui,challenge,react
---

Welcome to Week 2, Day 3 of my Weekly UI challenge! Week 2 will focus on a **search bar** UI component; each day throughout this following week, I will pick one subelement of the design to implement. For day three, our goal is to…

## Add a submit button

Despite the fact that many (most?) search bar UI components allow a user to submit the search query by pressing `enter`/`return`, it is also [best practice to include a click-able button](https://uxplanet.org/design-a-perfect-search-box-b6baaf9599c#c63f).

If users are so inclined, they can click that to search. Otherwise, such users– and perhaps users that are less tech-literate– may be confused as to how to submit the search query. Besides, pixels are cheap and who doesn't like *more* options?

Following the original design I created, this is what I've got for **Day 3**:

![A search bar component, with input text element and submit button](https://thepracticaldev.s3.amazonaws.com/i/bha1bm0cqf0jn0exrskr.jpg)

The submit/search button uses much of the same styles of the search `input` element, for uniformity and because it's a great size for clicking and tapping, making it easy for users to get their searching done.

Instead of using a `button` element– which would still work to submit the `form` element, I use an `input` element with the type of `submit`; this is more semantic and clearly defines the purpose of the element. To further cement semantic utility of this element, I updated the `value` attribute to read "Search", since the native "submit" is not very clear in what exactly the user is "submitting" or to what form. Note that you do not need to add a name to this element, since rarely– if ever– do search queries need the value of the `submit` input sent with a query, and [input elements with no `name` attribute are never submitted to the server](https://stackoverflow.com/questions/24472017/are-input-fields-without-a-name-attribute-submitted-to-the-server).

Here is an animation of the search input and submit button working together:

![An animation showing the search bar component in use, with text input to the input element, a button to trigger a search form submission, and a logger display showing the output below](https://raw.githubusercontent.com/geoffdavis92/weekly-ui-assets/master/search-bar/day3/w2d3-animation-xld.gif)

## Now it's your turn

I used [React.js](https://reactjs.org) and [Storybook](http://storybook.js.org) to develop my implementation, but you can use whatever technology stack you would like! (hint: if you use [Vue.js](https://vuejs.org/) or [Angular.js](https://angularjs.org), you can still use [Storybook for those libraries](https://storybook.js.org/basics/slow-start-guide/))

You don't even have to use a view library if you don't want to; HTML and CSS-only (and non-view JavaScript library) components are more than possible, especially for this step.

Also, please add your repos and/or images of your designs in the comments for inspiration! I would love to see what designs you all create.

Happy coding! 🎉

### Week 2 Calendar

1. (Sunday 4/15) Design component ✅
2. Input field ✅
3. Submit button 🎯
4. Integrate autocomplete functionality 
5. Past search term indicators 
6. 100% a11y score 
7. Tweaks, refactors, fixes 

### Resources

* [Input type "submit" on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/submit)
* [Button UX Design: Best Practices, Types and States](https://uxplanet.org/button-ux-design-best-practices-types-and-states-647cf4ae0fc6)
* [Design a Perfect Search Box](https://uxplanet.org/design-a-perfect-search-box-b6baaf9599c)
