---
title: Configuración
weight: 2
---

Hudocs se configura mediante el archivo principal de **configuración de tu sitio**. Esta página describe las opciones disponibles para configurar el tema.

## Ajustes principales

### baseURL

URL base del sitio de documentación en producción.

```toml
baseURL = 'https://ejemplo.com/'
```

### enableRobotsTXT

Cuando se establece en `true`, Hugo genera un archivo `robots.txt` para el sitio.

```toml
enableRobotsTXT = true
```

### enableInlineShortcodes

Cuando se establece en `true`, Hugo permite el uso de shortcodes dentro de otros shortcodes. Esta opción es necesaria para que los shortcodes de Hudocs funcionen correctamente.

```toml
enableInlineShortcodes = true
```

### enableGitInfo

Cuando se establece en `true`, Hugo obtiene información del repositorio Git para proporcionar datos sobre el último commit, como la fecha de modificación de una página.

```toml
enableGitInfo = true
```

### disableKinds

Desactiva tipos de contenido que no son necesarios para un sitio de documentación. Esto evita que Hugo genere páginas de taxonomías, términos y feeds RSS.

```toml
disableKinds = ["taxonomy", "term", "RSS"]
```

## Internacionalización

Para habilitar varios idiomas, define los idiomas disponibles en la sección `[languages]`. Cada idioma requiere un identificador, una etiqueta y un peso que determina el orden.

```toml
[languages.en]
  label = "English"
  weight = 1

[languages.es]
  label = "Español"
  weight = 2
```

## Renderizado y Markdown

Las opciones de Markdown y resaltado de sintaxis se configuran mediante la sección `[markup]`.

### HTML dentro de Markdown

Permite procesar HTML incluido directamente en los archivos Markdown. Esta opción es necesaria para los shortcodes y componentes que utilizan HTML.

```toml
[markup.goldmark.renderer]
  unsafe = true
```

### Resaltado de sintaxis

Configura Chroma para generar clases CSS en los bloques de código en lugar de estilos en línea. Esto permite que Hudocs controle los estilos de los bloques de código según el tema visual activo.

```toml
[markup.highlight]
  noClasses = false
```

### Tabla de contenidos

Define los niveles de encabezado que se incluyen en la tabla de contenidos. Con esta configuración se incluyen los encabezados `<h2>` y `<h3>`.

```toml
[markup.tableOfContents]
  startLevel = 2
  endLevel = 3
```

## Parámetros del tema

Las opciones específicas de Hudocs se configuran dentro de `[params]`. Las opciones se organizan por su alcance funcional:

### Identidad de Marca (Branding)

#### brand_icon

Nombre de un ícono del catálogo de [Meteor Icons](https://meteoricons.com/) que se muestra junto al título del sitio en la cabecera. El valor predeterminado es `"book-open"`.

```toml
brand_icon = "book-open"
```

#### brand_logo

Ruta a una imagen utilizada como logotipo. Cuando se define, reemplaza el ícono configurado mediante `brand_icon` y el título del sitio.

```toml
brand_logo = "images/logo.svg"
```

### Documentación

#### docs_section

Nombre de la sección raíz de documentación. El valor por defecto es `"docs"`.

```toml
docs_section = "docs"
```

#### docs_versions

Lista explícita y orden de las versiones para el selector. Si se omite, Hudocs detecta automáticamente las versiones desde `content/docs/`. Establecer en `false` para modo monoversión.

```toml
docs_versions = ["latest", "1.8", "1.0"]
```

#### docs_expand_tree

Expande todas las secciones en el árbol de navegación de la barra lateral de documentación. Si se establece en `false`, solo la sección activa se expande automáticamente. El valor predeterminado es `false`.

```toml
docs_expand_tree = false
```

#### docs_pagination

Controla la navegación entre páginas de documentación mediante los enlaces "Anterior" y "Siguiente" al final del contenido. El valor predeterminado es `true`.

```toml
docs_pagination = true
```

#### docs_edit_url

Añade un enlace de edición a la cabecera de cada artículo de documentación. El enlace utiliza el ícono `pencil` y dirige al archivo correspondiente en tu repositorio Git.

```toml
docs_edit_url = "https://github.com/tu-usuario/repositorio/tree/main/content"
```

#### docs_badge_text

Texto predeterminado que se muestra en las insignias de documentación habilitadas en las páginas. El valor predeterminado es `"Nuevo"`.

```toml
docs_badge_text = "Nuevo"
```

#### docs_badge_url

URL de destino para las insignias de documentación configuradas globalmente.

```toml
docs_badge_url = "https://ejemplo.com"
```

### Bloques de Código

#### code_theme

Configura el tema de color para los bloques de código con resaltado de sintaxis. Los temas disponibles son `duotone-dark`, `duotone-dark-sky`, `duotone-dark-sea`, `duotone-dark-space`, `duotone-dark-earth` y `duotone-dark-forest`. El valor predeterminado es `duotone-dark`.

```toml
code_theme = "duotone-dark"
```

### Pie de Página (Footer)

#### footer_date_format

Define el formato utilizado para mostrar la fecha de actualización de las páginas en el pie. El formato utiliza las reglas de fecha de Go. El valor predeterminado es `2006-01-02`.

```toml
footer_date_format = "2006-01-02"
```

#### footer_copyright

Define el texto de copyright que muestra el pie del sitio. El valor admite Markdown. Se puede utilizar `{{Year}}` para insertar automáticamente el año actual.

```toml
footer_copyright = "Created by [@zkreations](https://zkreations.com)"
```