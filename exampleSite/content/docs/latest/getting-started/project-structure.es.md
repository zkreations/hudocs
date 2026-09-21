---
title: Estructura del proyecto
weight: 3
---

Hudocs organiza la documentación dentro de una sección dedicada `docs/`, permitiendo que la raíz de `content/` quede libre para portadas, blogs u otras páginas independientes.

## Arquitectura Multiversión

Por defecto, Hudocs organiza las versiones como subdirectorios dentro de `content/docs/`:

```text
content/
├── _index.md
├── docs/
│   ├── _index.md
│   ├── latest/
│   │   ├── _index.md
│   │   ├── getting-started/
│   │   │   ├── _index.md
│   │   │   ├── installation.md
│   │   │   └── ...
│   │   └── guides/
│   │       ├── _index.md
│   │       └── ...
│   ├── 1.8/
│   │   ├── _index.md
│   │   └── ...
│   └── 1.0/
│       ├── _index.md
│       └── ...
├── blog/
└── pages/
```

Cada subdirectorio dentro de `docs/` (`latest`, `1.8`, `1.0`) representa una versión aislada con su propio árbol de navegación, paginación e índice de búsqueda. Hudocs provee un selector de versiones en el encabezado para alternar entre ellas.

## Arquitectura Monoversión

Para sitios sin múltiples versiones, puedes colocar el contenido documental directamente dentro de `content/docs/`:

```text
content/
├── _index.md
└── docs/
    ├── _index.md
    ├── installation.md
    └── configuration.md
```

Hudocs detecta automáticamente el modo monoversión cuando no existen subcarpetas de versión o mediante `params.docs_versions = false`.

## Archivos de Contenido

### Índice de Sección

Las secciones usan `_index.md` para definir título, icono y comportamiento. Para redirigir una sección a una página:

```markdown
---
title: Comenzando
icon: rocket
layout: redirect
redirect: "/installation"
weight: 1
---
```

### Páginas de Contenido

Las páginas individuales utilizan archivos Markdown con front matter:

```markdown
---
title: Instalación
icon: download
weight: 1
badge: true
badge_text: "v2.0"
---

Contenido de la página...
```

### Archivos Multilingües

Para crear una traducción, usa el [soporte multilingüe](https://gohugo.io/content-management/multilingual/) de Hugo agregando el código de idioma al nombre del archivo:

* `page.md`: idioma predeterminado.
* `page.es.md`: traducción al español.

Hugo vincula automáticamente los archivos de una misma página.

## Referencia del Front Matter

| Campo        | Tipo                 | Descripción                                        |
| :----------- | :------------------- | :------------------------------------------------- |
| `title`      | {{< type string >}}  | Título de la página.                               |
| `icon`       | {{< type string >}}  | Icono de [Meteor Icons](https://meteoricons.com/). |
| `weight`     | {{< type int >}}     | Orden en el menú.                                  |
| `badge`      | {{< type boolean >}} | Muestra la insignia.                               |
| `badge_text` | {{< type string >}}  | Texto de la insignia.                              |
| `badge_url`  | {{< type string >}}  | URL de destino de la insignia.                     |
| `hidden`     | {{< type boolean >}} | Oculta la página del menú.                         |
| `toc`        | {{< type boolean >}} | Desactiva la Tabla de Contenidos si es `false`.    |
| `layout`     | {{< type string >}}  | Define el layout, ej. `redirect`.                  |
| `redirect`   | {{< type string >}}  | Ruta de destino para `layout: redirect`.           |