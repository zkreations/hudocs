---
title: Encabezados y anclas
weight: 2
---

Hudocs genera enlaces de anclaje para los encabezados y una Tabla de Contenidos (TOC) interactiva. El seguimiento de la sección activa utiliza la API nativa `IntersectionObserver`.

## Anclas automáticas en encabezados

Los encabezados de Markdown se procesan mediante el render hook personalizado de Hugo `render-heading.html`.

### Enlace de anclaje

Al pasar el cursor sobre un encabezado, se muestra un símbolo `#` junto al texto:

* Al hacer clic en el símbolo, se añade el identificador del encabezado a la URL.
* Los usuarios pueden copiar y compartir enlaces directos a secciones específicas del documento.
* El enlace incluye un atributo `aria-label` para proporcionar un nombre accesible a los lectores de pantalla.

## Tabla de Contenidos (TOC)

Cada artículo genera automáticamente una Tabla de Contenidos en la barra lateral derecha.

### Configuración de niveles de encabezado

Puedes controlar los niveles incluidos en la Tabla de Contenidos desde `hugo.toml`. Por ejemplo, para incluir solo encabezados `<h2>` y `<h3>`:

```toml
[markup.tableOfContents]
  startLevel = 2    # Empieza en <h2>
  endLevel = 3      # Incluye hasta <h3>
```

## Scrollspy con IntersectionObserver

En Hudocs 2.0, el sistema de seguimiento de la sección activa utiliza `IntersectionObserver` en lugar de la implementación anterior basada en eventos `scroll` y `resize`:

* Se eliminaron los listeners continuos de `scroll` y `resize` utilizados por la implementación anterior.
* `IntersectionObserver` detecta cuándo los encabezados entran o salen del área de observación.
* La sección correspondiente se marca como activa en la Tabla de Contenidos.

## Diseño responsivo

En desarrollo...
