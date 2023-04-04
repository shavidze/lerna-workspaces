const path = require("path");
const { loaderByName, getLoader } = require("@craco/craco");
const packages = [];
packages.push(path.join(__dirname, "../components"));
module.exports = {
  overrideWebpackConfig: ({
    webpackConfig,
    cracoConfig,
    pluginOptions,
    context: { env, paths },
  }) => {
    console.log("aqqaaa");
    const { isFound, match } = getLoader(
      webpackConfig,
      loaderByName("babel-loader")
    );
    if (isFound) {
      const include = Array.isArray(match.loader.include)
        ? match.loader.include
        : [match.loader.include];

      match.loader.include = include.concat(packages);
    }
    return webpackConfig;
    ç;
  },
};
