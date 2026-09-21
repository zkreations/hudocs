---
title: Botones
weight: 1
---

El shortcode `button` genera enlaces con apariencia de botón para dirigir a otras páginas de la documentación o a recursos externos.

## Uso básico

Utiliza parámetros nombrados para definir el destino, el texto y las opciones del botón:

```markdown
{{</* button href="/docs/latest/getting-started" name="Comenzar" icon="rocket" type="primary" */>}}
{{</* button href="https://github.com/zkreations/hudocs" name="GitHub" icon="github" */>}}
```

### Resultado

{{< button href="/docs/latest/getting-started" name="Comenzar" icon="rocket" type="primary" >}}
{{< button href="https://github.com/zkreations/hudocs" name="GitHub" icon="github" >}}

## Parámetros

| Parámetro | Posición | Tipo                | Requerido | Descripción                                                     |
| :-------- | :------: | :------------------ | :-------: | :-------------------------------------------------------------- |
| `href`    |    `0`   | {{< type string >}} |     Sí    | URL de destino, interna o externa.                              |
| `name`    |    `1`   | {{< type string >}} |     Sí    | Texto visible. También admite `title` y `text` como alias.      |
| `icon`    |    `2`   | {{< type string >}} |     No    | Nombre de un ícono de [Meteor Icons](https://meteoricons.com/). |
| `type`    |    `3`   | {{< type string >}} |     No    | Variante visual, como `primary`.                                |
| `rel`     |    `4`   | {{< type string >}} |     No    | Valor personalizado del atributo `rel`.                         |

## Sintaxis posicional

Los parámetros pueden proporcionarse por posición en el orden indicado en la tabla:

```markdown
{{</* button "/docs/latest/getting-started/installation/" "Comenzar" "rocket" "primary" "nofollow" */>}}
```

## Variantes

### Botón estándar

Utiliza la apariencia definida por el tema cuando no se especifica `type`:

```markdown
{{</* button href="#demo" name="Descargar guía" */>}}
```

{{< button href="#demo" name="Descargar guía" >}}

### Botón primario

El valor `primary` genera la clase `btn-primary`:

```markdown
{{</* button href="#demo" name="Instalación rápida" type="primary" */>}}
```

{{< button href="#demo" name="Instalación rápida" type="primary" >}}

## Validación

El atributo `href` y la etiqueta del botón son obligatorios. Si falta `href` o no se proporciona `name`, `title` o `text`, Hugo detiene la compilación e informa del parámetro faltante.

## Resolución de enlaces

El shortcode delega la resolución de la URL y de los atributos `target` y `rel` en el partial `resolve-link`. Para las rutas internas, `resolve-link` utiliza `relLangURL` para generar la URL correspondiente al idioma activo.
