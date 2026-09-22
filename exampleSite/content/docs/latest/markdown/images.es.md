---
title: Imágenes
weight: 5
---

Hudocs optimiza las imágenes automáticamente mediante el hook de renderizado integrado de Hugo (`render-image.html`). Las imágenes utilizan sintaxis Markdown estándar y no requieren shortcodes personalizados.

## Sintaxis estándar

Inserta imágenes utilizando la sintaxis habitual de Markdown:

```markdown
![Diagrama de arquitectura](architecture.png "Arquitectura del sistema")
```

## Resolución de recursos y dimensiones

Al procesar una imagen, Hudocs busca el archivo en:

1. **Recursos del page bundle:** archivos ubicados junto a la página (`.Page.Resources.GetMatch`).
2. **Recursos de activos globales:** archivos ubicados dentro de `assets/` (`resources.Get`).

Cuando la imagen se encuentra como un recurso de Hugo, sus dimensiones originales (`width` y `height`) se detectan e inyectan automáticamente en la etiqueta `<img>`. Esto previene el desplazamiento de diseño acumulado (*Cumulative Layout Shift* o CLS) durante la carga de las páginas.

```html
<img src="/es/docs/latest/markdown/architecture.png" alt="Diagrama de arquitectura" title="Arquitectura del sistema" width="1200" height="600" loading="lazy" decoding="async">
```

## Estrategia de carga

### Carga perezosa (Lazy loading)

Todas las imágenes convencionales se representan con `loading="lazy"` y `decoding="async"` de forma predeterminada, ahorrando ancho de banda y mejorando los tiempos de carga inicial.

### Carga anticipada de la primera imagen

Para optimizar el *Largest Contentful Paint* (LCP), la primera imagen de cualquier página de documentación (`Ordinal 0`) se representa automáticamente con `loading="eager"` y `fetchpriority="high"`.

Este comportamiento está activo por defecto y se puede controlar globalmente desde `hugo.toml`:

```toml
[params]
  image_first_eager = true
```

### Prioridad manual

Para forzar la carga anticipada y alta prioridad en una imagen específica (como un diagrama importante), añade `#priority` o `#eager` al final de la URL de la imagen:

```markdown
![Banner principal](banner.png#priority)
```

El hook de renderizado detecta el fragmento, asigna `loading="eager"` y `fetchpriority="high"`, y retira el fragmento del atributo `src` final.
