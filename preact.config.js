import preactCliTypeScript from "preact-cli-plugin-typescript";
import CopyWebpackPlugin from "copy-webpack-plugin";

const preactCLIStyledComponents = (config, env, helpers) => {
  const DefinePlugin = helpers.getPluginsByName(config, "DefinePlugin")[0];
  DefinePlugin.plugin.definitions["process.env.SSR"] = String(env.ssr);
  const babel = config.module.loaders.filter(loader => loader.loader === "babel-loader")[0].options;
  babel.plugins.push([
    require.resolve("babel-plugin-styled-components"),
    {
      displayName: !env.isProd,
      ssr: env.ssr,
      pure: true
    }
  ]);
};

export default {
  plugins: [preactCliTypeScript, preactCLIStyledComponents],
  webpack(config) {
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
