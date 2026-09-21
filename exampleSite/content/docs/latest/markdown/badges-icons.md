---
title: Badges and Icons
weight: 3
---

Hudocs allows you to add badges and icons to documentation pages to identify content and display additional information in the navigation.

## Status Badges

Badges appear next to links in the sidebar and next to the article's main `<h1>` title.

### Enable a Badge

Add `badge: true` to your article's front matter:

```markdown
---
title: Webhooks
badge: true
---
```

By default, the badge displays the translated text `"New"`.

### Custom Text

To define page-specific text, use `badge_text`:

```markdown
---
title: System Architecture
badge: true
badge_text: "v2.0"
---
```

### Enable a Link

To turn the badge into a link to a page, changelog, or announcement, define `badge_url`:

```markdown
---
title: Migration from v1
badge: true
badge_text: "Guide"
badge_url: "/docs/latest/getting-started/installation/"
---
```

### Parameter Priority

* `badge`

  * Must be set to `true` in the page front matter for the badge to be displayed.
* `badge_text`

  * Value defined on the page.
  * If not set, uses `site.Params.docs_badge_text` (or `site.Params.badge_text`).
  * If that is also not set, uses the translated text `"New"`.
* `badge_url`

  * Value defined on the page.
  * If not set, uses `site.Params.docs_badge_url` (or `site.Params.badge_url`).
  * If no value is defined, the badge is displayed without a link.

## Meteor Icons Integration

Hudocs integrates with [Meteor Icons](https://meteoricons.com/), an open-source collection of SVG icons optimized for the web.

### Assign an Icon

Add the `icon` parameter to the front matter using the name of an icon from the Meteor Icons catalog:

```markdown
---
title: Security and Permissions
icon: shield
---
```

The icon is rendered automatically next to the link in the sidebar and in header components.

### Usage in Templates or Shortcodes

You can use Meteor Icons in custom templates or shortcodes through the `svg` partial:

```html
{{ partial "svg" (dict "icon" "sparkles" "class" "text-primary" "size" "20") }}
```

### Resource Caching

Icons are fetched using Hugo's `resources.GetRemote` and stored in the local resource cache. This allows fetched resources to be reused during the build process without downloading them again while they remain available in the cache.
