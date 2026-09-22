---
title: Customization
weight: 6
---

Hudocs organizes its styling using CSS cascade layers (`@layer`) and semantic design tokens defined through CSS custom properties in `_tokens.scss`. You can customize the look and feel of your documentation without modifying the theme's core files.

## Overriding Styles

To customize styles, create an `assets/scss/_custom.scss` file in your Hugo project:

```text
my-project/
├── assets/
│   └── scss/
│       └── _custom.scss
└── hugo.toml
```

Because Hudocs imports `_custom.scss` outside of cascade layers, unlayered rules in your custom file naturally take precedence over theme styles without requiring high-specificity selectors or `!important`.

## SCSS Variables

Hudocs defines base color variables using Sass `!default` flags. You can override these variables before the theme rules are evaluated:

| Variable     | Default   | Description                   |
| :----------- | :-------- | :---------------------------- |
| `$primary`   | `#0f766e` | Default primary brand color.  |
| `$secondary` | `#4338ca` | Secondary accent color.       |

```scss
// assets/scss/_custom.scss
$primary: #2563eb;
$secondary: #7c3aed;
```

## CSS Design Tokens

All visual properties in Hudocs are mapped to CSS custom properties defined in `:root`. You can customize them in your `_custom.scss` by targeting `:root` (for light mode or universal values) or `:root.dark` (for dark mode).

### Layout and Dimensions

These variables control the page layout, spacing, and component dimensions:

| Token                  | Default                                 | Description                                 |
| :--------------------- | :-------------------------------------- | :------------------------------------------ |
| `--container-width`    | `1500px`                                | Maximum width of the content container.    |
| `--container-padding`  | `clamp(1rem, 2.5vw, 1.5rem)`            | Horizontal padding of the container.        |
| `--space-block`        | `clamp(1.5rem, 2vw, 1.75rem)`           | Vertical spacing between major layout areas.|
| `--header-height`      | `70px`                                  | Height of the top navigation bar.           |
| `--aside-width`        | `246px`                                 | Width of the sidebar navigation.            |
| `--timing`             | `cubic-bezier(0.7, 0.006, 0.2, 1)`      | Global transition timing curve.             |

### Typography

| Token               | Default                                                                                | Description                    |
| :------------------ | :------------------------------------------------------------------------------------- | :----------------------------- |
| `--font-primary`    | `'Inter', sans-serif`                                                                  | Main typeface for UI and text. |
| `--font-monospace`  | `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace` | Font stack for code blocks.    |

### Brand Colors

Brand tokens define primary and secondary accent roles and their corresponding container tints:

| Token                      | Default (Light) | Default (Dark) | Description                                  |
| :------------------------- | :-------------- | :------------- | :------------------------------------------- |
| `--primary`                | `#0f766e`       | `#2dd4bf`      | Primary brand color.                         |
| `--on-primary`             | `#ffffff`       | `#09090b`      | Text color on primary background.            |
| `--primary-container`      | `12% primary`   | `12% primary`  | Tinted background for active items and tags. |
| `--on-primary-container`   | `var(--primary)`| `var(--primary)`| Text color on primary container backgrounds. |
| `--secondary`              | `#4338ca`       | `#818cf8`      | Secondary accent color.                      |
| `--on-secondary`           | `#ffffff`       | `#09090b`      | Text color on secondary background.          |
| `--secondary-container`    | `12% secondary` | `12% secondary`| Tinted background for secondary tags.        |
| `--on-secondary-container` | `var(--secondary)` | `var(--secondary)` | Text color on secondary container backgrounds. |

### Surfaces and Backgrounds

Surfaces define backgrounds for the page, containers, menus, and elevated elements:

| Token                      | Default (Light) | Default (Dark) | Description                                  |
| :------------------------- | :-------------- | :------------- | :------------------------------------------- |
| `--surface`                | `#ffffff`       | `#18181b`      | Main page background.                        |
| `--surface-container`      | `#f4f4f5`       | `#222225`      | Background for cards, inputs, and sidebars.  |
| `--surface-container-hover`| `#e4e4e7`       | `#2e2e33`      | Hover state for interactive containers.      |
| `--surface-inverse`        | `#18181b`       | `#f4f4f5`      | Contrasting background for tooltips.         |
| `--on-surface-inverse`     | `#ffffff`       | `#18181b`      | Text color on inverse surfaces.              |
| `--surface-mark`           | `30% #fbbf24`   | `25% #fbbf24`  | Highlight background for search matches.     |

