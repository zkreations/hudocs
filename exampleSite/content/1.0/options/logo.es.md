---
title: Logo
description: El logo de la documentación
---

El logo puede estar conformado por texto, un icono del paquete [Meteor Icons](https://meteoricons.com/) más el texto o una imagen. Toma en cuenta que si usas una imagen, se recomienda usar el tamaño adecuado, o utilizar el formato SVG.

## Parámetros

En este caso dispones de dos parámetros personalizados. Si deseas un icono junto al texto define `logo_icon` con el nombre del icono que puedes obtener en [Meteor Icons](https://meteoricons.com/). Si deseas una imagen define `logo_img`. Si no defines ninguno de los dos, se mostrará solo el texto.

{{< code >}}
{{< tab "toml" >}}
[params]
  main_icon = "book-open"
  main_logo = "tu-logo.svg"
{{< /tab >}}
{{< tab "yaml" >}}
params:
  main_icon: "book-open"
  main_logo: "tu-logo.svg"
{{< /tab >}}
{{< tab "json" >}}
"params": {
  "main_icon": "book-open",
  "main_logo": "tu-logo.svg"
}
{{< /tab >}}
{{< /code >}}