import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import svgr from "vite-plugin-svgr";

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
    config.plugins = config.plugins || [];
    // Only these components rely on SVGs being transformed into React
    // components (matching the esbuild-plugin-svgr behavior used by
    // packages/ui's tsup build). Every other component in the design
    // system imports SVGs as raw URLs (<img src={...}>), which must
    // keep getting Vite's default asset handling.
    config.plugins.push(
      svgr({
        include: [
          "**/atoms/buttonLink/assets/*.svg",
          "**/atoms/buttonPdfDownload/assets/*.svg",
          "**/atoms/check/assets/*.svg",
        ],
      })
    );

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
