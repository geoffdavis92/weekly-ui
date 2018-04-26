---
cover_image: 
title: "Weekly UI Challenge Week 3 Day 3: Add grid/list view toggles"
published: false
description: "Week 3 Day 3 of my Weekly UI challenge: "
tags: ui,weeklyui,challenge,react
---

Welcome to Week 3, Day 3 of my Weekly UI challenge! Week 3 will focus on a **results page** UI component; each day throughout this following week, I will pick one or two (usually related) subelements of the design to implement. For day three, our goal is to…

## Add grid/list view toggles

The ability to control the display of UI is not a very oft-included feature, but one that can enhance the experience and/or utility of an app/web site. Such a feature is included in such user interfaces as Instagram (user profile views) and Google Drive; they can certainly aid in the scannability of a design, by removing excess– yet perhaps at times useful– information.

While design is an all-important decision in implementing the vision of one's app or site, handing over some control of the display can show your users that you care for their needs. 

Following the original design I created, this is what I've got for **Day 3**:

![A results page component in list view, with one result entry highlighted to indicate it is sponsored](https://thepracticaldev.s3.amazonaws.com/i/cmm27su78o4j8defusbt.png)

![A results page component in grid view, with one result entry highlighted to indicate it is sponsored](https://thepracticaldev.s3.amazonaws.com/i/egr6t09jvbs2qo07ej2w.png)

Like some of the features we've created on this challenge, this view toggle may work best when preferences are saved using cookies or some other mechanism to save user state. But, I've skipped this step so far. This feature is a simple toggle that utilizes React's internal component state and dynamic styling via [Styled Components](https://styled-components.com).

One thing I would suggest is trying out the new(ish) [`grid` CSS API](https://developer.mozilla.org/en-US/docs/Web/CSS/grid) to style the grid view; it's not as scary as you may imagine, and it's incredibly powerful.

Here's an animation of the feature in action:

![A results page component switching between list and grid views](https://thepracticaldev.s3.amazonaws.com/i/f1kxwc5o0mjktd0fsb73.gif)

You can check out my coded implementation [on my Github pages site for this project](https://geoffdavis92.github.io/weekly-ui/).

## Now it's your turn

I used [React.js](https://reactjs.org) and [Storybook](http://storybook.js.org) to develop my implementation, but you can use whatever technology stack you would like! (hint: if you use [Vue.js](https://vuejs.org/) or [Angular.js](https://angularjs.org), you can still use [Storybook for those libraries](https://storybook.js.org/basics/slow-start-guide/))

You don't even have to use a view library if you don't want to; HTML and CSS-only (and non-view JavaScript library) components are more than possible, especially for this step.

Also, please add your repos and/or images of your designs in the comments for inspiration! I would love to see what designs you all create.

Happy coding! 🎉

### Week 3 Calendar

1. (Sunday 4/22) Design component ✅
2. Result entry, sponsored/best seller indicators ✅
3. Grid/list view toggles 🎯
4. Sorting
5. Pagination/load more
6. 100% a11y score
7. Tweaks, refactors, fixes
