# My Saber Site

Saber is a static website generator for building blazing fast, modern websites with Vue.js. It's simple to use, blog-aware, and fully extensible, you can create pages using the data you want, e.g. local filesystem, APIs, SaaS services, headless CMS.

Saber by default loads pages from your filesystem, so you can start by populating some `.vue` or `.md` files in the `./pages` folder, and they will automatically become web pages, like this file.

You can even use Vue in Markdown like this:

How many people like Saber? <button @click="people++">{{ people }}</button> and counting!

## Using Layouts

Layouts are Vue components that wrap around your page. They allow you to have the source code for your template in one place so you don’t have to repeat things like your navigation and footer on every page.

You can use page attributes to set layout, in a Markdown page, page attributes are represented as front matter:

```markdown {highlightLines:[2]}
---
layout: page
---

This page uses the `page` layout.
```

Check out the [About](./about.md) page which uses the `page` layout.

## Learn More

Check out the [Introduction](https://saber.land/blog/saber/) post.

<script>
export default {
  data() {
    return {
      people: 1024
    }
  }
}
</script>
