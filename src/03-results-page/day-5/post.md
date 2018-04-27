---
cover_image: https://thepracticaldev.s3.amazonaws.com/i/c08dxg74uyqfo7gzdfll.png
title: "Weekly UI Challenge Week 3 Day 5: Add a pagination/load more feature"
published: false
description: "Week 3 Day 5 of my Weekly UI challenge: Loading…"
tags: ui,weeklyui,challenge,react
---

Welcome to Week 3, Day 5 of my Weekly UI challenge! Week 3 will focus on a **results page** UI component; each day throughout this following week, I will pick one or two (usually related) subelements of the design to implement. For day five, our goal is to…

## Add a pagination/load more feature

Have you ever submitted a search query and found yourself with over a million results from Google or Amazon? And in that situation, how many times have you had to scroll for a few hours to get to the end? None? Of course, because most robust search engines like those offer pagination or lazy loadin of search results!

Pagination (the dynamic creation of pages to display content) and lazy loading content like search results or article listings are more features that really aid in providing a robust user experience on your site/app. This not only prevents users from being overwhelmed with results, but improves overall performance and accessibility by not loading dozens/hundreds/maybe thousands of results in one render and decreases the data load on a device, respectively.

Following the original design I created, this is what I've got for **Day 5**:

![A results page component in list view, with one result entry highlighted to indicate it is sponsored](https://thepracticaldev.s3.amazonaws.com/i/nf6dvzp90w720cr0cl0g.png)

I chose to use a "load more" for today's feature implementation; luckily for me, I wrote a small React component to do just this called [Floodgate](https://github.com/geoffdavis92/react-floodgate).

Floodgate is a component that utilizes [render props](https://reactjs.org/docs/render-props.html) and generators to incrementally render a subset of items passed to the component. Such items can be anything array-bound, and in this case the items are an array of objects that hold the `<ResultEntry/>` component and its dates, for sorting. Floodgate also passes in functions as arguments to load the next batch of items, load in all items, and to reset the component state. (I use the reset function after all items have rendered for easy demoing of the feature, as a normal results page may not utilize this necessarily)

In order to give a good UX to the perusers of my search results, I also need to disable the load more button and perhaps display a label to inform them that all results have been displayed. Floodgate has you covered! A `loadComplete` boolean is passed in as a render function argument as well, which yields a value of `true` if all the items have been rendered. 

If you're using React to build your search results UI, give Floodgate a look and see if it can help you!

Here's an animation of my load more feature in action:

![A results page component switching between list and grid views, with certain sorting parameters in place, and a load more button](https://thepracticaldev.s3.amazonaws.com/i/18jx0388xfzw7styclpi.gif)

You can check out my coded implementation [on my Github pages site for this project](https://geoffdavis92.github.io/weekly-ui/).

## Now it's your turn

I used [React.js](https://reactjs.org) and [Storybook](http://storybook.js.org) to develop my implementation, but you can use whatever technology stack you would like! (hint: if you use [Vue.js](https://vuejs.org/) or [Angular.js](https://angularjs.org), you can still use [Storybook for those libraries](https://storybook.js.org/basics/slow-start-guide/))

You don't even have to use a view library if you don't want to; HTML and CSS-only (and non-view JavaScript library) components are more than possible, especially for this step.

Also, please add your repos and/or images of your designs in the comments for inspiration! I would love to see what designs you all create.

Happy coding! 🎉

### Week 3 Calendar

1. (Sunday 4/22) Design component ✅
2. Result entry, sponsored/best seller indicators ✅
3. Grid/list view toggles ✅
4. Sorting ✅
5. Pagination/load more 🎯
6. 100% a11y score
7. Tweaks, refactors, fixes

### Resources

* [`react-floodgate`](https://github.com/geoffdavis92/react-floodgate) - a React "load more" React component for incrementally displaying data
* [Pagination – Examples And Good Practices](https://www.smashingmagazine.com/2007/11/pagination-gallery-examples-and-good-practices/)
* [Infinite Scrolling Best Practices](https://uxplanet.org/infinite-scrolling-best-practices-c7f24c9af1d)
* [Infinite Scrolling, Pagination Or “Load More” Buttons? Usability Findings In eCommerce](https://www.smashingmagazine.com/2016/03/pagination-infinite-scrolling-load-more-buttons/)