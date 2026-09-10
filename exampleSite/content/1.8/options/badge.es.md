---
title: Badge
badge: true
description: Insignias para destacar elementos del menu y títulos
---

Un badge es un elemento que se puede agregar a los títulos de las páginas. También forma parte del menú lateral, permitiendo indicar a los lectores que una página contiene algo especial.

## Uso

Para agregar un badge, establece el atributo `badge` en `true` dentro del front matter de la página:

```markdown
---
title: My Page
badge: true
---

Page content
```

El texto del badge se puede personalizar mediante el parámetro `badge_text`:

```markdown
---
title: My Page
badge: true
badge_text: Featured
---

Page content
```

Si `badge_text` no está definido en la página, se utilizará el valor definido en la configuración del sitio. Si ninguno está definido, se utilizará como valor predeterminado el valor traducido de `New`.

### URL del badge

Opcionalmente, puedes convertir el badge en un enlace definiendo el parámetro `badge_url`:

```markdown
---
title: My Page
badge: true
badge_text: Featured
badge_url: "https://www.zkreations.com"
---

Page content
```

Si `badge_url` no está definido en la página, se utilizará el valor definido en la configuración del sitio. Si ninguno está definido, el badge se mostrará sin ningún enlace.

## Parámetros

Los siguientes parámetros se pueden definir en el archivo de configuración de goHugo, dentro de la sección de parámetros personalizados:

{{< code >}}
{{< tab "toml" >}}
[params]
  badge_text = "New"
  badge_url = "https://www.zkreations.com"
{{< /tab >}}
{{< tab "yaml" >}}
params:
  badge_text: "New"
  badge_url: "https://www.zkreations.com"
{{< /tab >}}
{{< tab "json" >}}
"params": {
  "badge_text": "New",
  "badge_url": "https://www.zkreations.com"
}
{{< /tab >}}
{{< /code >}}

### Prioridad de los parámetros

Los parámetros definidos a nivel de página tienen prioridad sobre los parámetros definidos a nivel de sitio.

* `badge`: Debe establecerse en `true` en la página para mostrar el badge.
* `badge_text`: Valor de la página → valor del sitio → valor traducido de `New`.
* `badge_url`: Valor de la página → valor del sitio → sin URL.

Si `badge` no está establecido en `true`, el badge no se mostrará.
