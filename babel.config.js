module.exports = function (api) {
    api.cache(true);
    let plugins = [
      ["@babel/plugin-proposal-class-properties"]//for static prop
    ];
    let presets = [
      "@babel/preset-env",
      "@babel/preset-react"
    ];
    return {
      presets,
      plugins
    };
  }
