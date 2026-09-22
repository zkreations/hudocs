---
title: Menús Globales
weight: 2
---

Hudocs separa el contenido de la documentación de la navegación global. Mientras que el árbol documental se genera automáticamente a partir de los directorios de contenido, los enlaces de navegación global se gestionan mediante el sistema de menús estándar de Hugo (`menus.main`) en `hugo.toml` y se renderizan al pie de la barra lateral.

## Declaración

Declara los elementos del menú bajo la tabla `[menus]` en `hugo.toml`:

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

Los elementos se muestran en orden ascendente según el parámetro `weight`.

## Enlaces internos con pageRef

Para destinos internos como la portada de la documentación, utiliza `pageRef`:

```toml
[[menus.main]]
  pageRef = "/docs"
  weight = 1
```

* Hugo resuelve la página de destino en el idioma activo de forma automática.
* Los títulos y rutas localizadas se obtienen directamente del front matter de la página de destino (`title` en `_index.md` e `_index.<lang>.md`).
* Al visitar la página o sus subpáginas, el elemento del menú recibe automáticamente las clases CSS `.is-current` e `.is-active`.
* El parámetro de front matter `hidden: true` únicamente oculta páginas del árbol documental automático; no afecta a elementos declarados explícitamente en `menus.main`.

## Enlaces externos

Para destinos externos, proporciona `name` y `url`:

```toml
[[menus.main]]
  name = "GitHub"
  url = "https://github.com/zkreations/hudocs"
  weight = 2
```

Hudocs añade automáticamente `target="_blank"` y `rel="noreferrer noopener"`. Además, muestra el indicador `arrow-up-right` en el extremo derecho del elemento.

## Iconos del menú

Los elementos del menú admiten iconos del catálogo Meteor Icons:

1. **Icono explícito:** define `icon` dentro de `params`:

```toml
[[menus.main]]
  name = "GitHub"
  url = "https://github.com/zkreations/hudocs"
  weight = 2
  [menus.main.params]
    icon = "github"
```

2. **Icono heredado:** en elementos que usan `pageRef`, si se omite `params.icon`, Hudocs hereda automáticamente el `icon` definido en el front matter de la página de destino.

En enlaces externos con iconos personalizados, la flecha de enlace externo permanece visible en el extremo derecho.

## Traducción multidioma

### Enlaces internos

Al usar `pageRef`, las traducciones son automáticas. Hugo enlaza el archivo `.md` localizado correspondiente al idioma activo.

### Enlaces externos sin i18n

Para traducir un enlace externo sin definir claves en `i18n`, declara la entrada de forma global con un `identifier` y sobrescribe el `name` dentro de la tabla del idioma correspondiente en `hugo.toml`:

```toml
[menus]
  [[menus.main]]
    identifier = "support"
    name = "Support"
    url = "https://example.com/support"
    weight = 10

[languages.es.menus]
  [[languages.es.menus.main]]
    identifier = "support"
    name = "Soporte"
```

Hugo fusiona los elementos que comparten el mismo `identifier`, permitiendo traducir etiquetas por idioma declarando las URLs y los pesos una sola vez.

### Traducciones con i18n

También puedes asignar un `identifier` y definir su traducción en `i18n/<lang>.toml`:

```toml
[support]
other = "Soporte"
```

Hudocs busca primero el `identifier` en `i18n` antes de utilizar `name`.

