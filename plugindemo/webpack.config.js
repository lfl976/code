const RemoveFilePlugin = require("./remove-file-plugin");
module.exports = (env) => {
  console.log(env);
  return {
    mode: env.development ? "development" : "production",
    module: {
      rules: [
        {
          test: /(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
    plugins: [new RemoveFilePlugin()],
  };
};
