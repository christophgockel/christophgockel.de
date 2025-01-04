const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("css/almond.min.css");
  eleventyConfig.addPassthroughCopy("assets/images");

  eleventyConfig.addPlugin(eleventyPluginFilesMinifier);

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  }
};
