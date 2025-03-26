const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("css/almond.min.css");
  eleventyConfig.addPassthroughCopy("assets/images");

  eleventyConfig.addPlugin(eleventyPluginFilesMinifier);

  eleventyConfig.addNunjucksGlobal("pathsHaveSameSection", pathsHaveSameSection);

  eleventyConfig.addCollection("articles", function (collectionApi) {
    return collectionApi.getFilteredByGlob("articles/*.md");
  });

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  }
};

// Function to decide whether page and link URLs share the same
// section in order to highlight the current navigation item.
// A section in this instance is the first element of a URLs path,
// e.g. "about" in "/about/" or "articles" in "/articles/example-article".
//
// Examples:
//     pathsHaveSameSection("/", "/") => true
//     pathsHaveSameSection("/about/", "/") => false
//     pathsHaveSameSection("/about/", "/about/") => true
//     pathsHaveSameSection("/articles/", "/articles/example-article") => true
function pathsHaveSameSection(pageUrl, linkUrl) {
  const pageSection = firstSection(pageUrl);
  const linkSection = firstSection(linkUrl);

  return pageSection === linkSection;
}

function firstSection(path) {
  return path.split("/").filter(Boolean)[0];
}
