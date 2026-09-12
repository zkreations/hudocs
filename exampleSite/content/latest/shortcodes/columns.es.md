---
title: Columnas
weight: 4
---

Los shortcodes `columns` y `column` permiten organizar contenido en columnas de igual ancho que se adaptan al tamaño de la pantalla.

## Uso básico

Envuelve cada bloque de contenido en un shortcode `column` dentro de `columns`:

````markdown
{{</* columns */>}}
{{</* column */>}}
Las ballenas son enormes mamíferos que viven en los océanos.
Son conocidas por su gran tamaño, inteligencia y tranquilidad.
{{</* /column */>}}
{{</* column */>}}
Se alimentan de pequeños organismos como peces y krill.
Además, se comunican mediante sonidos que pueden viajar largas distancias.
{{</* /column */>}}
{{</* /columns */>}}
````

### Resultado

{{< columns >}}
{{< column >}}
Las ballenas son enormes mamíferos que viven en los océanos.
Son conocidas por su gran tamaño, inteligencia y tranquilidad.
{{< /column >}}
{{< column >}}
Se alimentan de pequeños organismos como peces y krill.
Además, se comunican mediante sonidos que pueden viajar largas distancias.
{{< /column >}}
{{< /columns >}}

## Parámetros

### columns

| Parámetro | Posición | Tipo   | Requerido | Descripción                             |
| :-------- | :------: | :----- | :-------: | :-------------------------------------- |
| `class`   |    `0`   | string |     No    | Clase CSS adicional para el contenedor. |

### column

| Parámetro | Posición | Tipo   | Requerido | Descripción                          |
| :-------- | :------: | :----- | :-------: | :----------------------------------- |
| `class`   |    `0`   | string |     No    | Clase CSS adicional para la columna. |

## Múltiples columnas

Puedes añadir tantos shortcodes `column` como necesites. Cada columna procesa su contenido mediante `RenderString`, por lo que admite Markdown:

```markdown
{{</* columns */>}}
{{</* column */>}}
#### 1. Planificar

Define los requisitos y especificaciones técnicas.
{{</* /column */>}}
{{</* column */>}}
#### 2. Construir

Escribe el código y ejecuta las pruebas de validación.
{{</* /column */>}}
{{</* column */>}}
#### 3. Desplegar

Publica mediante tu pipeline de CI/CD.
{{</* /column */>}}
{{</* /columns */>}}
```

### Resultado

{{< columns >}}
{{< column >}}
#### 1. Planificar

Define los requisitos y especificaciones técnicas.
{{< /column >}}
{{< column >}}
#### 2. Construir

Escribe el código y ejecuta las pruebas de validación.
{{< /column >}}
{{< column >}}
#### 3. Desplegar

Publica mediante tu pipeline de CI/CD.
{{< /column >}}
{{< /columns >}}

## Comportamiento responsivo

Las columnas se muestran en paralelo en pantallas de escritorio y se apilan verticalmente en pantallas pequeñas. El ancho de cada columna se distribuye mediante Flexbox.

## Restricción de column

El shortcode `column` debe utilizarse directamente dentro de `columns`. Si se utiliza fuera de este contenedor, Hugo detiene la compilación e informa del error correspondiente:

```markdown
{{</* column */>}}
Esta columna no es válida.
{{</* /column */>}}
```

`columns` no tiene parámetros obligatorios y puede contener cualquier contenido procesado por Hugo. `column` procesa su contenido mediante `.Page.RenderString`, por lo que admite Markdown.
