---
title: Badge
badge: test
description: Insignias para destacar elementos del menu y títulos
---

La insignia es un elemento que se puede agregar a los títulos de las páginas. También conforman parte del menu lateral, lo que te permite indicar a tus lectores que una página contiene algo especial.

## Usar

Para agregar una insignia agrega el atributo `badge` con el valor que desees a la cabecera de la página. Por ejemplo:

```markdown
---
title: Mi página
badge: test
---

Contenido de la página
```

## Parámetros

Adicionalmente, puedes agregar a tu archivo de configuraciones de goHugo, en el apartado de parámetros personalizados, el siguiente parámetro:

{{< code >}}
{{< tab "toml" >}}
[params]
  badge_url = "https://www.zkreations.com"
{{< /tab >}}
{{< tab "yaml" >}}
params:
  badge_url: "https://www.zkreations.com"
{{< /tab >}}
{{< tab "json" >}}
"params": {
  "badge_url": "https://www.zkreations.com"
}
{{< /tab >}}
{{< /code >}}