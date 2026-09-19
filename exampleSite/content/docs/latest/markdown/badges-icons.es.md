---
title: Insignias e Íconos
weight: 3
---

Hudocs permite añadir insignias e íconos a las páginas de documentación para identificar contenido y mostrar información adicional en la navegación.

## Insignias de estado

Las insignias aparecen junto a los enlaces en el menú lateral y junto al título principal `<h1>` del artículo.

### Activar una insignia

Añade `badge: true` al front matter de tu artículo:

```markdown id="q8r1mv"
---
title: Webhooks
badge: true
---
```

Por defecto, la insignia muestra el texto traducido `"Nuevo"`.

### Texto personalizado

Para definir un texto específico para una página, utiliza `badge_text`:

```markdown id="5c7x1m"
---
title: Arquitectura del Sistema
badge: true
badge_text: "v2.0"
---
```

### Habilitar enlace

Para convertir la insignia en un enlace hacia una página, registro de cambios o anuncio, define `badge_url`:

```markdown id="y0n2qd"
---
title: Migración desde v1
badge: true
badge_text: "Guía"
badge_url: "/es/docs/latest/getting-started/migration/"
---
```

### Prioridad de parámetros

* `badge`

  * Debe establecerse en `true` en el front matter de la página para mostrar la insignia.
* `badge_text`

  * Valor definido en la página.
  * Si no existe, utiliza `site.Params.badge_text`.
  * Si tampoco existe, utiliza el texto traducido `"Nuevo"`.
* `badge_url`

  * Valor definido en la página.
  * Si no existe, utiliza `site.Params.badge_url`.
  * Si no se define ningún valor, la insignia se muestra sin enlace.

## Integración con Meteor Icons

Hudocs se integra con [Meteor Icons](https://meteoricons.com/), una colección de íconos SVG optimizados para la web.

### Asignar un ícono

Añade el parámetro `icon` al front matter utilizando el nombre de un ícono del catálogo de Meteor Icons:

```markdown id="p8w4ks"
---
title: Seguridad y Permisos
icon: shield
---
```

El ícono se renderiza automáticamente junto al enlace en el menú lateral y en los componentes de la cabecera.

### Uso en plantillas o shortcodes

Puedes utilizar íconos de Meteor Icons en tus plantillas o shortcodes personalizados mediante el partial `svg`:

```html id="y0k4nv"
{{ partial "svg" (dict "icon" "sparkles" "class" "text-primary" "size" "20") }}
```

### Caché de recursos

Los íconos se obtienen mediante `resources.GetRemote` de Hugo y se almacenan en la caché local de recursos. Esto permite reutilizar los recursos obtenidos durante el proceso de build sin descargarlos nuevamente mientras el recurso permanezca disponible en la caché.
