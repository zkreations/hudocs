---
title: Columns
weight: 4
---

The `columns` shortcode lets you organize content into equal-width columns that adapt to the screen size. Use `---` or `<!-- split -->` to separate each column.

## Basic usage

Write your content blocks separated by `---`:

````markdown
{{</* columns */>}}
Whales are enormous mammals that live in the oceans.
They are known for their great size, intelligence, and calm nature.
---
They feed on small organisms such as fish and krill.
They also communicate through sounds that can travel great distances.
{{</* /columns */>}}
````

### Result

{{< columns >}}
Whales are enormous mammals that live in the oceans.
They are known for their great size, intelligence, and calm nature.
---
They feed on small organisms such as fish and krill.
They also communicate through sounds that can travel great distances.
{{< /columns >}}

## Parameters

| Parameter | Position | Type                | Required | Description                             |
| :-------- | :------: | :------------------ | :------: | :-------------------------------------- |
| `class`   |    `0`   | {{< type string >}} |    No    | Additional CSS class for the container. |

## Multiple columns

You can add as many columns as needed by using additional `---` separators. Each column processes its content via `RenderString`, so it supports Markdown:

````markdown
{{</* columns */>}}
#### 1. Plan

Define the requirements and technical specifications.
---
#### 2. Build

Write the code and run the validation tests.
---
#### 3. Deploy

Publish via your CI/CD pipeline.
{{</* /columns */>}}
````

### Result

{{< columns >}}
#### 1. Plan

Define the requirements and technical specifications.
---
#### 2. Build

Write the code and run the validation tests.
---
#### 3. Deploy

Publish via your CI/CD pipeline.
{{< /columns >}}

## Alternative separator

You can use `<!-- split -->` instead of `---` if your content contains horizontal rules:

````markdown
{{</* columns */>}}
First column with content.
<!-- split -->
Second column with content.
{{</* /columns */>}}
````

## Responsive behavior

Columns are displayed side by side on desktop screens and stack vertically on small screens. The width of each column is distributed using Flexbox.
