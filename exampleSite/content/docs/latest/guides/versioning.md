---
title: Versioning
weight: 4
---

Hudocs supports multilingual documentation sites through separate directories within `content/docs/`. Each directory represents an isolated version and maintains its own content, navigation structure, and search index.

## Version Architecture

In Hudocs, documentation versions correspond to subdirectories within `content/docs/`:

```text
content/
└── docs/
    ├── _index.md
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

Hugo manages each version directory as an independent subsection under `docs`. This keeps the content, sidebar tree, and search index of each version separated.

## Version Selector

The version selector in the header displays the identifier of the current version, such as `latest` or `1.8`. Selecting it displays the available versions.

### Automatic Version Detection

If you do not define the `versions` parameter, Hudocs automatically detects versions from the subsections under `content/docs/`:

```html
<a href="/docs/latest/">latest</a>
<a href="/docs/1.8/">1.8</a>
<a href="/docs/1.0/">1.0</a>
```

### Explicit Version List

To define which versions appear in the selector and set their order, configure `docs_versions`:

```toml
docs_versions = ["latest", "1.8", "1.0"]
```

## Creating and Archiving Versions

To publish a new version while keeping previous versions available:

{{% steps %}}
1. ### Archive the previous version

   Duplicate `latest/` and rename it with the identifier of the version being released:

   ```bash
   cp -R content/docs/latest content/docs/1.8
   ```

2. ### Update the current version

   Modify the files in `content/docs/latest/` to document the new version.

3. ### Verify links and redirects

   Check that the `_index.md` file in each version points to the corresponding starting page:

   ```markdown
   ---
   layout: redirect
   redirect: "/getting-started/installation"
   ---
   ```
{{% /steps %}}

## Documentation Landing Page

When a user accesses `/docs/`, Hudocs uses `layouts/docs/list.html` to display a directory page with the list of documented versions.
