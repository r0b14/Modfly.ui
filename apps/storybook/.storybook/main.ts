import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../../../packages/ui/src/**/*.mdx",
    "../../../packages/ui/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../../curso-template/src/components/templates/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../../curso-template/src/components/molecules/**/*.stories.@(js|jsx|mjs|ts|tsx)",
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
    config.server = config.server || {};
    config.server.fs = config.server.fs || {};
    config.server.fs.allow = [
      ...(config.server.fs.allow || []),
      path.resolve(__dirname, "../../../"),
    ];

    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@modfy": path.resolve(__dirname, "../../curso-template/src/@modfy"),
        "contexts": path.resolve(__dirname, "../../curso-template/src/contexts"),
        "@types": path.resolve(__dirname, "../../curso-template/src/@types"),
        "assets": path.resolve(__dirname, "../../curso-template/src/assets"),
      };
    }
    return config;
  },
};
export default config;
