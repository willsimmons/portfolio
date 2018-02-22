// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/will/Projects/portfolio/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/will/Projects/portfolio/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/will/Projects/portfolio/.cache/dev-404-page.js")),
  "component---src-pages-elements-js": preferDefault(require("/Users/will/Projects/portfolio/src/pages/elements.js")),
  "component---src-pages-generic-js": preferDefault(require("/Users/will/Projects/portfolio/src/pages/generic.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/will/Projects/portfolio/src/pages/index.js")),
  "component---src-pages-landing-js": preferDefault(require("/Users/will/Projects/portfolio/src/pages/landing.js"))
}

exports.json = {
  "layout-index.json": require("/Users/will/Projects/portfolio/.cache/json/layout-index.json"),
  "hello-world.json": require("/Users/will/Projects/portfolio/.cache/json/hello-world.json"),
  "layout-index.json": require("/Users/will/Projects/portfolio/.cache/json/layout-index.json"),
  "my-second-post.json": require("/Users/will/Projects/portfolio/.cache/json/my-second-post.json"),
  "layout-index.json": require("/Users/will/Projects/portfolio/.cache/json/layout-index.json"),
  "hi-folks.json": require("/Users/will/Projects/portfolio/.cache/json/hi-folks.json"),
  "layout-index.json": require("/Users/will/Projects/portfolio/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/will/Projects/portfolio/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/Users/will/Projects/portfolio/.cache/json/layout-index.json"),
  "elements.json": require("/Users/will/Projects/portfolio/.cache/json/elements.json"),
  "layout-index.json": require("/Users/will/Projects/portfolio/.cache/json/layout-index.json"),
  "generic.json": require("/Users/will/Projects/portfolio/.cache/json/generic.json"),
  "layout-index.json": require("/Users/will/Projects/portfolio/.cache/json/layout-index.json"),
  "index.json": require("/Users/will/Projects/portfolio/.cache/json/index.json"),
  "layout-index.json": require("/Users/will/Projects/portfolio/.cache/json/layout-index.json"),
  "landing.json": require("/Users/will/Projects/portfolio/.cache/json/landing.json")
}