import preactCliTypeScript from "preact-cli-plugin-typescript";
import CopyWebpackPlugin from "copy-webpack-plugin";

export default {
  plugins: [preactCliTypeScript],
  webpack(config, env, helpers) {
    const DefinePlugin = helpers.getPluginsByName(config, "DefinePlugin")[0];
    DefinePlugin.plugin.definitions["process.env.SSR"] = String(env.ssr);

    const babelLoader = config.module.rules.filter(({ loader }) => loader === "babel-loader")[0];

    // inject styled-components ssr plugin:
    babelLoader.options.plugins.push([require.resolve("babel-plugin-styled-components"), { displayName: !env.isProd }]);

    // expensive/pointless modules to run through Babel:
    const skipParsing = /(node_modules|~)\/(react-icons)\//gi;
    babelLoader.exclude = [skipParsing].concat(babelLoader.exclude || []);

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
