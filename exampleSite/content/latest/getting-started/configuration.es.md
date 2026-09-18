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

Las opciones específicas de Hudocs se configuran dentro de `[params]`.

### versions

Define las versiones que aparecen en el selector de versiones de la cabecera y su orden. Si `versions` no está definido, Hudocs detecta las secciones raíz de `site.Sections` y las utiliza como versiones.

```toml
versions = ["latest", "1.8", "1.0"]
```

### main_icon

Nombre de un ícono del catálogo de [Meteor Icons](https://meteoricons.com/) que se muestra junto al título del sitio.

```toml
main_icon = "book-open"
```

### main_logo

Ruta a una imagen utilizada como logotipo. Cuando se define, reemplaza el ícono configurado mediante `main_icon` y el título del sitio.

```toml
main_logo = "images/logo.svg"
```

### github_repo_edit

Añade un enlace de edición a la cabecera de cada artículo. El enlace utiliza el ícono `pencil` y dirige al directorio correspondiente del repositorio en GitHub.

```toml
github_repo_edit = "https://github.com/tu-usuario/repositorio/tree/main/content"
```

### badge_text

Texto que se muestra en las insignias habilitadas en las páginas. El valor predeterminado es `Nuevo`.

```toml
badge_text = "Nuevo"
```

### badge_url

URL de destino de la insignia configurada globalmente.

```toml
badge_url = "https://ejemplo.com"
```

### pagination

Controla la navegación entre páginas mediante los enlaces "Anterior" y "Siguiente" al final del contenido. El valor predeterminado es `true`.

```toml
pagination = true
```

### expand_tree

Expande todas las secciones en el árbol de navegación de la barra lateral. Si se establece en `false`, solo la sección activa se expande automáticamente. El valor predeterminado es `false`.

```toml
expand_tree = false
```

### date_format

Define el formato utilizado para mostrar la fecha de actualización de las páginas. El formato utiliza las reglas de fecha de Go. El valor predeterminado es `2006-01-02`.

```toml
date_format = "2006-01-02"
```

### copyright

Define el texto de copyright que muestra el tema. El valor admite Markdown. Se puede utilizar `{{Year}}` para insertar automáticamente el año actual.

```toml
copyright = "Created by [@zkreations](https://zkreations.com)"
```

### code_theme

Configura el tema de color para los bloques de código con resaltado de sintaxis. Los temas disponibles son `duotone-dark`, `duotone-dark-sky`, `duotone-dark-sea`, `duotone-dark-space`, `duotone-dark-earth` y `duotone-dark-forest`. El valor predeterminado es `duotone-dark`.

```toml
code_theme = "duotone-dark"
```