import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import svgr from "vite-plugin-svgr";

const config: StorybookConfig = {
  stories: [
    "../../../packages/ui/src/**/*.mdx",
    "../../../packages/ui/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    config.plugins = config.plugins || [];
    // packages/ui's tsup build uses esbuild-plugin-svgr with NO filter — every
    // `.svg` import anywhere in the package becomes a React component (never a
    // URL string). Storybook must match that exactly, or a component that looks
    // fine here can be silently broken in the published package (this bit us
    // once already: a curated include-list here drifted out of sync with what
    // was actually published). Apply svgr to every `.svg` under packages/ui/src.
    config.plugins.push(
      svgr({
        include: ["**/packages/ui/src/**/*.svg"],
      })
    );

    config.server = config.server || {};
    config.server.fs = config.server.fs || {};
    config.server.fs.allow = [
      ...(config.server.fs.allow || []),
      path.resolve(__dirname, "../../../"),
    ];

    return config;
  },
};
export default config;
