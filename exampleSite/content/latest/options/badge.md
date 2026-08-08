---
title: Badge
badge: true
description: Badges to highlight menu items and titles
---

A badge is an element that can be added to page titles. They are also part of the sidebar menu, allowing you to indicate to your readers that a page contains something special.

## Usage

To add a badge, set the `badge` attribute to `true` in the page front matter:

```markdown
---
title: My Page
badge: true
---

Page content
```

The badge text can be customized using the `badge_text` parameter:

```markdown
---
title: My Page
badge: true
badge_text: Featured
---

Page content
```

If `badge_text` is not defined on the page, the value defined in the site configuration is used instead. If neither is defined, the translated `New` value is used as the default.

### Badge URL

You can optionally make the badge a link by defining the `badge_url` parameter:

```markdown
---
title: My Page
badge: true
badge_text: Featured
badge_url: "https://www.zkreations.com"
---

Page content
```

If `badge_url` is not defined on the page, the value defined in the site configuration is used instead. If neither is defined, the badge is displayed without a link.

## Parameters

The following parameters can be defined in your goHugo configuration file under the custom parameters section:

{{< code >}}
{{< tab "toml" >}}
[params]
  badge_text = "New"
  badge_url = "https://www.zkreations.com"
{{< /tab >}}
{{< tab "yaml" >}}
params:
  badge_text: "New"
  badge_url: "https://www.zkreations.com"
{{< /tab >}}
{{< tab "json" >}}
"params": {
  "badge_text": "New",
  "badge_url": "https://www.zkreations.com"
}
{{< /tab >}}
{{< /code >}}

### Parameter priority

Page-level parameters take precedence over site-level parameters.

* `badge`: Must be set to `true` on the page to display the badge.
* `badge_text`: Page value → site value → translated `New` value.
* `badge_url`: Page value → site value → no URL.

If `badge` is not set to `true`, the badge is not displayed.
