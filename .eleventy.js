module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");

  // Enlaces estilo Obsidian [[Página]] — resuelve por título, para que
  // las notas funcionen igual en la web y en el vault de Obsidian.
  eleventyConfig.addPlugin(
    require('@photogabble/eleventy-plugin-interlinker'),
    {
      deadLinkReport: 'console'
    }
  );

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
