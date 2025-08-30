export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("public");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return dateObj.toLocaleString(undefined, {
      year: "numeric",
      month: "long"
      day: "numeric",
    });
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    }
  };
};
