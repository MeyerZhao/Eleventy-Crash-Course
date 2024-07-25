const fs = require("fs")
const NOT_FOUND_PATH = "dist/404.html"

module.exports = function (eleventyConfig) {
  eleventyConfig.setServerOptions({
    module: "@11ty/eleventy-server-browsersync",

    // Default Browsersync options shown:
    port: 8080,

    // Additional files to watch that will trigger server updates
    // Accepts an Array of file paths or globs (passed to `chokidar.watch`).
    // Works great with a separate bundler writing files to your output folder.
    // e.g. `watch: ["_site/**/*.css"]`
    watch: ["dist/**/*.css"],

    open: false,
    notify: false,
    ui: false,
    ghostMode: false,
    index: "index.html",
    // index: "bootstrap.html",
    // index: "2024-05-28.html",

    // Opt-out of the Browsersync snippet
    // snippet: false,

    callbacks: {
      ready: function (err, bs) {
        bs.addMiddleware("*", (req, res) => {
          if (!fs.existsSync(NOT_FOUND_PATH)) {
            throw new Error(
              `Expected a \`${NOT_FOUND_PATH}\` file but could not find one. Did you create a 404.html template?`
            )
          }

          const content_404 = fs.readFileSync(NOT_FOUND_PATH)
          // Add 404 http status code in request header.
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" })
          // Provides the 404 content without redirect.
          res.write(content_404)
          res.end()
        })
      },
    },

    // callbacks: {
    //   /**
    //    * This 'ready' callback can be used
    //    * to access the Browsersync instance
    //    */
    //   ready: function(err, bs) {

    //     // example of accessing URLS
    //     console.log(bs.options.get('urls'));

    //     // example of adding a middleware at the end
    //     // of the stack after Browsersync is running
    //     bs.addMiddleware("*", function(req, res) {
    //       res.writeHead(302, {
    //         location: "404.html"
    //       });
    //       res.end("Redirecting!");
    //     });
    //   }
    // }
  })

  // https://www.11ty.dev/docs/data-eleventy-supplied/#changing-your-project-default-permalinks
  // 想要改为resource.md写入/resource.html而不是/resource/index.html？请使用此配置 API 代码示例。
  // eleventyConfig.addGlobalData("permalink", () => {
  //   return (data) =>
  //     `${data.page.filePathStem}.${data.page.outputFileExtension}`
  // })
}
