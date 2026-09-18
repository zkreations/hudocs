---
title: Hints and Alerts
weight: 3
---

The `hint` shortcode generates callout blocks for displaying information, recommendations, warnings, or alerts within the documentation.

## Basic usage

You can specify the hint type as the first positional parameter:

```markdown
{{</* hint info */>}}
This is an **informational** hint.
{{</* /hint */>}}
```

### Result

{{< hint info >}}
This is an **informational** hint.
{{< /hint >}}

## Parameters

| Parameter | Position | Type                | Required | Description                                                          |
| :-------- | :------: | :------------------ | :------: | :------------------------------------------------------------------- |
| `type`    |    `0`   | {{< type string >}} |    No    | Hint type. Used to generate the `alert-{type}` class.               |
| `icon`    |    `1`   | {{< type string >}} |    No    | Name of a [Meteor Icons](https://meteoricons.com/) icon.             |

Both parameters can be specified as either named or positional parameters.

## Hint types

Hudocs does not restrict the values of `type`. The following values have styles defined by the theme:

| Type      | Usage                                          |
| :-------- | :--------------------------------------------- |
| `info`    | Information and supplementary notes.           |
| `success` | Confirmations or successful outcomes.          |
| `warning` | Warnings and potential issues.                 |
| `danger`  | Risks or destructive actions.                  |
| `error`   | Errors or situations that require attention.   |

If no `type` is specified, the hint uses the theme's neutral appearance:

```markdown
{{</* hint */>}}
A general annotation.
{{</* /hint */>}}
```

{{< hint >}}
A **general** annotation.
{{< /hint >}}

## Icons

You can add an icon using `icon`:

```markdown
{{</* hint type="success" icon="circle-info" */>}}
This hint includes an icon.
{{</* /hint */>}}
```

{{< hint type="success" icon="circle-info" >}}
This hint includes an icon.
{{< /hint >}}

You can also provide the icon as the second positional parameter:

```markdown
{{</* hint warning triangle-exclamation */>}}
Check the requirements before continuing.
{{</* /hint */>}}
```

{{< hint warning triangle-exclamation >}}
Check the requirements before continuing.
{{< /hint >}}

If no `icon` is specified, the hint is displayed without one.

## Accessibility

The shortcode sets the `role` attribute based on the hint type: `warning`, `danger`, and `error` use `role="alert"`, while all other types use `role="status"`.

## Markdown support

The hint content is processed via `.Page.RenderString`, so it supports Markdown, including links, code, highlighted text, and lists.
