---
title: Page Links
weight: 5
---

The `pagelink` shortcode generates a link with a title, description, and icon to highlight related pages or external resources.

## Basic usage

Use named parameters to define the destination, title, description, and icon:

```markdown
{{</* pagelink href="latest/guides" title="Guides" description="Get started with Hudocs" icon="book-open" */>}}
{{</* pagelink href="https://gohugo.io/" title="Hugo Documentation" description="Official guides" */>}}
```

### Result

{{< pagelink href="latest/guides" title="Guides" description="Get started with Hudocs" icon="book-open" >}}

{{< pagelink href="https://gohugo.io/" title="Hugo Documentation" description="Official Hugo guides" >}}

## Parameters

| Parameter     | Position | Type   | Required | Description                                                      |
| :------------ | :------: | :----- | :------: | :--------------------------------------------------------------- |
| `href`        |    `0`   | string |   Yes    | Destination path or external URL.                                |
| `title`       |    `1`   | string |   Yes    | Main title of the link.                                          |
| `description` |    `2`   | string |    No    | Descriptive text. Also accepts `subtitle` as an alias.           |
| `icon`        |    `3`   | string |    No    | Name of a [Meteor Icons](https://meteoricons.com/) icon.         |
| `rel`         |    `4`   | string |    No    | Custom value for the `rel` attribute.                            |

## Default icons

If you provide an icon via `icon`, it replaces the default value. If no `icon` is specified, the shortcode selects an icon based on the link type:

* `chain` for internal links.
* `arrow-up-right` for external links.

{{< pagelink href="latest/markdown" title="Markdown" description="Markdown syntax" >}}

## Internal and external links

The shortcode delegates destination resolution to the `resolve-link` partial. For internal paths, `resolve-link` generates the URL corresponding to the active language. For external URLs, `resolve-link` determines the `target` and `rel` attributes applied to the link.

## Validation

The `href` and `title` parameters are required. If either is missing, Hugo stops the build and reports the missing parameter.

The `description` parameter is optional. If not provided, the card is displayed without descriptive text.
