import type { Preview } from "@storybook/react";
import "../../curso-template/src/index.css"; // Import global styles

// Mock for BridgeRestApi (AVAMEC)
if (typeof window !== "undefined") {
  (window as any).BridgeRestApi = class {
    obterDadosGenericos() {
      return Promise.resolve({ data: [] });
    }
    registrarDadosGenericos() {
      return Promise.resolve();
    }
    registrarPorcentagemConclusaoUnidade() {
      return Promise.resolve();
    }
  };
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
