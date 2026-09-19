---
title: Steps
weight: 6
---

The `steps` shortcode displays an ordered Markdown list as a visual sequence of numbered steps.

## Basic usage

Wrap an ordered Markdown list inside `steps`:

````markdown
{{</* steps */>}}
1. **Download the package** from the releases page.
2. **Extract the files** into the root of your project.
3. **Verify the installation** by checking the console output.
{{</* /steps */>}}
````

### Result

{{< steps >}}
1. **Download the package** from the releases page.
2. **Extract the files** into the root of your project.
3. **Verify the installation** by checking the console output.
{{< /steps >}}

## Parameters

| Parameter | Position | Type                | Required | Description                             |
| :-------- | :------: | :------------------ | :------: | :-------------------------------------- |
| `class`   |    `0`   | {{< type string >}} |    No    | Additional CSS class for the container. |

## Complex lists

If you want to include more complex content in each step, such as headings, paragraphs, or code blocks, you can use Markdown syntax inside each list item:

````markdown
{{</* steps */>}}
1. ### Create your site

   Run `hugo new site my-site` to start a new Hugo project.

2. ### Add the theme

   Clone or add Hudocs as a submodule in your `themes/` folder:

   ```bash
      git clone https://github.com/zkreations/hudocs themes/hudocs
   ```

3. ### Configure and launch

   Start the development server.
{{</* /steps */>}}
````

### Result

{{< steps >}}
1. ### Create your site

   Run `hugo new site my-site` to start a new Hugo project.

2. ### Add the theme

   Clone or add Hudocs as a submodule in your `themes/` folder:

   ```bash
   git clone https://github.com/zkreations/hudocs themes/hudocs
   ```

3. ### Configure and launch

   Start the development server.
{{< /steps >}}

## Markdown content

The content of `steps` is processed via `.Page.RenderString`, so it can contain any Markdown element supported by Hugo, including headings, lists, links, and code blocks.