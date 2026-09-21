---
title: Tabs
weight: 7
---

The `tabs` and `tab` shortcodes let you organize content into selectable tabs. Each group maintains an active tab and processes its content as Markdown.

## Basic usage

Wrap each tab in a `tab` shortcode inside `tabs`:

````markdown
{{</* tabs */>}}
{{</* tab "macOS" */>}}
Welcome to the macOS installation
{{</* /tab */>}}
{{</* tab "Linux" */>}}
Welcome to the Linux installation
{{</* /tab */>}}
{{</* tab "Windows" */>}}
Welcome to the Windows installation
{{</* /tab */>}}
{{</* /tabs */>}}
````

### Result

{{< tabs >}}
{{< tab "macOS" >}}
Welcome to the macOS installation
{{< /tab >}}
{{< tab "Linux" >}}
Welcome to the Linux installation
{{< /tab >}}
{{< tab "Windows" >}}
Welcome to the Windows installation
{{< /tab >}}
{{< /tabs >}}

## Parameters

### tabs

| Parameter | Position | Type                | Required | Description                                      |
| :-------- | :------: | :------------------ | :------: | :----------------------------------------------- |
| `class`   |   `0`    | {{< type string >}} |    No    | Additional CSS class for the container.          |
| `id`      |    —     | {{< type string >}} |    No    | Custom group identifier for the radio controls.  |

### tab

| Parameter | Position | Type                | Required | Description                                                   |
| :-------- | :------: | :------------------ | :------: | :------------------------------------------------------------ |
| `title`   |    `0`   | {{< type string >}} |    No    | Tab label. Defaults to `Tab 1`, `Tab 2`, etc.                 |

## Code blocks

If a tab's content consists solely of a code block, the tabs are rendered merged with the code block.

````markdown
{{</* tabs */>}}
{{</* tab "pnpm" */>}}
```bash
pnpm add @example/sdk
```
{{</* /tab */>}}
{{</* tab "yarn" */>}}
```bash
yarn add @example/sdk
```
{{</* /tab */>}}
{{</* /tabs */>}}
````

### Result

{{< tabs >}}
{{< tab "pnpm" >}}
````bash
pnpm add @example/sdk
````
{{< /tab >}}
{{< tab "yarn" >}}
````bash
yarn add @example/sdk
````
{{< /tab >}}
{{< /tabs >}}

## tab restriction

The `tab` shortcode must be used directly inside `tabs`. If used outside this container, Hugo stops the build and reports the corresponding error:

````markdown
{{</* tab "Invalid" */>}}
This tab is not valid.
{{</* /tab */>}}
````

Additionally, `tab` requires a valid group identifier in order to generate the IDs for its controls and panels.
