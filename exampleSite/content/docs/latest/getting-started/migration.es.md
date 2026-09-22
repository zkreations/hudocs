---
title: Migración
weight: 4
---

Esta guía resume los cambios incompatibles y modificaciones necesarias al actualizar un sitio de documentación a Hudocs 2.0.

## Estructura del Directorio de Contenido

En Hudocs 1.8, las versiones de documentación se ubicaban directamente en la raíz de `content/`:

```text
# Hudocs 1.8 (Anterior)
content/
└── 1.0/
    ├── _index.md
    └── ...
```

En Hudocs 2.0, toda la documentación se centraliza bajo una sección dedicada, por defecto `content/docs/`:

```text
# Hudocs 2.0 (Nuevo)
content/
└── docs/
    ├── _index.md
    ├── latest/
    │   ├── _index.md
    │   └── ...
    └── 1.8/
        ├── _index.md
        └── ...
```

Mueve los directorios de versiones dentro de `content/docs/`. Esto mantiene la raíz de `content/` limpia para páginas independientes y artículos de blog.

## Shortcodes Eliminados

### Shortcode Table

En Hudocs 1.8, para que una tabla fuese adaptable a pantallas móviles era obligatorio envolverla con el shortcode `table`:

```markdown
{{</* table */>}}
| Cabecera 1 | Cabecera 2 |
| :--------- | :--------- |
| Valor A    | Valor B    |
{{</* /table */>}}
```

En Hudocs 2.0, el shortcode `table` fue **eliminado**. Retira las etiquetas de apertura y cierre de `table`. Hudocs utiliza el hook nativo `render-table.html` de Hugo para envolver automáticamente cualquier tabla Markdown estándar en un contenedor con desplazamiento horizontal adaptable.

### Shortcode Code

En Hudocs 1.8, la presentación de código avanzado dependía del shortcode `code`:

```markdown
{{</* code lang="js" */>}}
console.log("Hola mundo");
<---->
Nota explicativa.
{{</* /code */>}}
```

En Hudocs 2.0, el shortcode `code` fue **eliminado**:

* **Bloques de código estándar:** Utiliza los bloques cercados nativos de Hugo con atributos de Chroma (ej. `{filename="main.js" linenos=true hl_lines=[1]}`).
* **Código con explicaciones:** Utiliza el nuevo shortcode `annotated`.
* **Pestañas de código:** Utiliza los shortcodes generales `tabs` y `tab`.

## Cambio de Delimitadores

En Hudocs 1.8, los shortcodes `columns` y `code` utilizaban el separador `<---->` para dividir bloques internos:

```markdown
{{</* columns */>}}
Columna izquierda
<---->
Columna derecha
{{</* /columns */>}}
```

En Hudocs 2.0, reemplaza todos los delimitadores `<---->` por líneas divisorias horizontales estándar de Markdown (`---`) o `<!-- split -->`:

```markdown
{{</* columns */>}}
Columna izquierda
---
Columna derecha
{{</* /columns */>}}
```

## Parámetros de Configuración Renombrados

Las opciones de configuración en `hugo.toml` dentro de `[params]` fueron estandarizadas con prefijos semánticos (`docs_`, `brand_`, `footer_`):

| Parámetro v1.8       | Parámetro v2.0       | Descripción                                       |
| :------------------- | :------------------- | :------------------------------------------------ |
| `github_repo_edit`   | `docs_edit_url`      | URL base para el botón "Editar página".           |
| `main_icon`          | `brand_icon`         | Icono de Meteor Icons en la cabecera.             |
| `main_logo`          | `brand_logo`         | Ruta al logotipo de cabecera.                     |
| `badge_text`         | `docs_badge_text`    | Texto por defecto en insignias de documentación.  |
| `badge_url`          | `docs_badge_url`     | Enlace por defecto en insignias de documentación. |
| `expand_tree`        | `docs_expand_tree`   | Expandir todas las secciones de navegación.       |
| `pagination`         | `docs_pagination`    | Activar enlaces de página anterior/siguiente.     |
| `date_format`        | `footer_date_format` | Formato de fecha de modificación en el pie.       |
| `copyright`          | `footer_copyright`   | Texto del aviso de copyright en el pie.           |

Actualiza tu archivo `hugo.toml` para utilizar los nuevos identificadores canónicos.

## Cambios en la Sintaxis de Shortcodes

### Shortcode Tab

En Hudocs 1.8, `tab` funcionaba asociado al shortcode `code` y recibía argumentos posicionales de lenguaje y archivo.

En Hudocs 2.0, `tab` es un shortcode independiente que se anida dentro de `tabs` y recibe el título de la pestaña como primer argumento o parámetro nombrado:

````markdown
{{</* tabs */>}}
{{</* tab "JavaScript" */>}}
```javascript {filename="main.js"}
console.log("Hola");
```
{{</* /tab */>}}
{{</* /tabs */>}}
````

### Parámetros de Page Link

En Hudocs 1.8, `pagelink` utilizaba `name` para indicar la procedencia. En Hudocs 2.0, utiliza `title` para el título principal y `description` (o `subtitle`) para el texto secundario:

```markdown
{{</* pagelink href="/docs/latest/getting-started" title="Empezando" description="Guía de configuración" icon="rocket" */>}}
```
