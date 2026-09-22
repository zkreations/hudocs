---
title: Installation
weight: 1
---

**Hudocs** is a documentation theme for [Hugo](https://gohugo.io/) focused on multi-version documentation, allowing you to document multiple versions of a project within a single site.

Ultra lightweight — zero initial configuration.

## Prerequisites

Before installing Hudocs, make sure you have:

* **Hugo Extended** `0.164.0` or higher.
  * Hudocs uses Sass to compile its stylesheets.
  * Verify the installed version with `hugo version`
  * The output must include `extended`.
* **Git** installed and available in the terminal to clone the repository or manage submodules.

## Installation

### Git Submodule

A submodule lets you keep the Hudocs code separate from your site repository and update it whenever needed.

```bash
git submodule add https://github.com/zkreations/hudocs themes/hudocs
```

To update the submodule:

```bash
git submodule update --remote --merge
```

### Hugo Modules

Hugo Modules lets you manage Hudocs as a Go dependency.

{{< steps >}}
1. ### Initialize the module

   Initialize your site's module, replacing the path with your repository's:

   ```bash
   hugo mod init github.com/your-username/my-docs
   ```

2. ### Add Hudocs

   Add Hudocs to `hugo.toml`:

   ```toml
   theme = "github.com/zkreations/hudocs"
   ```

3. ### Download the module

   Download Hudocs and its dependencies:

   ```bash
   hugo mod get github.com/zkreations/hudocs
   ```
{{< /steps >}}

### Direct Clone

You can clone Hudocs directly into `themes/` if you need to modify its source code:

```bash
git clone https://github.com/zkreations/hudocs themes/hudocs
```

## Example Site

The `exampleSite` directory contains a configuration and content you can use as a starting point.

When using Git Submodules or Direct Clone, copy the example files directly from the `themes/` directory:

{{< steps >}}
1. ### Copy the example files

   Copy the example configuration and content to the root of your project:

   ```bash
   cp themes/hudocs/exampleSite/hugo.toml .
   cp -R themes/hudocs/exampleSite/content .
   ```

   If you installed via Hugo Modules, you can download or copy these files directly from the [GitHub repository](https://github.com/zkreations/hudocs/tree/main/exampleSite).

2. ### Start the server

   Start the development server:

   ```bash
   hugo server
   ```

3. ### Open the site

   Open `http://localhost:1313/` in your browser.
{{< /steps >}}

## Next Steps

See the [Configuration](/docs/latest/getting-started/configuration/) guide to set up theme options, branding, and multilingual support.