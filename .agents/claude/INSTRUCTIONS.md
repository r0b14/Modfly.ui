# Claude AI Instructions

You are assisting in the development of **Modfly UI**, a component library for e-learning.

### Architectural Context
This is a **monorepo** using pnpm and Turborepo.
- App projects are in `apps/`.
- Shared packages are in `packages/`.

### Guidelines
1. **Separation of Concerns**: Components in `packages/ui` must be generic and not contain course-specific content.
2. **Styling**: Prefer Tailwind CSS.
3. **Legacy Migration**: When asked to help with migration, look at `packages/@legado` for inspiration but implement modern, type-safe versions in `packages/ui`.
4. **Tooling**: We use `tsup` for bundling and `vitest` for testing.
