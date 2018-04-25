---
cover_image: https://thepracticaldev.s3.amazonaws.com/i/yc5kcdxza0knj63nuda8.png
title: "Weekly UI Challenge Week 3 Day 2: Add result entry, sponsored/best seller indicators"
published: true
description: "Week 3 Day 2 of my Weekly UI challenge: Time for a search party"
tags: ui,weeklyui,challenge,react
---

Welcome to Week 3, Day 2 of my Weekly UI challenge! Week 3 will focus on a **results page** UI component; each day throughout this following week, I will pick one or two (usually related) subelements of the design to implement. For day two, our goal is to…

## Add result entry, sponsored/best seller indicators

Back to basics again! The first thing any results page needs is an entry/entries to populate the page, because without them this would just be a bunch of whitespace. Like the rest of the UI projects we have worked on, these results should be easily traversable, have good color contrast, and have relevant content displaying, in order to be of most use to the searcher.

Additionally, the original search query is display atop the page, so users are able to see what they searched; this could easily be replaced by a secondary search bar, similar to how Google's main search functions.

Also like Google's search, our results should have some sort of indicator if there is paid content and/or a well-regarded result displaying. In my case, I am basing my design off of a would-be sports blog, so I have a special background color indicating the link goes to content that is sponsored by someone to appear first.

Following the original design I created, this is what I've got for **Day 2**:

![A results page component, with one result entry highlighted to indicate it is sponsored](https://thepracticaldev.s3.amazonaws.com/i/ha402qn8gf6tyl5z8soq.png)

My implementation is fairly simple, and uses a list view (for now); if you wanted to, and for *EXTRA* points, you could use the ecommerce listing you made from Week 1, if that fits your design. 

I chose a faded green color to act as the sponsored content indicator, alongside a complementing, darker shade for the label. Lastly, a simple custom focus state gives a bit of character to the otherwise straightforward page.

## Now it's your turn

I used [React.js](https://reactjs.org) and [Storybook](http://storybook.js.org) to develop my implementation, but you can use whatever technology stack you would like! (hint: if you use [Vue.js](https://vuejs.org/) or [Angular.js](https://angularjs.org), you can still use [Storybook for those libraries](https://storybook.js.org/basics/slow-start-guide/))

You don't even have to use a view library if you don't want to; HTML and CSS-only (and non-view JavaScript library) components are more than possible, especially for this step.

Also, please add your repos and/or images of your designs in the comments for inspiration! I would love to see what designs you all create.

Happy coding! 🎉

### Week 3 Calendar

1. (Sunday 4/22) Design component ✅
2. Result entry, sponsored/best seller indicators 🎯
3. Grid/list view toggles
4. Sorting
5. Pagination/load more
6. 100% a11y score
7. Tweaks, refactors, fixes
