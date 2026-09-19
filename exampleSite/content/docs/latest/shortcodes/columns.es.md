---
title: Columnas
weight: 4
---

El shortcode `columns` permite organizar contenido en columnas de igual ancho que se adaptan al tamaño de la pantalla. Usa `---` o `<!-- split -->` para separar cada columna.

## Uso básico

Escribe tus bloques de contenido separados por `---`:

````markdown
{{</* columns */>}}
Las ballenas son enormes mamíferos que viven en los océanos.
Son conocidas por su gran tamaño, inteligencia y tranquilidad.
---
Se alimentan de pequeños organismos como peces y krill.
Además, se comunican mediante sonidos que pueden viajar largas distancias.
{{</* /columns */>}}
````

### Resultado

{{< columns >}}
Las ballenas son enormes mamíferos que viven en los océanos.
Son conocidas por su gran tamaño, inteligencia y tranquilidad.
---
Se alimentan de pequeños organismos como peces y krill.
Además, se comunican mediante sonidos que pueden viajar largas distancias.
{{< /columns >}}

## Parámetros

| Parámetro | Posición | Tipo                | Requerido | Descripción                             |
| :-------- | :------: | :------------------ | :-------: | :-------------------------------------- |
| `class`   |    `0`   | {{< type string >}} |     No    | Clase CSS adicional para el contenedor. |

## Múltiples columnas

Puedes añadir tantas columnas como necesites usando separadores `---` adicionales. Cada columna procesa su contenido mediante `RenderString`, por lo que admite Markdown:

````markdown
{{</* columns */>}}
#### 1. Planificar

Define los requisitos y especificaciones técnicas.
---
#### 2. Construir

Escribe el código y ejecuta las pruebas de validación.
---
#### 3. Desplegar

Publica mediante tu pipeline de CI/CD.
{{</* /columns */>}}
````

### Resultado

{{< columns >}}
#### 1. Planificar

Define los requisitos y especificaciones técnicas.
---
#### 2. Construir

Escribe el código y ejecuta las pruebas de validación.
---
#### 3. Desplegar

Publica mediante tu pipeline de CI/CD.
{{< /columns >}}

## Separador alternativo

Puedes usar `<!-- split -->` en lugar de `---` si tu contenido contiene reglas horizontales:

````markdown
{{</* columns */>}}
Primera columna con contenido.
<!-- split -->
Segunda columna con contenido.
{{</* /columns */>}}
````

## Comportamiento responsivo

Las columnas se muestran en paralelo en pantallas de escritorio y se apilan verticalmente en pantallas pequeñas. El ancho de cada columna se distribuye mediante Flexbox.
