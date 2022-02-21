import { CSSOptions, defineConfig, UserConfigExport } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import pxtorem from "postcss-pxtorem";
import postcssPresetEnv from "postcss-preset-env";

/**
 * 获取css配置
 * @param {string[]} browsers postcss-preset-env插件polyfill配置
 * @return {*} css配置
 */
function getCSSOptions(browsers: string[]) {
  const css: CSSOptions = {
    postcss: {
      plugins: [
        pxtorem({
          rootValue: 100,
          unitPrecision: 5,
          propList: ["*"],
          selectorBlackList: [],
          replace: true,
          mediaQuery: false,
          minPixelValue: 10,
          exclude: /node_modules/i
        }),
        postcssPresetEnv({
          browsers
        })
      ]
    }
  };
  return css;
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const config: UserConfigExport = {
    plugins: [vue(), vueJsx()]
  };

  if (command === "serve") {
    config.server = {
      open: true
    };
    config.css = getCSSOptions([
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]);
  } else {
    // command === 'build'
    config.css = getCSSOptions([
      "ie > 8",
      ">1%",
      "not dead",
      "not op_mini all"
    ]);
  }
  return config;
});
