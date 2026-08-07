---
title: Configuración
icon: gear
weight: 2
---

Esta página es un ejemplo de cómo podrían documentarse las opciones de configuración de una versión hipotética 2.0. Los ajustes mostrados son únicamente ilustrativos.

## Configuración básica

El siguiente ejemplo muestra una configuración básica utilizando un archivo TOML:

```toml
baseURL = "https://example.com/"
title = "Mi documentación"

[params]
  description = "Sitio de documentación de ejemplo"
  author = "Example"
```

## Configuración del tema

Se podrían definir opciones adicionales dentro de la sección `params`:

```toml
[params]
  showVersion = true
  enableSearch = true
  showLastUpdated = true
```

### Mostrar la versión

Controla si se muestra la versión actual de la documentación:

```toml
[params]
  showVersion = true
```

### Habilitar la búsqueda

Habilita la funcionalidad de búsqueda en la documentación:

```toml
[params]
  enableSearch = true
```

### Mostrar la fecha de actualización

Muestra la fecha de la última modificación en las páginas de documentación:

```toml
[params]
  showLastUpdated = true
```

## Archivo de configuración

Un ejemplo de configuración completa podría verse así:

```toml
baseURL = "https://example.com/"
title = "Mi documentación"

[params]
  description = "Sitio de documentación de ejemplo"
  author = "Example"
  showVersion = true
  enableSearch = true
  showLastUpdated = true
```

> **Nota:** La configuración mostrada en esta página es ilustrativa y no corresponde a ningún proyecto o lanzamiento real.
