---
title: Annotations
weight: 2
---

The `annotated` shortcode lets you pair a content element with an explanatory note. You can use it with code blocks, tabs, or tables. Use `---` or `<!-- split -->` to separate the main content from the note.

## Basic usage

Write your content, add `---` as a separator, then write the explanatory note:

````markdown
{{</* annotated */>}}
```javascript
console.log("Hello world");
```
---
Explanatory note.
{{</* /annotated */>}}
````

### Result

{{< annotated >}}
````javascript
console.log("Hello world");
````
---
Explanatory note.
{{< /annotated >}}

## Parameters

| Parameter | Position | Type   | Required | Description                              |
| :-------- | :------: | :----- | :------: | :--------------------------------------- |
| `class`   |    `0`   | string |    No    | Additional CSS class for the container.  |

## Code blocks

Use `annotated` to pair a code block with its explanation:

````markdown
{{</* annotated */>}}
```bash
npm install @example/sdk
```
---
This command installs the `@example/sdk` package via npm.
{{</* /annotated */>}}
````

{{< annotated >}}
````bash
npm install @example/sdk
````
---
This command installs the `@example/sdk` package via npm.
{{< /annotated >}}

## Tabs

You can combine `annotated` with `tabs` to attach a shared explanation to multiple tabs:

````markdown
{{</* annotated */>}}
{{</* tabs */>}}
{{</* tab "Greeting" */>}}
Hello, this is an example of a shared explanation across multiple tabs.
{{</* /tab */>}}
{{</* tab "Farewell" */>}}
Goodbye, this is an example of a shared explanation across multiple tabs.
{{</* /tab */>}}
{{</* /tabs */>}}
---
This is an example of a shared explanation across multiple tabs.
{{</* /annotated */>}}
````

{{< annotated >}}
{{< tabs >}}
{{< tab "Greeting" >}}
Hello, this is an example of a shared explanation across multiple tabs.
{{< /tab >}}
{{< tab "Farewell" >}}
Goodbye, this is an example of a shared explanation across multiple tabs.
{{< /tab >}}
{{< /tabs >}}
---
This is an example of a shared explanation across multiple tabs.
{{< /annotated >}}

## Code tabs

You can also combine `annotated` with `tabs` and `tab` to attach a shared explanation to multiple code tabs:

````markdown
{{</* annotated */>}}
{{</* tabs */>}}
{{</* tab "npm" */>}}
```bash
npm install @example/sdk
```
{{</* /tab */>}}
{{</* tab "yarn" */>}}
```bash
yarn add @example/sdk
```
{{</* /tab */>}}
{{</* /tabs */>}}
---
This package requires Node.js 18 or higher.
{{</* /annotated */>}}
````

{{< annotated >}}
{{< tabs >}}
{{< tab "npm" >}}
````bash
npm install @example/sdk
````
{{< /tab >}}
{{< tab "yarn" >}}
````bash
yarn add @example/sdk
````
{{< /tab >}}
{{< /tabs >}}
---
This package requires Node.js 18 or higher.
{{< /annotated >}}

## Tables

You can also pair a table with an explanatory note:

````markdown
{{</* annotated */>}}
| Parameter | Type   | Default |
| :-------- | :----- | :------ |
| `timeout` | number | `3000`  |
| `retries` | number | `3`     |
---
The `timeout` value is expressed in milliseconds.
{{</* /annotated */>}}
````

{{< annotated >}}
| Parameter | Type   | Default |
| :-------- | :----- | :------ |
| `timeout` | number | `3000`  |
| `retries` | number | `3`     |
---
The `timeout` value is expressed in milliseconds.
{{< /annotated >}}

## Alternative separator

You can use `<!-- split -->` instead of `---` if your content contains horizontal rules:

````markdown
{{</* annotated */>}}
```yaml
key: value
```
<!-- split -->
The `key` field accepts any string value.
{{</* /annotated */>}}
````

The content below the separator is processed via `.Page.RenderString`, so it supports Markdown.