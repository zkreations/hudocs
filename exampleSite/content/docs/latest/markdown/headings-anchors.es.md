---
title: Encabezados y anclas
weight: 2
---

Hudocs genera enlaces de anclaje para los encabezados y una Tabla de Contenidos (TOC) interactiva con seguimiento de la sección activa al desplazarse.

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

## Scrollspy

Hudocs realiza el seguimiento de la sección activa a medida que el usuario se desplaza por el documento:

* Los eventos de desplazamiento se sincronizan mediante `requestAnimationFrame` para un rendimiento óptimo de renderizado.
* Las posiciones verticales de los encabezados se calculan considerando el desplazamiento dinámico de la cabecera (`--header-height`).
* El enlace del encabezado activo se marca con `aria-current="location"` y la clase `.is-visible` en la Tabla de Contenidos.

## Diseño responsivo

En pantallas pequeñas, la Tabla de Contenidos pasa de una barra lateral fija a un menú desplegable en la parte superior del artículo. El botón de activación muestra el título de la sección activa y se expande para mostrar la lista de navegación completa al hacer clic.
