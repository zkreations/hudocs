---
title: Columns
weight: 4
---

The `columns` and `column` shortcodes let you organize content into equal-width columns that adapt to the screen size.

## Basic usage

Wrap each content block in a `column` shortcode inside `columns`:

````markdown
{{</* columns */>}}
{{</* column */>}}
Whales are enormous mammals that live in the oceans.
They are known for their great size, intelligence, and calm nature.
{{</* /column */>}}
{{</* column */>}}
They feed on small organisms such as fish and krill.
They also communicate through sounds that can travel great distances.
{{</* /column */>}}
{{</* /columns */>}}
````

### Result

{{< columns >}}
{{< column >}}
Whales are enormous mammals that live in the oceans.
They are known for their great size, intelligence, and calm nature.
{{< /column >}}
{{< column >}}
They feed on small organisms such as fish and krill.
They also communicate through sounds that can travel great distances.
{{< /column >}}
{{< /columns >}}

## Parameters

### columns

| Parameter | Position | Type   | Required | Description                             |
| :-------- | :------: | :----- | :------: | :-------------------------------------- |
| `class`   |    `0`   | string |    No    | Additional CSS class for the container. |

### column

| Parameter | Position | Type   | Required | Description                          |
| :-------- | :------: | :----- | :------: | :----------------------------------- |
| `class`   |    `0`   | string |    No    | Additional CSS class for the column. |

## Multiple columns

You can add as many `column` shortcodes as needed. Each column processes its content via `RenderString`, so it supports Markdown:

````markdown
{{</* columns */>}}
{{</* column */>}}
#### 1. Plan

Define the requirements and technical specifications.
{{</* /column */>}}
{{</* column */>}}
#### 2. Build

Write the code and run the validation tests.
{{</* /column */>}}
{{</* column */>}}
#### 3. Deploy

Publish via your CI/CD pipeline.
{{</* /column */>}}
{{</* /columns */>}}
````

### Result

{{< columns >}}
{{< column >}}
#### 1. Plan

Define the requirements and technical specifications.
{{< /column >}}
{{< column >}}
#### 2. Build

Write the code and run the validation tests.
{{< /column >}}
{{< column >}}
#### 3. Deploy

Publish via your CI/CD pipeline.
{{< /column >}}
{{< /columns >}}

## Responsive behavior

Columns are displayed side by side on desktop screens and stack vertically on small screens. The width of each column is distributed using Flexbox.

## column restriction

The `column` shortcode must be used directly inside `columns`. If used outside this container, Hugo stops the build and reports the corresponding error:

````markdown
{{</* column */>}}
This column is not valid.
{{</* /column */>}}
````

`columns` has no required parameters and can contain any content processed by Hugo. `column` processes its content via `.Page.RenderString`, so it supports Markdown.
