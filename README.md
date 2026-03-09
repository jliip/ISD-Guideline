# ISD-Guideline

ISD Guideline is a bilingual (English + Chinese) wiki-style website for ISD students.

It focuses on practical first-time survival knowledge across:

- Software
- Hardware
- Design

The site is built with VitePress and deployed on GitHub Pages.

## Project Structure

```text
.
|- docs/
|  |- .vitepress/
|  |- software/
|  |- hardware/
|  |- design/
|  |- templates/
|  |- zh/
|     |- software/
|     |- hardware/
|     |- design/
|     |- templates/
|- .github/workflows/deploy.yml
|- information.md
|- package.json
```

## Local Development

### Requirements

- Node.js 20+
- npm

### Install

```bash
npm install
```

### Start local docs server

```bash
npm run docs:dev
```

### Build for production

```bash
npm run docs:build
```

### Preview production build

```bash
npm run docs:preview
```

## Content Writing Workflow

1. Pick one section in `docs/software`, `docs/hardware`, or `docs/design`.
2. Copy a template from `docs/templates` when creating a new article.
3. Add the Chinese version in the mirrored `docs/zh/...` path.
4. Update locale sidebar links in `docs/.vitepress/config.ts` when adding pages.

## Language Switch

- English pages are stored in root docs paths, such as `docs/software/vscode.md`.
- Chinese pages are stored in mirrored paths, such as `docs/zh/software/vscode.md`.
- The language switch is handled by VitePress locales and appears in the site navigation.

## GitHub Pages Deployment

Deployment uses GitHub Actions in `.github/workflows/deploy.yml`.

1. Push to `main` branch.
2. Action builds VitePress and deploys `docs/.vitepress/dist`.
3. Ensure repository Pages source is set to `GitHub Actions`.

The site base path is configured for project pages:

- `https://<username>.github.io/ISD-Guideline/`

## Notes

- `information.md` keeps the original project idea and planning context.
- Tutorial content is intentionally placeholder-first so you can fill in your own material.
