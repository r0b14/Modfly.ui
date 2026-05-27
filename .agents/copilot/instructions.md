# GitHub Copilot Instructions

### Project Rules
- **Monorepo**: Always respect the workspace boundaries. Do not import from `apps/` into `packages/`.
- **Components**: Follow the Atomic Design structure in `packages/ui/src/components`.
- **Naming**: Use PascalCase for components and folders.
- **Tailwind**: Use utility classes. Avoid inline styles or complex Emotion/CSS-in-JS unless strictly necessary.

### Path Mapping
- Library: `packages/ui`
- Legacy: `packages/@legado`
- App: `apps/curso-template`
