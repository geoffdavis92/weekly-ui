---
cover_image: https://thepracticaldev.s3.amazonaws.com/i/crr8zwevjxq2sapa81ps.jpg
title: "Weekly UI Challenge Week 2 Day 6: Score 100% in an a11y audit"
published: false
description: "Week 2 Day 6 of my Weekly UI challenge: Make it accessible"
tags: ui,weeklyui,challenge,react,a11y
---

Welcome to Week 2, Day 6 of my Weekly UI challenge! Week 2 will focus on a **search bar** UI component; each day throughout this following week, I will pick one subelement of the design to implement. For day six, our goal is to…

## Score 100% in an a11y audit

Accessibility– or a11y, pronounced "ally"– is a very important concept in modern web development. No matter whether you are building web applications or simple static landing pages, making a web page accessible should be on the forefront of every developer and designer's mind. For many, this is an afterthought, but a11y is quickly becoming a [metric in SEO ranking](https://webaim.org/blog/web-accessibility-and-seo/) and vital to the [legal integrity of your web page/app](https://www.adatitleiii.com/2018/01/2017-website-accessibility-lawsuit-recap-a-tough-year-for-businesses/); it is also a good idea and strategy to make it easier for users to actually use your site/app/widget.

A11y techniques span quite a few domains and disciplines, from HTML attributes and CSS states, to colors used in the design (you may notice that most colors I used in my design have WCAG contrast ratings of at least AA for their relevant domains) and text that no one will interact with unless they use a screen reader. In order to test for a web page's accessibility, there are several tools floating around the web. One such tool is **[a11y.css](https://ffoodd.github.io/a11y.css/)**.

a11y.css is an awesome tool that uses CSS targeting to find a11y errors, warnings, and advisable tips in your code, and show you the messages inline. You can even configure the tool to target only certain levels of warnings too. When I start working on improving accessibility, this tool is the first one I use.

Another tool I use is the [Google Lighthouse accessibility audit](https://developers.google.com/web/tools/lighthouse/) This tool will check all the types of things a11y.css does, and then some. It allows a little more control over debugging, as it will list offending elements, and scolling over that list will highlight those elements in the DOM, much like normal devtools do. I also find Lighthouse a *lot* easier to figure out what to fix, since it will also link to explainer pages for each error.

I've linked several tools and resources for a11y techniques and testing in the footnotes of this post, and I hope you use them and explore ways to help make the web usable for *everyone*!

## Now it's your turn

I used [React.js](https://reactjs.org) and [Storybook](http://storybook.js.org) to develop my implementation, but you can use whatever technology stack you would like! (hint: if you use [Vue.js](https://vuejs.org/) or [Angular.js](https://angularjs.org), you can still use [Storybook for those libraries](https://storybook.js.org/basics/slow-start-guide/))

You don't even have to use a view library if you don't want to; HTML and CSS-only (and non-view JavaScript library) components are more than possible, especially for this step.

Also, please add your repos and/or images of your designs in the comments for inspiration! I would love to see what designs you all create.

Happy coding! 🎉

### Week 2 Calendar

1. (Sunday 4/15) Design component ✅
2. Input field ✅
3. Submit button ✅
4. Integrate autocomplete functionality ✅
5. Past search term indicators ✅
6. 100% a11y score 🎯
7. Tweaks, refactors, fixes 

### Resources

* [a11y.css](https://ffoodd.github.io/a11y.css/)
* [a11y Project](https://a11yproject.com)
* [`aria` techniques on MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)
* [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/)
* [WCAG Color Contrast Checker](https://webaim.org/resources/contrastchecker/)