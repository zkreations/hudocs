---
title: Images
weight: 5
---

Hudocs optimizes images automatically using Hugo's built-in image render hook (`render-image.html`). Images use standard Markdown syntax and do not require custom shortcodes.

## Standard Syntax

Insert images using standard Markdown syntax:

```markdown
![Architecture Diagram](architecture.png "System Architecture")
```

## Resource Resolution and Dimensions

When an image is processed, Hudocs looks for the image file in:

1. **Page bundle resources:** files located alongside the page bundle (`.Page.Resources.GetMatch`).
2. **Global asset resources:** files located inside `assets/` (`resources.Get`).

When the image is found as a Hugo resource, its intrinsic dimensions (`width` and `height`) are detected and injected into the rendered `<img>` tag automatically. This prevents Cumulative Layout Shift (CLS) as pages load.

```html
<img src="/docs/latest/markdown/architecture.png" alt="Architecture Diagram" title="System Architecture" width="1200" height="600" loading="lazy" decoding="async">
```

## Loading Strategy

### Lazy Loading

All regular images are rendered with `loading="lazy"` and `decoding="async"` by default, saving bandwidth and improving initial page load times.

### First Image Eager Loading

To optimize Largest Contentful Paint (LCP), the first image on any documentation page (`Ordinal 0`) is automatically rendered with `loading="eager"` and `fetchpriority="high"`.

This behavior is enabled by default and can be controlled globally via `hugo.toml`:

```toml
[params]
  image_first_eager = true
```

### Manual Priority Loading

To force eager loading with high fetch priority on any specific image (such as an important diagram), append `#priority` or `#eager` to the image URL:

```markdown
![Hero Banner](banner.png#priority)
```

The render hook detects the fragment, sets `loading="eager"` and `fetchpriority="high"`, and strips the fragment from the resulting `src` attribute.
