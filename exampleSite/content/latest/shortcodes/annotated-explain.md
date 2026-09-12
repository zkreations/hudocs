---
title: Annotations
weight: 2
---

The `annotated` and `explain` shortcodes let you pair a content element with an explanatory note. You can use them with code blocks, tabs, or tables.

## Basic usage

The `annotated` shortcode acts as the container and `explain` adds the explanatory note. The `explain` shortcode must be used directly inside `annotated`.

````markdown
{{%/* annotated */%}}
```javascript
console.log("Hello world");
```
{{%/* explain */%}}
Explanatory note.
{{%/* /explain */%}}
{{%/* /annotated */%}}
````

### Result

{{% annotated %}}
````javascript
console.log("Hello world");
````
{{% explain %}}
Explanatory note.
{{% /explain %}}
{{% /annotated %}}

## Parameters

### annotated

| Parameter | Position | Type   | Required | Description                              |
| :-------- | :------: | :----- | :------: | :--------------------------------------- |
| `class`   |    `0`   | string |    No    | Additional CSS class for the container.  |

### explain

| Parameter | Position | Type   | Required | Description                          |
| :-------- | :------: | :----- | :------: | :----------------------------------- |
| `class`   |    `0`   | string |    No    | Additional CSS class for the note.   |

## Code blocks

Use `annotated` to pair a code block with its explanation:

````markdown
{{%/* annotated */%}}
```bash
npm install @example/sdk
```
{{%/* explain */%}}
This command installs the `@example/sdk` package via npm.
{{%/* /explain */%}}
{{%/* /annotated */%}}
````

{{% annotated %}}
````bash
npm install @example/sdk
````
{{% explain %}}
This command installs the `@example/sdk` package via npm.
{{% /explain %}}
{{% /annotated %}}

## Tabs

You can combine `annotated` with `tabs` to attach a shared explanation to multiple tabs:

````markdown
{{%/* annotated */%}}
{{%/* tabs */%}}
{{%/* tab "Greeting" */%}}
Hello, this is an example of a shared explanation across multiple tabs.
{{%/* /tab */%}}
{{%/* tab "Farewell" */%}}
Goodbye, this is an example of a shared explanation across multiple tabs.
{{%/* /tab */%}}
{{%/* /tabs */%}}
{{%/* explain */%}}
This is an example of a shared explanation across multiple tabs.
{{%/* /explain */%}}
{{%/* /annotated */%}}
````

{{% annotated %}}
{{% tabs %}}
{{% tab "Greeting" %}}
Hello, this is an example of a shared explanation across multiple tabs.
{{% /tab %}}
{{% tab "Farewell" %}}
Goodbye, this is an example of a shared explanation across multiple tabs.
{{% /tab %}}
{{% /tabs %}}
{{% explain %}}
This is an example of a shared explanation across multiple tabs.
{{% /explain %}}
{{% /annotated %}}

## Code tabs

You can also combine `annotated` with `tabs` and `tab` to attach a shared explanation to multiple code tabs:

````markdown
{{%/* annotated */%}}
{{%/* tabs */%}}
{{%/* tab "npm" */%}}
```bash
npm install @example/sdk
```
{{%/* /tab */%}}
{{%/* tab "yarn" */%}}
```bash
yarn add @example/sdk
```
{{%/* /tab */%}}
{{%/* /tabs */%}}
{{%/* explain */%}}
This package requires Node.js 18 or higher.
{{%/* /explain */%}}
{{%/* /annotated */%}}
````

{{% annotated %}}
{{% tabs %}}
{{% tab "npm" %}}
````bash
npm install @example/sdk
````
{{% /tab %}}
{{% tab "yarn" %}}
````bash
yarn add @example/sdk
````
{{% /tab %}}
{{% /tabs %}}
{{% explain %}}
This package requires Node.js 18 or higher.
{{% /explain %}}
{{% /annotated %}}

## Tables

You can also pair a table with an explanatory note:

````markdown
{{%/* annotated */%}}
| Parameter | Type   | Default |
| :-------- | :----- | :------ |
| `timeout` | number | `3000`  |
| `retries` | number | `3`     |
{{%/* explain */%}}
The `timeout` value is expressed in milliseconds.
{{%/* /explain */%}}
{{%/* /annotated */%}}
````

{{% annotated %}}
| Parameter | Type   | Default |
| :-------- | :----- | :------ |
| `timeout` | number | `3000`  |
| `retries` | number | `3`     |
{{% explain %}}
The `timeout` value is expressed in milliseconds.
{{% /explain %}}
{{% /annotated %}}

## explain restriction

The `explain` shortcode must be placed directly inside `annotated`. If used outside this container, Hugo stops the build and reports the corresponding error.

````markdown
{{%/* explain */%}}
This note is not valid.
{{%/* /explain */%}}
````

The content of `explain` is processed via `.Page.RenderString`, so it supports Markdown.