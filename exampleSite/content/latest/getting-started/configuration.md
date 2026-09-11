---
title: Configuration
weight: 2
---

Hudocs is configured through your site's main **configuration file**. This page describes the available options for setting up the theme.

## Main Settings

### baseURL

Base URL of the documentation site in production.

```toml
baseURL = 'https://example.com/'
```

### enableRobotsTXT

When set to `true`, Hugo generates a `robots.txt` file for the site.

```toml
enableRobotsTXT = true
```

### enableInlineShortcodes

When set to `true`, Hugo allows the use of shortcodes inside other shortcodes. This option is required for Hudocs shortcodes to work correctly.

```toml
enableInlineShortcodes = true
```

### enableGitInfo

When set to `true`, Hugo retrieves information from the Git repository to provide data about the last commit, such as the last modified date of a page.

```toml
enableGitInfo = true
```

### disableKinds

Disables content types that are not needed for a documentation site. This prevents Hugo from generating taxonomy pages, term pages, and RSS feeds.

```toml
disableKinds = ["taxonomy", "term", "RSS"]
```

## Internationalization

To enable multiple languages, define the available languages in the `[languages]` section. Each language requires an identifier, a label, and a weight that determines the order.

```toml
[languages.en]
  label = "English"
  weight = 1

[languages.es]
  label = "Español"
  weight = 2
```

## Rendering and Markdown

Markdown and syntax highlighting options are configured through the `[markup]` section.

### HTML inside Markdown

Allows processing HTML included directly in Markdown files. This option is required for shortcodes and components that use HTML.

```toml
[markup.goldmark.renderer]
  unsafe = true
```

### Syntax Highlighting

Configures Chroma to generate CSS classes in code blocks instead of inline styles. This allows Hudocs to control code block styles according to the active visual theme.

```toml
[markup.highlight]
  noClasses = false
```

### Table of Contents

Defines the heading levels included in the table of contents. With this configuration, `<h2>` and `<h3>` headings are included.

```toml
[markup.tableOfContents]
  startLevel = 2
  endLevel = 3
```

## Theme Parameters

Hudocs-specific options are configured inside `[params]`.

### versions

Defines the versions that appear in the header's version selector and their order. If `versions` is not defined, Hudocs detects the root sections from `site.Sections` and uses them as versions.

```toml
versions = ["latest", "1.8", "1.0"]
```

### main_icon

Name of an icon from the [Meteor Icons](https://meteoricons.com/) catalog displayed next to the site title.

```toml
main_icon = "book-open"
```

### main_logo

Path to an image used as the logo. When defined, it replaces both the icon configured via `main_icon` and the site title.

```toml
main_logo = "images/logo.svg"
```

### github_repo_edit

Adds an edit link to the header of each article. The link uses the `pencil` icon and points to the corresponding directory in the GitHub repository.

```toml
github_repo_edit = "https://github.com/your-username/repository/tree/main/content"
```

### badge_text

Text displayed on badges enabled across pages. The default value is `New`.

```toml
badge_text = "New"
```

### badge_url

Destination URL for the globally configured badge.

```toml
badge_url = "https://example.com"
```

### pagination

Controls page navigation through "Previous" and "Next" links at the bottom of content. The default value is `true`.

```toml
pagination = true
```

### date_format

Defines the format used to display the last updated date of pages. The format follows Go's date rules. The default value is `2006-01-02`.

```toml
date_format = "2006-01-02"
```

### copyright

Defines the copyright text displayed by the theme. The value supports Markdown. You can use `{{Year}}` to automatically insert the current year.

```toml
copyright = "Created by [@zkreations](https://zkreations.com)"
```