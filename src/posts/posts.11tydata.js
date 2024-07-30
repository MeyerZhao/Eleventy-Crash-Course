module.exports = {
  "layout": "layout.njk",
  tags: "post",
  desc: 'no thing',
  eleventyComputed: {
    title: data => {
      var arr = data.page.filePathStem.split('/');
      // return `${arr[2]}-${arr[3]} - ${data.pageArr[2]}`
      return `Components-${arr[2]}`
    },
  }
}
