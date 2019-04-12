# My Saber Site

Saber is a static website generator for building blazing fast, modern websites with Vue.js.

You can start by populating some `.vue` or `.md` files in the `./pages` folder, and they will automatically become web pages, like this file.

## Using Layouts

Layouts are Vue components that wrap around your page. They allow you to have the source code for your template in one place so you don’t have to repeat things like your navigation and footer on every page.

You can use page attributes to set layout, in a Markdown page, page attributes are represented as front matter:

```markdown
---
layout: page
---

This page uses the `page` layout.
```

Check out the [About](./about.md) page which uses the `page` layout.

## Learn More

Check out the [Introduction](https://saber.land/blog/saber/) post.
