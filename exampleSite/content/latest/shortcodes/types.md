---
title: Data types
weight: 8
---

The `type` shortcode displays data types, expressions, and value sets with differentiated styles.

## Basic usage

Provide the type as a positional parameter:

```markdown
{{</* type string */>}}
{{</* type number */>}}
{{</* type boolean */>}}
```

### Result

{{< type string >}}
{{< type number >}}
{{< type boolean >}}

## Parameters

| Parameter | Position | Type   | Required | Description                                      |
| :-------- | :------: | :----- | :------: | :----------------------------------------------- |
| `name`    |   `0`    | string |   Yes    | Type, expression, or value set to be displayed.  |

The parameter can also be provided as `type`:

```markdown
{{</* type name="string" */>}}
{{</* type type="number" */>}}
```

## Recognized types

The shortcode classifies certain type names to apply specific styles to them. Comparison is case-insensitive.

| Category     | Recognized types                            |
| :----------- | :------------------------------------------ |
| `textual`    | `string`, `char`, `rune`, `byte`            |
| `numeric`    | `number`, `int`, `float`, `uint`            |
| `logical`    | `boolean`, `bool`                           |
| `structural` | `object`, `array`, `function`, `map`, `set` |

For example:

```markdown
{{</* type string */>}}
{{</* type int */>}}
{{</* type bool */>}}
{{</* type object */>}}
```

### Result

{{< type string >}}
{{< type int >}}
{{< type bool >}}
{{< type object >}}

## Custom types

Types that do not match any recognized values are classified as `custom` and displayed without modifying their content:

```markdown
{{</* type "UserConfig" */>}}
{{</* type "Promise<Response>" */>}}
{{</* type "string | null" */>}}
{{</* type "string[]" */>}}
```

### Result

{{< type "UserConfig" >}}
{{< type "Promise<Response>" >}}
{{< type "string | null" >}}
{{< type "string[]" >}}

The shortcode does not parse expression syntax. The received value is displayed as text.

## Optional types

Append `?` to the end of the type to indicate that it is optional:

```markdown
{{</* type "string?" */>}}
{{</* type "number?" */>}}
{{</* type "UserConfig?" */>}}
```

### Result

{{< type "string?" >}}
{{< type "number?" >}}
{{< type "UserConfig?" >}}

## Allowed values

Wrap a set of values between `{` and `}` to classify them as `values`:

```markdown
{{</* type "{light | dark}" */>}}
{{</* type "{asc | desc}" */>}}
{{</* type "{fixed | fluid}" */>}}
```

### Result

{{< type "{light | dark}" >}}
{{< type "{asc | desc}" >}}
{{< type "{fixed | fluid}" >}}

## Positional syntax

The type name can be provided as the first positional parameter:

```markdown
{{</* type string */>}}
{{</* type "Promise<Response>" */>}}
{{</* type "{light | dark}" */>}}
```

The `name` parameter can also be used via named parameters:

```markdown
{{</* type name="string" */>}}
{{</* type type="number" */>}}
```
