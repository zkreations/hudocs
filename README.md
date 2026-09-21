![cover](https://raw.githubusercontent.com/zkreations/hudocs/main/images/cover.png)

<p align="center">
  <a href="https://github.com/zkreations/hudocs/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-teal" alt="License"></a>
  <a href="https://github.com/zkreations/hudocs/releases"><img src="https://img.shields.io/github/v/release/zkreations/hudocs" alt="Last Release"></a>
  <a href="https://app.netlify.com/projects/hudocs/deploys"><img src="https://api.netlify.com/api/v1/badges/4f5686e0-d6f8-4ff8-ba4e-901d19644dfe/deploy-status" alt="Netlify Status"></a>
</p>

<p align="center">
  <a href="https://hudocs.com/"><strong>View a live demo →</strong></a>
</p>

---

**Hudocs** is a modern, lightweight, and blazing-fast documentation theme for [Hugo](https://gohugo.io/). Designed for developers and technical writers, Hudocs delivers the rich features of modern documentation platforms—without Node.js dependencies, complex multi-branch deployment pipelines, or runtime bloat.

## Why Hudocs?

* **Single-Version & Multi-Version Support:** Adaptable out of the box. Document continuous products (SaaS, web apps) as a single version or maintain multiple historical versions (`1.0`, `1.8`, `latest`) in a single deployment with automated version switching and isolated search indices.
* **Zero Node.js / Zero-Ops:** Powered exclusively by the native Hugo Extended asset pipeline (`css.Sass` and `js.Build`). No `package.json`, no `node_modules`, and no complex CI/CD orchestration.
* **Blazing Fast Builds:** Take full advantage of Hugo's compilation speed. Build comprehensive documentation across multiple versions and languages in milliseconds.
* **Integrated Client-Side Search:** Instant, local search modal powered by [FlexSearch](https://github.com/nextapps-de/flexsearch), generating isolated index files per language and version at build time.
* **Performance & Security First:** Optimized for [Core Web Vitals](https://pagespeed.web.dev/report?url=https://hudocs.com) with an A+ Security rating on [Mozilla Observatory](https://observatory.mozilla.org/analyze/hudocs.com).
* **Multilingual Ready (i18n):** Native multi-language support linked automatically through Hugo's i18n conventions.
* **Technical Writing Toolkit:** Includes dark/light scheme switcher, CSS `@layer` tokens architecture, customizable code blocks, tabs, steps, hints/alerts, and [Meteor Icons](https://meteoricons.com/) integration.

## Documentation

The complete Hudocs documentation, including installation, configuration, options, shortcodes, translations, and customization, is available at [hudocs.com](https://hudocs.com/docs/latest/getting-started/installation/).

## Documentation Structure

Hudocs automatically adapts to your workflow based on your directory layout:

### 1. Single-Version Mode (Continuous / SaaS)

Ideal for products that evolve continuously without breaking API changes. Place documentation directly inside `content/docs/`:

```text
content/
└── docs/
    ├── _index.md
    ├── getting-started.md
    └── configuration.md
```

Hudocs detects single-version mode automatically, keeping navigation and URLs clean without version dropdowns.

### 2. Multi-Version Mode (Libraries / SDKs / APIs)

Ideal for software with semantic versioning where users need reference docs for older releases. Organize versions as subdirectories inside `content/docs/`:

```text
content/
└── docs/
    ├── latest/
    │   ├── _index.md
    │   └── ...
    ├── 1.8/
    │   ├── _index.md
    │   └── ...
    └── 1.0/
        ├── _index.md
        └── ...
```

Hudocs generates an isolated navigation tree, search index, and a version selector dropdown for each release in the same build.

## Requirements

- Hugo 0.164.0 or higher (Extended version)
- Git - [Install Git](https://git-scm.com/downloads)

## Install

In the root directory of your Hugo project, add Hudocs as a Git submodule:

```bash
git submodule add https://github.com/zkreations/hudocs themes/hudocs
```

## Quick Start

To bootstrap your documentation quickly using the included sample site:

```bash
# Copy example content
cp -R themes/hudocs/exampleSite/content .

# Copy example configuration
cp themes/hudocs/exampleSite/hugo.toml .

# Start the local development server
hugo serve
```

## Contributions

Contributions are welcome! Please keep these principles in mind:

- Keep configuration simple and avoid unnecessary complexity.
- Favor native HTML and CSS over JavaScript wherever possible.
- Respect user-level customization hooks and tokens.

## Support

If you find this project useful, consider [starring it on GitHub](https://github.com/zkreations/hudocs/stargazers) or [buying me a coffee](https://ko-fi.com/zkreations) to support ongoing maintenance.

## License

**Hudocs** is licensed under the [MIT License](LICENSE).