# Developer Personal Portfolio :sparkles:

This is a repo for developers and engineers, offering a quick and seamless way to construct their own minimalistic, aesthetically pleasing, and serene portfolios. My personal site, hosted on suresh.im, is the same open-source project built with Next.js 14. It's designed to work effortlessly out of the box, allowing users to customize their portfolios with a simple tweak of data in a single file.

## Features

- :dizzy: Minimal
- :rocket: Lightweight
- :globe_with_meridians: Static Generation
- :memo: Blog Included (MD Supported)
- :technologist: Projects/Career History showcase
- :zap: Extremely Fast (100/100 Performance Score on lighthight)
- :mag: SEO Optimized (Link/Card Preview on Sharing)

## How to use

You can directly clone the repo and change the src/constant/data.ts file to see the changes on the site. Here are the steps to do the same.

- Clone the repo

  ```
  git clone https://github.com/impoiler/suresh.im.git
  ```

- cd into the cloned repo

  ```
  cd /suresh.im
  ```

- Start editing as you want to.

## Important guides

- I've used [contentlayer](https://contentlayer.dev/) for blogs, which supports mdx and static builds, so we can write blogs under the src/content/blogs directory, and it'll auto-pickup the blogs from there.

- For link preview while sharing on social media, that's under the public folder; just replace og.png with your own [OG](https://www.freecodecamp.org/news/what-is-open-graph-and-how-can-i-use-it-for-my-website) image.

- I've used pnpm as a package manager but feel free to use any as per your need.
