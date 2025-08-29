module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("public");
  
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    }
  };
};

