---
title: Estructura del Proyecto
weight: 3
---

Hudocs organiza el contenido de Hugo por versiones y secciones. La estructura de `content/` determina cómo se agrupan las páginas en el menú lateral.

## Arquitectura Multi-Versión

Por defecto, Hudocs utiliza las carpetas de primer nivel de `content/` como versiones:

```text
content/
├── latest/
│   ├── _index.md
│   ├── getting-started/
│   │   ├── _index.md
│   │   ├── installation.md
│   │   └── ...
│   └── guides/
│       ├── _index.md
│       └── ...
├── 1.8/
│   ├── _index.md
│   └── ...
└── 1.0/
    ├── _index.md
    └── ...
```

Cada carpeta raíz (`latest`, `1.8`, `1.0`) representa una versión. Hudocs detecta estas secciones y las muestra en el selector de versiones.

## Arquitectura de Versión Única

Para sitios sin varias versiones, puedes colocar el contenido en una única sección:

```text
content/
└── docs/
    ├── _index.md
    ├── installation.md
    └── configuration.md
```

## Archivos de contenido

### Índice de sección

Las secciones pueden utilizar `_index.md` para definir su título, ícono y comportamiento. Para redirigir una sección a una página:

```markdown
---
title: Primeros Pasos
icon: rocket
layout: redirect
redirect: "/installation"
weight: 1
---
```

### Páginas de contenido

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

### Archivos multilingües

Para crear una traducción, utiliza el soporte [multilingüe de Hugo](https://gohugo.io/content-management/multilingual/). Por ejemplo, añade el código de idioma al nombre del archivo:

* `pagina.md`: idioma por defecto.
* `pagina.es.md`: traducción al español.

Hugo relaciona automáticamente los archivos de una misma página. Cualquier estructura de contenido multilingüe compatible con Hugo también es compatible con Hudocs.

## Referencia de Front Matter

| Campo        | Tipo    | Descripción                                        |
| :----------- | :------ | :------------------------------------------------- |
| `title`      | string  | Título de la página.                               |
| `icon`       | string  | Ícono de [Meteor Icons](https://meteoricons.com/). |
| `weight`     | integer | Orden en el menú.                                  |
| `badge`      | boolean | Muestra la insignia.                               |
| `badge_text` | string  | Texto de la insignia.                              |
| `badge_url`  | string  | URL de destino de la insignia.                     |
| `hidden`     | boolean | Oculta la página del menú.                         |
| `layout`     | string  | Define el layout, por ejemplo `redirect`.          |
| `redirect`   | string  | Ruta de destino para `layout: redirect`.           |