### Text and Borders

| Token                  | Default (Light) | Default (Dark) | Description                                  |
| :--------------------- | :-------------- | :------------- | :------------------------------------------- |
| `--on-surface`         | `#27272a`       | `#ffffff`      | Primary body text color.                     |
| `--on-surface-variant` | `#52525b`       | `#d4d4d8`      | Secondary labels, subtitles, and icons.      |
| `--on-surface-muted`   | `#71717a`       | `#a1a1aa`      | Dimmed or disabled text.                     |
| `--outline`            | `#d4d4d8`       | `#27272a`      | Dividers, borders, and input outlines.       |
| `--scrim`              | `rgb(0 0 0 / 50%)` | `rgb(0 0 0 / 50%)` | Backdrop overlay for modals and dialogs. |

### Feedback and Status

These tokens style hint alerts, statuses, and validation messages:

| Token       | Default (Light) | Default (Dark) | Usage                          |
| :---------- | :-------------- | :------------- | :----------------------------- |
| `--info`    | `#0369a1`       | `#38bdf8`      | Informational callouts.        |
| `--success` | `#047857`       | `#34d399`      | Success states and badges.     |
| `--warning` | `#b45309`       | `#fbbf24`      | Warning alerts and advisories. |
| `--error`   | `#be123c`       | `#fb7185`      | Critical errors and hazards.   |

### Data Type Badges

Used by the `type` shortcode to classify programming language types:

| Token               | Default (Light)     | Default (Dark)      | Usage                          |
| :------------------ | :------------------ | :------------------ | :----------------------------- |
| `--type-textual`    | `var(--info)`       | `var(--info)`       | Strings, chars, runes, bytes.  |
| `--type-numeric`    | `var(--warning)`    | `var(--warning)`    | Numbers, integers, floats.     |
| `--type-logical`    | `var(--primary)`    | `var(--primary)`    | Booleans.                      |
| `--type-structural` | `var(--secondary)`  | `var(--secondary)`  | Objects, arrays, maps, sets.   |
| `--type-custom`     | `#7e22ce`           | `#c084fc`           | User-defined types and classes.|

### Code Blocks and Syntax Highlighting

These tokens control code block backgrounds, text, and selection colors:

| Token                | Default (Light) | Default (Dark) | Description                           |
| :------------------- | :-------------- | :------------- | :------------------------------------ |
| `--syntax-bg`        | `#18181b`       | `#09090b`      | Background of code blocks.            |
| `--syntax-bg-deep`   | `#09090b`       | `#000000`      | Deeper background for code headers.   |
| `--syntax-fg`        | `var(--syntax-uno-2)` | `var(--syntax-uno-2)` | Default text in code blocks.  |
| `--syntax-comment`   | `var(--syntax-uno-5)` | `var(--syntax-uno-5)` | Comment lines.                |
| `--syntax-keyword`   | `var(--syntax-duo-1)` | `var(--syntax-duo-1)` | Language keywords.            |
| `--syntax-string`    | `var(--syntax-duo-1)` | `var(--syntax-duo-1)` | Quoted string literals.       |
| `--syntax-selection` | `color-mix(...)`| `color-mix(...)`| Selected text inside code blocks.     |

## Customization Example

Below is a complete example of an `assets/scss/_custom.scss` file that sets a custom font, adjusts the primary color palette, and updates background surfaces:

```scss
// 1. Override SCSS variables
$primary: #0284c7;

// 2. Override CSS tokens
:root {
  --font-primary: 'Poppins', sans-serif;
  --header-height: 64px;

  // Custom light surfaces
  --surface: #ffffff;
  --surface-container: #f8fafc;
}

:root.dark {
  // Custom dark surfaces
  --surface: #0f172a;
  --surface-container: #1e293b;
  --primary: #38bdf8;
}
```

