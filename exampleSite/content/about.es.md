---
title: Sobre el proyecto
description: Información general sobre Hudocs y las páginas independientes.
---

Hudocs es un tema para [Hugo](https://gohugo.io/) orientado a la creación de documentación técnica. Además de las páginas que forman parte de la documentación, un proyecto puede incluir páginas independientes para presentar información general que no pertenece a una versión específica.

## Sobre Hudocs

Hudocs separa el contenido de documentación de la información general del proyecto. Las páginas de documentación se organizan dentro de `content/docs/` y pueden asociarse a distintas versiones, mientras que las páginas independientes se mantienen fuera de esa estructura.

Este tipo de página resulta útil para contenido que debe estar disponible sin importar qué versión de la documentación esté seleccionada.

## Cuándo utilizar una página independiente

Una página independiente puede utilizarse para contenido como:

* Información sobre el proyecto.
* Información de contacto.
* Políticas de privacidad.
* Términos de uso.
* Créditos y atribuciones.
* Información sobre la versión actual del sitio.
* Cualquier otra página que no dependa de una versión de la documentación.

Por ejemplo, una página `about.md` ubicada directamente en `content/` puede permanecer disponible aunque el usuario cambie entre las versiones `latest`, `1.8` y `1.7`.

## Características

### Alcance global

Las páginas independientes no pertenecen a una versión concreta de la documentación. Por ello, su contenido permanece disponible independientemente del selector de versión utilizado.

### Plantilla de página

Se renderizan mediante la plantilla de página independiente de Hudocs. Incluyen el menú de navegación global en la barra lateral y una tabla de contenidos generada a partir de los encabezados de la página, manteniéndose independientes del árbol de versiones de la documentación.

### Navegación global

Las páginas independientes pueden incorporarse a la navegación principal mediante `pageRef`:

```toml
[[menus.main]]
name = "Acerca de"
pageRef = "/about"
weight = 10
```

De esta forma, la página puede formar parte de la navegación global del sitio sin asociarse a una versión específica.

### Soporte multilingüe

Las páginas independientes también pueden utilizar el sistema multilingüe de Hugo. Por ejemplo:

```text
content/
├── about.md
└── about.es.md
```

Hugo seleccionará la traducción correspondiente según el idioma activo del sitio.

## Estructura

Una estructura básica puede ser:

```text
content/
├── docs/
│   ├── latest/
│   └── 1.8/
├── about.md
└── contact.md
```

En este ejemplo, `about.md` y `contact.md` son páginas independientes, mientras que el contenido dentro de `docs/` pertenece a la documentación versionada.

## Contenido de ejemplo

Una página independiente no está limitada a texto simple. Puede utilizar los mismos recursos de Markdown disponibles en el resto del sitio:

> Hudocs proporciona la estructura visual y de navegación; el contenido de cada página sigue siendo responsabilidad del proyecto que utiliza el tema.

También puedes incluir listas, enlaces, imágenes, bloques de código y otros elementos compatibles con Hugo según las necesidades de la página.
