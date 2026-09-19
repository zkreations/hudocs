---
title: Tipos de datos
weight: 8
---

El shortcode `type` muestra tipos de datos, expresiones y conjuntos de valores con estilos diferenciados.

## Uso básico

Indica el tipo como parámetro posicional:

```markdown
{{</* type string */>}}
{{</* type number */>}}
{{</* type boolean */>}}
```

### Resultado

{{< type string >}}
{{< type number >}}
{{< type boolean >}}

## Parámetros

| Parámetro | Posición | Tipo                | Requerido | Descripción                                            |
| :-------- | :------: | :------------------ | :-------: | :----------------------------------------------------- |
| `name`    |    `0`   | {{< type string >}} |     Sí    | Tipo, expresión o conjunto de valores que se mostrará. |

El parámetro también puede proporcionarse como `type`:

```markdown
{{</* type name="string" */>}}
{{</* type type="number" */>}}
```

## Tipos reconocidos

El shortcode clasifica determinados nombres de tipo para aplicarles estilos específicos. La comparación no distingue entre mayúsculas y minúsculas.

| Categoría    | Tipos reconocidos                           |
| :----------- | :------------------------------------------ |
| `textual`    | `string`, `char`, `rune`, `byte`            |
| `numeric`    | `number`, `int`, `float`, `uint`            |
| `logical`    | `boolean`, `bool`                           |
| `structural` | `object`, `array`, `function`, `map`, `set` |

Por ejemplo:

```markdown
{{</* type string */>}}
{{</* type int */>}}
{{</* type bool */>}}
{{</* type object */>}}
```

### Resultado

{{< type string >}}
{{< type int >}}
{{< type bool >}}
{{< type object >}}

## Tipos personalizados

Los tipos que no coinciden con los valores reconocidos se clasifican como `custom` y se muestran sin modificar su contenido:

```markdown
{{</* type "UserConfig" */>}}
{{</* type "Promise<Response>" */>}}
{{</* type "string | null" */>}}
{{</* type "string[]" */>}}
```

### Resultado

{{< type "UserConfig" >}}
{{< type "Promise<Response>" >}}
{{< type "string | null" >}}
{{< type "string[]" >}}

El shortcode no analiza la sintaxis de las expresiones. El valor recibido se muestra como texto.

## Tipos opcionales

Añade `?` al final del tipo para indicar que es opcional:

```markdown
{{</* type "string?" */>}}
{{</* type "number?" */>}}
{{</* type "UserConfig?" */>}}
```

### Resultado

{{< type "string?" >}}
{{< type "number?" >}}
{{< type "UserConfig?" >}}

## Valores permitidos

Envuelve un conjunto de valores entre `{` y `}` para clasificarlos como `values`:

```markdown
{{</* type "{light | dark}" */>}}
{{</* type "{asc | desc}" */>}}
{{</* type "{fixed | fluid}" */>}}
```

### Resultado

{{< type "{light | dark}" >}}
{{< type "{asc | desc}" >}}
{{< type "{fixed | fluid}" >}}

## Sintaxis posicional

El nombre del tipo puede proporcionarse como primer parámetro posicional:

```markdown
{{</* type string */>}}
{{</* type "Promise<Response>" */>}}
{{</* type "{light | dark}" */>}}
```

El parámetro `name` también puede utilizarse mediante parámetros nombrados:

```markdown
{{</* type name="string" */>}}
{{</* type type="number" */>}}
```
