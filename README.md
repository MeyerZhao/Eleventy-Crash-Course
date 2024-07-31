# Eleventy-Crash-Course

## url通用过滤器
https://www.11ty.dev/docs/filters/url/

```html
<a href="{{ '/myDir/' | url }}">Liquid or Nunjucks Link (from string)</a>
<a href="{{ post.url | url }}">Liquid or Nunjucks Link (from variable)</a>
```

移除
```bash
"watch:eleventy": "eleventy --serve --pathprefix=Eleventy-Crash-Course --quiet",
"build:eleventy": "NODE_ENV=production eleventy --pathprefix=Eleventy-Crash-Course",
```

```bash
"watch:eleventy": "eleventy --serve --quiet",
"build:eleventy": "NODE_ENV=production eleventy",
```

## [Configuration](https://www.11ty.dev/docs/config/)
### 部署到具有路径前缀的子目录
Deploy to a subdirectory with a Path Prefix

**.eleventy.js**
```js
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

	return {
		pathPrefix: "/eleventy-base-blog/",
	};
};
```

```bash
npx @11ty/eleventy --pathprefix=eleventy-base-blog
```



## https://transform.tools/css-to-js



