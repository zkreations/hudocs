---
title: Avisos y Alertas
weight: 3
---

El shortcode `hint` genera bloques destacados para mostrar información, recomendaciones, advertencias o alertas dentro de la documentación.

## Uso básico

Puedes especificar el tipo de aviso como primer parámetro posicional:

```markdown
{{</* hint info */>}}
Este es un aviso de **información**.
{{</* /hint */>}}
```

### Resultado

{{< hint info >}}
Este es un aviso de **información**.
{{< /hint >}}

## Parámetros

| Parámetro | Posición | Tipo   | Requerido | Descripción                                                     |
| :-------- | :------: | :----- | :-------: | :-------------------------------------------------------------- |
| `type`    |    `0`   | string |     No    | Tipo de aviso. Se utiliza para generar la clase `alert-{type}`. |
| `icon`    |    `1`   | string |     No    | Nombre de un ícono de [Meteor Icons](https://meteoricons.com/). |

Ambos parámetros pueden especificarse mediante parámetros nombrados o posicionales.

## Tipos de aviso

Hudocs no limita los valores de `type`. Los siguientes valores tienen estilos definidos por el tema:

| Tipo      | Uso                                           |
| :-------- | :-------------------------------------------- |
| `info`    | Información y notas complementarias.          |
| `success` | Confirmaciones o resultados satisfactorios.   |
| `warning` | Advertencias y posibles inconvenientes.       |
| `danger`  | Riesgos o acciones destructivas.              |
| `error`   | Errores o situaciones que requieren atención. |

Si no se especifica `type`, el aviso utiliza la apariencia neutra del tema:

```markdown
{{</* hint */>}}
Una anotación general.
{{</* /hint */>}}
```

{{< hint >}}
Una anotación **general**.
{{< /hint >}}

## Íconos

Puedes añadir un ícono mediante `icon`:

```markdown
{{</* hint type="success" icon="circle-info" */>}}
Esta información incluye un ícono.
{{</* /hint */>}}
```

{{< hint type="success" icon="circle-info" >}}
Esta información incluye un ícono.
{{< /hint >}}

También puedes proporcionar el ícono como segundo parámetro posicional:

```markdown
{{</* hint warning triangle-exclamation */>}}
Verifica los requisitos antes de continuar.
{{</* /hint */>}}
```

{{< hint warning triangle-exclamation >}}
Verifica los requisitos antes de continuar.
{{< /hint >}}

Si no se especifica `icon`, el aviso se muestra sin ícono.

## Accesibilidad

El shortcode establece el atributo `role` según el tipo de aviso, en donde `warning`, `danger` y `error` utilizan `role="alert"`, mientras que los demás tipos utilizan `role="status"`.

## Soporte para Markdown

El contenido del aviso se procesa mediante `.Page.RenderString`, por lo que admite Markdown, incluidos enlaces, código, texto resaltado y listas.
