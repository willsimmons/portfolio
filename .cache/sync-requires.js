// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/will/Projects/portfolio/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-project-post-js": preferDefault(require("/Users/will/Projects/portfolio/src/templates/project-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/will/Projects/portfolio/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/will/Projects/portfolio/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/will/Projects/portfolio/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/will/Projects/portfolio/.cache/json/layout-index.json"),
  "projects-traveller.json": require("/Users/will/Projects/portfolio/.cache/json/projects-traveller.json"),
  "layout-index.json": require("/Users/will/Projects/portfolio/.cache/json/layout-index.json"),
  "projects-green-cast.json": require("/Users/will/Projects/portfolio/.cache/json/projects-green-cast.json"),
  "layout-index.json": require("/Users/will/Projects/portfolio/.cache/json/layout-index.json"),
  "projects-tendr.json": require("/Users/will/Projects/portfolio/.cache/json/projects-tendr.json"),
  "layout-index.json": require("/Users/will/Projects/portfolio/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/will/Projects/portfolio/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/Users/will/Projects/portfolio/.cache/json/layout-index.json"),
  "404.json": require("/Users/will/Projects/portfolio/.cache/json/404.json"),
  "layout-index.json": require("/Users/will/Projects/portfolio/.cache/json/layout-index.json"),
  "index.json": require("/Users/will/Projects/portfolio/.cache/json/index.json"),
  "layout-index.json": require("/Users/will/Projects/portfolio/.cache/json/layout-index.json"),
  "404-html.json": require("/Users/will/Projects/portfolio/.cache/json/404-html.json")
}