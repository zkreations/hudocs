---
title: Editar
description: Botón para editar una página en GitHub
---

Si deseas que tus lectores puedan editar una página de tu documento en GitHub, puedes habilitar el botón de editar en la cabecera que contiene el título.

## Parámetros

Para activar el botón editar, debes agregar en tu archivo de configuraciones de goHugo el siguiente parámetros personalizado, el cual debe contener la ruta exacta hacia la carpeta "content":

{{< code >}}
{{< tab "toml" >}}
[params]
  github_repo_edit = "https://github.com/zkreations/docs/blob/master/demo/content"
{{< /tab >}}
{{< tab "yaml" >}}
params:
  github_repo_edit: "https://github.com/zkreations/docs/blob/master/demo/content"
{{< /tab >}}
{{< tab "json" >}}
"params": {
  "github_repo_edit": "https://github.com/zkreations/docs/blob/master/demo/content"
}
{{< /tab >}}
{{< /code >}}