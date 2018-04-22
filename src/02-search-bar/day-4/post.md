---
cover_image: https://thepracticaldev.s3.amazonaws.com/i/z70s1n0tm3vvq0cars6m.jpg
title: "Weekly UI Challenge Week 2 Day 4: Integrate autocomplete functionality"
published: false
description: "Week 2 Day 4 of my Weekly UI challenge: Finishing each others'…"
tags: ui,weeklyui,challenge,react
---

Welcome to Week 2, Day 4 of my Weekly UI challenge! Week 2 will focus on a **search bar** UI component; each day throughout this following week, I will pick one subelement of the design to implement. For day four, our goal is to…

## Integrate autocomplete functionality

Most search bars nowadays have some sort of autocomplete functionality to users find the most accurate web page/result from your site/app. For such search components like Facebook's and Google's, there's a bit of machine learning involved, but we won't get into any of that tonight.

This component just needs to list a few options that may be the most searched or prominent articles/results that the app/site wants to have appear. It would be best practice to also let users search without having to select an autocompleted option, but sometimes that makes sense for certain types of search implementations.

Following the original design I created, this is what I've got for **Day 4**:

![A search bar component, with input text element, autocomplete dropdown, and submit button](https://thepracticaldev.s3.amazonaws.com/i/zwy2kqa1jm8oe2z0xrnl.jpg)

My implementation offers up some music genres, as if it was added to a music blog or research site; I used PayPal's [Downshift](https://github.com/paypal/downshift) library, created and written by [Kent Dodds](https://twitter.com/kentcdodds), for the autocomplete functionality. I had a bit of trouble getting it fully working, so my coded version is not 100% beautiful, but it will get the job done!

Here is an animation of the autocomplete functionality in action:

![An animation showing the search bar component in use, with text input to the input element, a button to trigger a search form submission, an autocomplete dropdown, and a logger display showing the output below](https://raw.githubusercontent.com/geoffdavis92/weekly-ui-assets/master/search-bar/day4/w2d4-animation.gif)

## Now it's your turn

I used [React.js](https://reactjs.org) and [Storybook](http://storybook.js.org) to develop my implementation, but you can use whatever technology stack you would like! (hint: if you use [Vue.js](https://vuejs.org/) or [Angular.js](https://angularjs.org), you can still use [Storybook for those libraries](https://storybook.js.org/basics/slow-start-guide/))

You don't even have to use a view library if you don't want to; HTML and CSS-only (and non-view JavaScript library) components are more than possible, especially for this step.

Also, please add your repos and/or images of your designs in the comments for inspiration! I would love to see what designs you all create.

Happy coding! 🎉

### Week 2 Calendar

1. (Sunday 4/15) Design component ✅
2. Input field ✅
3. Submit button ✅
4. Integrate autocomplete functionality 🎯
5. Past search term indicators 
6. 100% a11y score 
7. Tweaks, refactors, fixes 
