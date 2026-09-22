---
title: Columns
description: Create easily column of content, useful to group more information in the same segment.
---

Create easily column of content, useful to group more information in the same segment.

## Syntax

```go
{{</* columns */>}}
...content
<---->
...content
<---->
...content
{{</* /columns */>}}
```

### Options

- **Get 0**: Additional CSS classes. (optional)

## Example

```go
{{</* columns */>}}
### Medicine
As young doctors working in acute...
<---->
### Countries
All this from an island of just...
<---->
### History
The artist Christo, known for wrapping buildings...
{{</* /columns */>}}
```