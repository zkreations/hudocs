---
title: Page Links
weight: 5
---

The `pagelink` shortcode generates a link with a title, description, and icon to highlight related pages or external resources.

## Basic usage

Use named parameters to define the destination, title, description, and icon:

```markdown
{{</* pagelink href="/docs/latest/guides" title="Guides" description="Get started with Hudocs" icon="book-open" */>}}
{{</* pagelink href="https://gohugo.io/" title="Hugo Documentation" description="Official guides" */>}}
```

### Result

{{< pagelink href="/docs/latest/guides" title="Guides" description="Get started with Hudocs" icon="book-open" >}}

{{< pagelink href="https://gohugo.io/" title="Hugo Documentation" description="Official Hugo guides" >}}

## Parameters

| Parameter     | Position | Type                | Required | Description                                                      |
| :------------ | :------: | :------------------ | :------: | :--------------------------------------------------------------- |
| `href`        |    `0`   | {{< type string >}} |   Yes    | Destination path or external URL.                                |
| `title`       |    `1`   | {{< type string >}} |   Yes    | Main title of the link.                                          |
| `description` |    `2`   | {{< type string >}} |    No    | Descriptive text. Also accepts `subtitle` as an alias.           |
| `icon`        |    `3`   | {{< type string >}} |    No    | Name of a [Meteor Icons](https://meteoricons.com/) icon.         |
| `rel`         |    `4`   | {{< type string >}} |    No    | Custom value for the `rel` attribute.                            |

## External links and icons

The `icon` parameter is optional. If not specified, no icon is shown at the beginning.

For external links, the shortcode automatically displays an indicator on the right side. If a custom `icon` is also defined, both icons are displayed independently:

{{< pagelink href="https://gohugo.io/" title="Hugo Documentation" description="Official guides with a custom icon" icon="hugo" >}}

## Internal and external links

The shortcode delegates destination resolution to the `resolve-link` partial. For internal paths, `resolve-link` generates the URL corresponding to the active language. For external URLs, `resolve-link` determines the `target` and `rel` attributes applied to the link.

## Validation

The `href` and `title` parameters are required. If either is missing, Hugo stops the build and reports the missing parameter.

The `description` parameter is optional. If not provided, the card is displayed without descriptive text.
