---
title: Enlaces de Página
weight: 5
---

El shortcode `pagelink` genera un enlace con título, descripción e ícono para destacar páginas relacionadas o recursos externos.

## Uso básico

Utiliza parámetros nombrados para definir el destino, el título, la descripción y el ícono:

```markdown
{{</* pagelink href="/docs/latest/guides" title="Guías" description="Comienza en Hudocs" icon="book-open" */>}}
{{</* pagelink href="https://gohugo.io/" title="Documentación de Hugo" description="Guías oficiales" */>}}
```

### Resultado

{{< pagelink href="/docs/latest/guides" title="Guías" description="Comienza en Hudocs" icon="book-open" >}}

{{< pagelink href="https://gohugo.io/" title="Documentación de Hugo" description="Guías oficiales de Hugo" >}}

## Parámetros

| Parámetro     | Posición | Tipo                | Requerido | Descripción                                                     |
| :------------ | :------: | :------------------ | :-------: | :-------------------------------------------------------------- |
| `href`        |    `0`   | {{< type string >}} |     Sí    | Ruta de destino o URL externa.                                  |
| `title`       |    `1`   | {{< type string >}} |     Sí    | Título principal del enlace.                                    |
| `description` |    `2`   | {{< type string >}} |     No    | Texto descriptivo. También admite `subtitle` como alias.        |
| `icon`        |    `3`   | {{< type string >}} |     No    | Nombre de un ícono de [Meteor Icons](https://meteoricons.com/). |
| `rel`         |    `4`   | {{< type string >}} |     No    | Valor personalizado del atributo `rel`.                         |

## Enlaces externos e íconos

El parámetro `icon` es opcional. Si no se especifica, no se muestra ningún ícono al inicio.

Para los enlaces externos, el shortcode muestra automáticamente un indicador en el extremo derecho. Si además se define un `icon` personalizado, ambos íconos se muestran de forma independiente:

{{< pagelink href="https://gohugo.io/" title="Documentación de Hugo" description="Guías oficiales con ícono personalizado" icon="hugo" >}}

## Enlaces internos y externos

El shortcode delega la resolución del destino en el partial `resolve-link`. Para las rutas internas, `resolve-link` genera la URL correspondiente al idioma activo. Para las URLs externas, `resolve-link` determina los atributos `target` y `rel` que se aplican al enlace.

## Validación

Los parámetros `href` y `title` son obligatorios. Si falta cualquiera de ellos, Hugo detiene la compilación e informa del parámetro faltante.

El parámetro `description` es opcional. Si no se proporciona, la tarjeta se muestra sin texto descriptivo.
