---
cover_image: https://thepracticaldev.s3.amazonaws.com/i/cyolczubwx9dg2plzcuj.png
title: "Weekly UI Challenge Week 3 Day 4: Add sorting"
published: false
description: "Week 3 Day 4 of my Weekly UI challenge: Shuffling the deck "
tags: ui,weeklyui,challenge,react
---

Welcome to Week 3, Day 4 of my Weekly UI challenge! Week 3 will focus on a **results page** UI component; each day throughout this following week, I will pick one or two (usually related) subelements of the design to implement. For day four, our goal is to…

## Add sorting

The sorting of search results are an important part of a useful results page. Whether it is for an ecommerce platform– sorting by price or customer review, or a search engine– sorting by date or relevance, or some other type of app/site, proper sorting methods help users get the best of your search implementation.

Following the original design I created, this is what I've got for **Day 4**:

![A results page component in list view, with one result entry highlighted to indicate it is sponsored](https://thepracticaldev.s3.amazonaws.com/i/j8cjtbklxomue6imuy5i.png)

The design is a little different due to the fact that I am using the native HTML `select` element, but the functionality is all there. The design continues to emulate the results of a mock soccer blog, so the sorting methods reflect that of a blog, i.e. sorting by date. If you were using a more robust search platform and flexible API, you could also sort by relevance (like Google and Amazon do, for example) or by price or customer rating, as previously mentioned.

Here's an animation of the feature in action:

![A results page component switching between list and grid views, with certain sorting parameters in place](https://thepracticaldev.s3.amazonaws.com/i/aw87o75t8vbp4rnqdb71.gif)

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
4. Sorting 🎯
5. Pagination/load more
6. 100% a11y score
7. Tweaks, refactors, fixes
