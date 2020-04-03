import preactCliTypeScript from "preact-cli-plugin-typescript";
import CopyWebpackPlugin from "copy-webpack-plugin";

export default {
  plugins: [preactCliTypeScript],
  webpack(config, env, helpers) {
    const DefinePlugin = helpers.getPluginsByName(config, "DefinePlugin")[0];
    DefinePlugin.plugin.definitions["process.env.SSR"] = String(env.ssr);
    const { plugins } = config.module.rules.filter(({ loader }) => loader === "babel-loader")[0].options;
    plugins.push([
      require.resolve("babel-plugin-styled-components"),
      {
        displayName: !env.isProd,
        ssr: env.ssr
      }
    ]);
    config.plugins.push(
      new CopyWebpackPlugin([
        {
          context: `${__dirname}/public`,
          from: `*.*`,
          ignore: ["*.html"]
        }
      ])
    );
  }
};
