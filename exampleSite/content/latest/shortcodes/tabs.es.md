---
title: Pestañas
weight: 7
---

Los shortcodes `tabs` y `tab` permiten organizar contenido en pestañas seleccionables. Cada grupo mantiene una pestaña activa y procesa su contenido mediante Markdown.

## Uso básico

Envuelve cada pestaña en un shortcode `tab` dentro de `tabs`:

````markdown
{{</* tabs */>}}
{{</* tab "macOS" */>}}
Bienvenido a la instalación en macOS
{{</* /tab */>}}
{{</* tab "Linux" */>}}
Bienvenido a la instalación en Linux
{{</* /tab */>}}
{{</* tab "Windows" */>}}
Bienvenido a la instalación en Windows
{{</* /tab */>}}
{{</* /tabs */>}}
````

### Resultado

{{< tabs >}}
{{< tab "macOS" >}}
Bienvenido a la instalación en macOS
{{< /tab >}}
{{< tab "Linux" >}}
Bienvenido a la instalación en Linux
{{< /tab >}}
{{< tab "Windows" >}}
Bienvenido a la instalación en Windows
{{< /tab >}}
{{< /tabs >}}

## Parámetros

### tabs

| Parámetro | Posición | Tipo                | Requerido | Descripción                              |
| :-------- | :------: | :------------------ | :-------: | :--------------------------------------- |
| `class`   |    `0`   | {{< type string >}} |     No    | Clase CSS adicional para el contenedor.  |

### tab

| Parámetro | Posición | Tipo                | Requerido | Descripción                                              |
| :-------- | :------: | :------------------ | :-------: | :------------------------------------------------------- |
| `title`   |    `0`   | {{< type string >}} |     No    | Texto de la pestaña. Por defecto: `Tab 1`, `Tab 2`, etc. |

## Bloques de código

Si el contenido de una pestaña incluye unicamente un bloque de código, las pestañas se renderizan combinadas con el bloque de código.

````markdown
{{</* tabs */>}}
{{</* tab "pnpm" */>}}
```bash
pnpm add @example/sdk
```
{{</* /tab */>}}
{{</* tab "yarn" */>}}
```bash
yarn add @example/sdk
```
{{</* /tab */>}}
{{</* /tabs */>}}
````

### Resultado

{{< tabs >}}
{{< tab "pnpm" >}}
```bash
pnpm add @example/sdk
```
{{< /tab >}}
{{< tab "yarn" >}}
```bash
yarn add @example/sdk
```
{{< /tab >}}
{{< /tabs >}}

## Restricción de tab

El shortcode `tab` debe utilizarse directamente dentro de `tabs`. Si se utiliza fuera de este contenedor, Hugo detiene la compilación e informa del error correspondiente:

```markdown
{{</* tab "Inválida" */>}}
Esta pestaña no es válida.
{{</* /tab */>}}
```

Además, `tab` requiere un identificador de grupo válido para generar los identificadores de sus controles y paneles.
