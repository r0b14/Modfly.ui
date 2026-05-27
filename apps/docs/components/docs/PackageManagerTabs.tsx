"use client";

import React, { useState } from "react";
import { DocCodeBlock } from "./DocCodeBlock";

type PM = "pnpm" | "npm" | "yarn" | "bun";

interface PackageManagerTabsProps {
  package: string;
  dev?: boolean;
}

const COMMANDS: Record<PM, (pkg: string, dev: boolean) => string> = {
  pnpm: (pkg, dev) => `pnpm add ${dev ? "-D " : ""}${pkg}`,
  npm:  (pkg, dev) => `npm install ${dev ? "--save-dev " : ""}${pkg}`,
  yarn: (pkg, dev) => `yarn add ${dev ? "--dev " : ""}${pkg}`,
  bun:  (pkg, dev) => `bun add ${dev ? "--dev " : ""}${pkg}`,
};

const PMS: PM[] = ["pnpm", "npm", "yarn", "bun"];

export function PackageManagerTabs({ package: pkg, dev = false }: PackageManagerTabsProps) {
  const [active, setActive] = useState<PM>("pnpm");

  return (
    <div className="tabs">
      <div className="tabs-head">
        {PMS.map((pm) => (
          <button
            key={pm}
            className={`tab-btn${active === pm ? " on" : ""}`}
            onClick={() => setActive(pm)}
          >
            {pm}
          </button>
        ))}
      </div>
      {PMS.map((pm) => (
        <div key={pm} className={`tab-pane${active === pm ? " on" : ""}`}>
          <DocCodeBlock raw={COMMANDS[pm](pkg, dev)}>
            <span className="code-prompt">$ </span>
            <span>{COMMANDS[pm](pkg, dev)}</span>
          </DocCodeBlock>
        </div>
      ))}
    </div>
  );
}
