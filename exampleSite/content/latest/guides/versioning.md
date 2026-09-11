---
title: Versioning
weight: 4
---

Hudocs supports multilingual documentation sites through separate directories within `content/`. Each directory represents a version and maintains its own content and navigation structure.

## Version Architecture

In Hudocs, each documentation version corresponds to a top-level directory within `content/`:

```text
content/
├── latest/         # Current active version (for example, v2.0)
│   ├── _index.md
│   └── ...
├── 1.8/            # Archived version 1.8
│   ├── _index.md
│   └── ...
└── 1.0/            # Legacy version 1.0
    ├── _index.md
    └── ...
```

Hugo manages each version directory as an independent section. This keeps the content and navigation tree of each version separate.

## Version Selector

The version selector in the header displays the identifier of the current version, such as `latest` or `1.8`. Selecting it displays the available versions.

### Automatic Version Detection

If you do not define the `versions` parameter in `hugo.toml`, Hudocs obtains the versions from the top-level sections in `site.Sections`:

```html
<!-- Generated from the content directories -->
<a href="/latest/">latest</a>
<a href="/1.8/">1.8</a>
<a href="/1.0/">1.0</a>
```

Versions are sorted in reverse chronological order.

### Explicit Version List

To define which versions appear in the selector and set their order, configure the `versions` parameter under `[params]`:

```toml
[params]
  versions = ["latest", "1.8", "1.0"]
```

## Creating and Archiving Versions

To publish a new version while keeping previous versions available:

{{% steps %}}
1. ### Archive the previous version

   Duplicate `latest/` and rename it with the identifier of the version being released:

   ```bash
   cp -R content/latest content/1.8
   ```

2. ### Update the current version

   Modify the files in `latest/` to document the new version.

3. ### Verify links and redirects

   Check that the `_index.md` file in each version points to the corresponding starting page:

   ```markdown
   ---
   layout: redirect
   redirect: "/getting-started/installation"
   ---
   ```
{{% /steps %}}

## Version Landing Page

When a user accesses the site root, Hudocs uses `layouts/index.html` to display a welcome page with the list of documented versions.
