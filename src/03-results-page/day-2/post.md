---
cover_image: https://thepracticaldev.s3.amazonaws.com/i/f1aw40p6ebsbvz8sjrto.jpg
title: "Weekly UI Challenge Week 2 Day 2: Add an input field"
published: false
description: "Week 2 Day 2 of my Weekly UI challenge: Time for a search party"
tags: ui,weeklyui,challenge,react
---

Welcome to Week 2, Day 2 of my Weekly UI challenge! Week 2 will focus on a **search bar** UI component; each day throughout this following week, I will pick one subelement of the design to implement. For day two, our goal is to…

## Add an input field

Before we get into any kind of exciting territory, we need to create the bare minimum for a search bar: an input field! After all, if a user cannot type their search query how can they possibly make a request to the search platform and/or server for what they want to look for? Go ahead and create the (in)famous white rectangle made famous by internet greats such as everyone's favorite search butler **Ask Jeeves**, that toolbar from **Yahoo** your Grandma still has stickied to her copy of Internet Explorer 8, and a little company called **Google** (ever heard of them?).

Following the original design I created, this is what I've got for **Day 2**:

![A search bar component, with input text element](https://raw.githubusercontent.com/geoffdavis92/weekly-ui-assets/master/search-bar/day2/w2d2-final-sized.png)

Again, I am not straying from the tried-and-true tradition of the "white rectangle" search input; for this, I used an `input` element with the `type="search"` attribute; you could use `type="text"` or some other type of element to source user input, but using the proper HTML element and `type` attribute will help the user experience (or UX) of the component, since browsers and devices will add extra functionality based on the search type. 

In order to actually have this component work as-is, I wrapped the `input` in a `form` element; this allows the searched text to be submitted to whatever server/service/platform you would use for searching, just by pressing "enter/return". 

I kept the 2px `border-radius` style from Week 1, as well as the same color pallete; I found it was nice a minimalistic and still fit this design pretty well. If you check out the live demo, you'll notice I added the focus state from Day 7 for a little extra flair.

Here is an animation of the first piece in action:

![An animation showing the search bar component in use, with text input to the input element and a logger display showing the output below](https://raw.githubusercontent.com/geoffdavis92/weekly-ui-assets/master/search-bar/day2/w2d2-searchinput-animation.gif)

## Now it's your turn

I used [React.js](https://reactjs.org) and [Storybook](http://storybook.js.org) to develop my implementation, but you can use whatever technology stack you would like! (hint: if you use [Vue.js](https://vuejs.org/) or [Angular.js](https://angularjs.org), you can still use [Storybook for those libraries](https://storybook.js.org/basics/slow-start-guide/))

You don't even have to use a view library if you don't want to; HTML and CSS-only (and non-view JavaScript library) components are more than possible, especially for this step.

Also, please add your repos and/or images of your designs in the comments for inspiration! I would love to see what designs you all create.

Happy coding! 🎉

### Week 2 Calendar

1. (Sunday 4/15) Design component ✅
2. Input field 🎯
3. Submit button 
4. Integrate autocomplete functionality 
5. Past search term indicators 
6. 100% a11y score 
7. Tweaks, refactors, fixes 

### Resources

* [Search input type on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search)
* [outline: none (dot com)](http://www.outlinenone.com/) (a good primer for working with/around the `outline` CSS property)
* [Accessible search elements](http://www.a11ymatters.com/pattern/accessible-search/)
