---
title: Configuration
icon: gear
weight: 2
---

This page is an example of how configuration options could be documented for a hypothetical version 1.0. The settings shown here are for demonstration purposes only.

## Basic configuration

The following example shows a basic configuration using a TOML file:

```toml
baseURL = "https://example.com/"
title = "My Documentation"

[params]
  description = "Example documentation site"
  author = "Example"
```

## Theme settings

Additional options could be defined under the `params` section:

```toml
[params]
  showVersion = true
  enableSearch = true
  showLastUpdated = true
```

### Show version

Controls whether the current documentation version is displayed:

```toml
[params]
  showVersion = true
```

### Enable search

Enables the search functionality in the documentation:

```toml
[params]
  enableSearch = true
```

### Show last updated date

Displays the last modification date on documentation pages:

```toml
[params]
  showLastUpdated = true
```

## Configuration file

A complete example configuration could look like this:

```toml
baseURL = "https://example.com/"
title = "My Documentation"

[params]
  description = "Example documentation site"
  author = "Example"
  showVersion = true
  enableSearch = true
  showLastUpdated = true
```

> **Note:** The configuration shown on this page is illustrative and does not correspond to an actual project or release.
