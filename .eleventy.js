require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.dev'
});

module.exports = function(eleventyConfig) {
  eleventyConfig.addGlobalData('env', process.env);
  // eleventyConfig.addPlugin(require("./config/browsersync"));

  // eleventyConfig.addWatchTarget("src/css/")


  // https://www.11ty.dev/docs/copy/
  eleventyConfig.addPassthroughCopy("src/assets")

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",

    dir: {
      input: 'src',
      output: 'dist',
    }
  };
};
