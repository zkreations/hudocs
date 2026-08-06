---
title: Código
description: Crea bloques de código explicativos, mas poderosos que los bloques de código
  normales.
---

Crea bloques de código explicativos, mas poderosos que los bloques de código normales.

## Sintaxis

```go
{{</* code */>}}
...content
{{</* /code */>}}
```

### Opciones

- **id**: Identificador único. (opcional)
- **class**: Clases adicionales CSS. (opcional)
- **hl**: líneas de resaltado. (opcional)
- **lang**: Tipo de lenguaje. Por defecto: `html`. (opcional)
- **example**: Interpretar código de ejemplo, solo válido para html (obligatorio en todos los casos), css y javascript: `true`, `false`. Por defecto: `false` (opcional)


### Opciones de tabs

- **Get 0**: Tipo de lenguaje. Por defecto: `html`. (opcional)
- **Get 1**: Nombre del archivo. (opcional)


## Ejemplo

```go
{{</* code */>}}
...content
{{</* /code */>}}
```

{{< code >}}
...content
{{< /code >}}


## Código con ejemplo

```go
{{</* code example=true */>}}
Un párrafo con una <strong>Negrita</strong> y una <em>Itálica</em>
{{</* /code */>}}
```

{{< code example=true >}}
Un párrafo con una <strong>Negrita</strong> y una <em>Itálica</em>
{{< /code >}}


## Código explicado

```go
{{</* code lang="js" */>}}
document.querySelector("body");
<---->
Este código esta seleccionando el cuerpo del documento.
{{</* /code */>}}
```

{{< code lang="js" >}}
document.querySelector("body");
<---->
Este código esta seleccionando el cuerpo del documento.
{{< /code >}}


## Código con pestañas

```go
{{</* code */>}}
{{</* tab "html" */>}}
...content
{{</* /tab */>}}
{{</* tab "css" */>}}
...content
{{</* /tab */>}}
{{</* tab "js" "main.js" */>}}
...content
{{</* /tab */>}}
{{</* /code */>}}
```

{{< code >}}
{{< tab "html" >}}
...content
{{< /tab >}}
{{< tab "css" >}}
...content
{{< /tab >}}
{{< tab "js" "main.js" >}}
...content
{{< /tab >}}
{{< /code >}}
