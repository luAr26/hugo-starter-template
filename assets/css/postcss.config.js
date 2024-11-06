const appDir = __dirname + "/../../";

module.exports = {
  plugins: [
    require("postcss-import")({
      path: [appDir],
    }),
    require("tailwindcss")(appDir + "assets/css/tailwind.config.js"),
    require("autoprefixer")({
      path: [appDir],
    }),
  ],
};
