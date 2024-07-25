const eleventyNavigationPlugin = require("@11ty/eleventy-navigation")
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
const pluginBundle = require("@11ty/eleventy-plugin-bundle");


module.exports = function (eleventyConfig) {
  // Official plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin)
  eleventyConfig.addPlugin(pluginSyntaxHighlight, {
    preAttributes: { tabindex: 0 },
  })

  // Copy the contents of the `public` folder to the output folder
	// For example, `./public/css/` ends up in `_site/css/`
	eleventyConfig.addPassthroughCopy({
		"./public/": "/",
		"./node_modules/prismjs/themes/prism-okaidia.css": "/css/prism-okaidia.css"
	});

  eleventyConfig.addPlugin(pluginBundle);
}

// // Order Post by Date
// eleventyConfig.addCollection("orderByDate", function(collectionApi) {
//   // return collectionApi.getAll().sort(function(a, b) {
//   //   return a.date - b.date;
//   // });
//   return collectionApi.getFilteredByTag("post").sort(function(a, b) {
//     return b.date - a.date ;
//   });
// });
