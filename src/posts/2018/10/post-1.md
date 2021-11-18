---
layout: singlepost
tags: post
title: "Post 1 with its UNIQUE title" # Quotation marks allow colons, semicolons, etc.
subtitle: "The UNIQUE Post 1 subtitle" # Quotation marks allow colons, semicolons, etc.
description: "The UNIQUE description for Post 1." # Quotation marks allow colons, semicolons, etc.
author: Your name goes here
date: 2018-10-17T14:40:00 # This would be 2:40 PM (1440) UTC on Oct. 17, 2018
lastmod: 2019-04-11T20:33:00 # Comment-out this line with a # if content is unchanged
---

Your opening text goes here.

## In-article heading --- it's an H2 because your title is the H1

And after another paragraph or two or three, you may want to add a subheading, which would be an H3, so it would be like the following.[^fnExample]

[^fnExample]: Also, if you want to do footnotes in Markdown, this is how it's done. There's code in the `.eleventy.js` file to handle it properly (including **not** encasing the body copy's footnote reference numbers in brackets, thus overriding what unfortunately is the typical behavior with the usual plugin for the `markdown-it` parser.)

### Subheading (H3)

Text here.

The following image content comes from my Cloudinary account and my `imgc` shortcode.

{% imgc 'Typography-scr-cap-2-2018-10-16_1344x200.jpg', 'Thin and dim text that is hard to read', 1344, 200 %}

{% imgc 'Typography-scr-cap-3-2018-10-16_1398x252.jpg', 'More thin and dim text that is hard to read',  1398, 252 %}

{% imgc 'Typography-scr-cap-4-2018-10-16_1398x164.jpg', 'Still more thin and dim text that is hard to read', 1398, 164 %}

Closing text. That ends Post 1!