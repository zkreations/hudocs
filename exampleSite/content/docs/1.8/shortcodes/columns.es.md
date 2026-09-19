---
title: Columnas
description: Crea fácilmente columna de contenido, útil para agrupan en un mismo segmento
  más información.
---

Crea fácilmente columna de contenido, útil para agrupan en un mismo segmento más información.

## Sintaxis

```go
{{</* columns */>}}
...content
<---->
...content
<---->
...content
{{</* /columns */>}}
```

### Opciones

- **Get 0**: Clases adicionales CSS. (opcional)

## Ejemplo

```go
{{</* columns */>}}
### Medicina
Como médicos jóvenes que trabajan...
<---->
### Países
Todo esto desde una isla de apenas...
<---->
### Historia
El artista Christo, conocido por envolver edificios...
{{</* /columns */>}}
```