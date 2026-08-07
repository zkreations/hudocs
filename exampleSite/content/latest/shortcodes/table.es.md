---
title: Tablas
description: Tablas responsive con la sintaxis de markdown.
---

Por defecto, las tablas generadas con la sintaxis de markdown no son responsive, para solventar un poco este problema, encierra tus tablas con este shortcode.

## Sintaxis

```go
{{</* table */>}}
...table
{{</* /table */>}}
```

### Opciones

- **Get 0**: Clases adicionales CSS. (opcional)

## Ejemplo

```go
{{</* table */>}}
| Syntax | Description |
| --- | ----------- |
| Header | Title |
| Paragraph | Text |
{{</* /table */>}}
```

{{< table >}}
| Syntax | Description |
| --- | ----------- |
| Header | Title |
| Paragraph | Text |
{{< /table >}}