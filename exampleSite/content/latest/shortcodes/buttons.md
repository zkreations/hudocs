---
title: Buttons
weight: 1
---

The `button` shortcode generates button-styled links to direct users to other documentation pages or external resources.

## Basic usage

Use named parameters to define the destination, label, and button options:

```markdown
{{</* button href="latest/getting-started" name="Get started" icon="rocket" type="primary" */>}}
{{</* button href="https://github.com/zkreations/hudocs" name="GitHub" icon="github" */>}}
```

### Result

{{< button href="latest/getting-started" name="Get started" icon="rocket" type="primary" >}}
{{< button href="https://github.com/zkreations/hudocs" name="GitHub" icon="github" >}}

## Parameters

| Parameter | Position | Type                | Required | Description                                                        |
| :-------- | :------: | :------------------ | :------: | :----------------------------------------------------------------- |
| `href`    |    `0`   | {{< type string >}} |   Yes    | Destination URL, internal or external.                             |
| `name`    |    `1`   | {{< type string >}} |   Yes    | Visible label. Also accepts `title` and `text` as aliases.         |
| `icon`    |    `2`   | {{< type string >}} |    No    | Name of a [Meteor Icons](https://meteoricons.com/) icon.           |
| `type`    |    `3`   | {{< type string >}} |    No    | Visual variant, such as `primary`.                                 |
| `rel`     |    `4`   | {{< type string >}} |    No    | Custom value for the `rel` attribute.                              |

## Positional syntax

Parameters can be provided by position in the order listed in the table:

```markdown
{{</* button "/latest/getting-started/installation/" "Get started" "rocket" "primary" "nofollow" */>}}
```

## Variants

### Standard button

Uses the appearance defined by the theme when no `type` is specified:

```markdown
{{</* button href="#demo" name="Download guide" */>}}
```

{{< button href="#demo" name="Download guide" >}}

### Primary button

The `primary` value generates the `btn-primary` class:

```markdown
{{</* button href="#demo" name="Quick install" type="primary" */>}}
```

{{< button href="#demo" name="Quick install" type="primary" >}}

## Validation

The `href` attribute and the button label are required. If `href` is missing or none of `name`, `title`, or `text` is provided, Hugo stops the build and reports the missing parameter.

## Link resolution

The shortcode delegates URL resolution and the `target` and `rel` attributes to the `resolve-link` partial. For internal paths, `resolve-link` uses `relLangURL` to generate the URL corresponding to the active language.
