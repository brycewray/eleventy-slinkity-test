---
layout: singlepost
tags: post
title: "Post 6 with its UNIQUE title"
subtitle: "The UNIQUE Post 6 subtitle"
description: "The UNIQUE description for Post 6." # Quotation marks allow colons, semicolons, etc.
author: Your name goes here
date: 2020-02-28T21:30:00 # This would be 9:30 PM (2130) UTC on February 28, 2020
lastmod: 2020-04-02T12:23:00 # Comment-out this line with a # if content is unchanged
---

Your opening text goes here.

## In-article heading --- it's an H2 because your title is the H1

And after another paragraph or two or three, you may want to add a *subheading*, which would be an H3, so it would be like the following.[^fnExample]

[^fnExample]: Also, if you want to do footnotes in Markdown, this is how it's done. There's code in the `.eleventy.js` file to handle it properly (including **not** encasing the body copy's footnote reference numbers in brackets, thus overriding what unfortunately is the typical behavior with the usual plugin for the `markdown-it` parser.)

### Subheading (H3)

Text here.

Maybe you want a code block to illustrate something. Here's one:

{% raw %}
```js

/* =========
This is some simple JavaScript, 
just so you can see how Eleventy handles 
a code block (with the help of PrismJS).
It doesn't **do** anything here, of course.
Helpful on a dev blog, eh?
========= */

var i, j
for(i = 0; i < 10; i++) {
  j = i
  console.log(j)
}

/* ========= 
When run, the above would output:

0
1
2
3
4
5
6
7
8
9
========= */

```
{% endraw %}

As of now, the Eleventy Image plugin doesn't work in Slinkity (it's a WIP).

**However** . . .

The following images are from my Cloudinary account and a React component, the use of which is quite possible in [Slinkity](https://slinkity.dev)!

{% react 'components/ImgcReact', url='spacex-OHOU-5UVIYQ-unsplash_3000x2000.jpg', alt='SpaceX rocket launching from the Kennedy Space Center in Florida', width='3000', height='2000', 'render'='static' %}

Closing text. That ends Post 6!