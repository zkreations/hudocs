---
title: Navegación y Menús
weight: 1
---

Hudocs genera un menú lateral jerárquico a partir de la estructura de carpetas de `content/`. Las secciones pueden incluir páginas anidadas, íconos, insignias y un orden definido mediante `weight`.

## Estructura jerárquica

La navegación se genera a partir de la estructura de carpetas del contenido. Un directorio que contiene un archivo `_index.md` actúa como una sección del menú:

```text
content/docs/latest/
├── _index.md
└── guides/                     # Sección principal (Nivel 0)
    ├── _index.md
    ├── navigation.md           # Página final (Nivel 1)
    └── advanced/               # Sub-sección (Nivel 1)
        ├── _index.md
        └── deep-dive.md        # Página final (Nivel 2)
```

Hudocs no establece un límite de niveles de anidación. Para mantener una navegación legible, se recomienda utilizar una jerarquía de 2 o 3 niveles.

## Orden de páginas y secciones

Los elementos se ordenan de forma ascendente según el parámetro `weight` de su front matter:

```markdown
---
title: Configuración Avanzada
weight: 2
---
```

Las páginas con un valor menor de `weight` aparecen primero. Cuando se omite `weight`, Hugo aplica su propio orden de clasificación.

## Estado activo

Cuando un lector visita una página:

* El enlace de la página activa recibe la clase `.is-active`.
* Las secciones ascendentes reciben la clase `.is-current`.
* Los selectores de las secciones activas se abren automáticamente al cargar la página.

## Redirecciones de sección

Una sección puede redirigir directamente a una de sus páginas mediante el layout `redirect`:

```markdown
---
title: Guías
icon: book-open
layout: redirect
redirect: "/navigation"
weight: 2
---
```

El parámetro `redirect` recibe la ruta relativa de destino. Hugo genera el enlace con el prefijo de idioma correspondiente y la redirección mediante una cabecera `meta`.

## Íconos en la navegación

Puedes asignar un ícono del catálogo [Meteor Icons](https://meteoricons.com/) a una página o sección:

```markdown
---
title: Navegación y Menús
icon: align-left
---
```

Los íconos se renderizan como SVG en línea mediante el componente interno del tema.

## Insignias de estado

Para mostrar una insignia en el menú, añade `badge: true`:

```markdown
---
title: Webhooks
icon: zap
badge: true
badge_text: "Nuevo"
---
```

* Si no defines `badge_text`, se utiliza `site.Params.badge_text` o el valor traducido por defecto.
* La insignia también se muestra junto al título `<h1>` de la página.

## Ocultar páginas de la navegación

Para publicar una página sin mostrarla en el menú lateral, utiliza `hidden: true`:

```markdown
---
title: Guía no listada
hidden: true
---
```

Este parámetro puede utilizarse para páginas de aterrizaje, utilidades o redirecciones que no deban aparecer en la navegación.

## Menús globales y enlaces externos

Además del árbol documental automático, Hudocs admite enlaces globales renderizados en la parte inferior del menú lateral utilizando la configuración estándar de menús de Hugo (`menus.main`).

Puedes declarar estos enlaces en `hugo.toml`:

```toml
[menus]
  [[menus.main]]
    pageRef = "/docs"
    weight = 1

  [[menus.main]]
    name = "GitHub"
    url = "https://github.com/zkreations/hudocs"
    weight = 2
```

* **Enlaces internos:** utiliza `pageRef` apuntando a cualquier sección o página. Hudocs obtiene automáticamente el título y el enlace localizado para cada idioma a partir del front matter de la página de destino.
* **Enlaces externos:** utiliza `url` y `name`. Hudocs añade automáticamente `target="_blank"`, `rel="noreferrer noopener"` y muestra el icono `arrow-up-right`.
* **Iconos personalizados:** añade `[menus.main.params]` con `icon = "nombre"` para sustituir el icono por defecto.
* **Traducciones para elementos sin página:** define un `identifier` para traducir etiquetas personalizadas o externas mediante el diccionario `i18n`.
