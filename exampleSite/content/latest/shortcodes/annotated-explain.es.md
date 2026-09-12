---
title: Anotaciones
weight: 2
---

El shortcode `annotated` permite combinar un elemento de contenido con una nota explicativa. Puedes utilizarlo con bloques de código, pestañas o tablas. Usa `---` o `<!-- split -->` para separar el contenido principal de la nota.

## Uso básico

Escribe tu contenido, añade `---` como separador y luego la nota explicativa:

````markdown
{{</* annotated */>}}
```javascript
console.log("Hola mundo");
```
---
Nota explicativa.
{{</* /annotated */>}}
````

### Resultado

{{< annotated >}}
```javascript
console.log("Hola mundo");
```
---
Nota explicativa.
{{< /annotated >}}

## Parámetros

| Parámetro | Posición | Tipo   | Requerido | Descripción                             |
| :-------- | :------: | :----- | :-------: | :-------------------------------------- |
| `class`   |    `0`   | string |     No    | Clase CSS adicional para el contenedor. |

## Bloques de código

Utiliza `annotated` para agrupar un bloque de código con su explicación:

````markdown
{{</* annotated */>}}
```bash
npm install @ejemplo/sdk
```
---
Este comando instala el paquete `@ejemplo/sdk` mediante npm.
{{</* /annotated */>}}
````

{{< annotated >}}
```bash
npm install @ejemplo/sdk
```
---
Este comando instala el paquete `@ejemplo/sdk` mediante npm.
{{< /annotated >}}

## Tabs

Puedes combinar `annotated` con `tabs` para añadir una explicación común a varias pestañas:

````markdown
{{</* annotated */>}}
{{</* tabs */>}}
{{</* tab "Saludo" */>}}
Hola, este es un ejemplo de explicación común a varias pestañas.
{{</* /tab */>}}
{{</* tab "Despedida" */>}}
Adiós, este es un ejemplo de explicación común a varias pestañas.
{{</* /tab */>}}
{{</* /tabs */>}}
---
Este es un ejemplo de explicación común a varias pestañas.
{{</* /annotated */>}}
````

{{< annotated >}}
{{< tabs >}}
{{< tab "Saludo" >}}
Hola, este es un ejemplo de explicación común a varias pestañas.
{{< /tab >}}
{{< tab "Despedida" >}}
Adiós, este es un ejemplo de explicación común a varias pestañas.
{{< /tab >}}
{{< /tabs >}}
---
Este es un ejemplo de explicación común a varias pestañas.
{{< /annotated >}}

## Tabs de código

También puedes combinar `annotated` con `tabs` y `tab` para añadir una explicación común a varias pestañas de código:

````markdown
{{</* annotated */>}}
{{</* tabs */>}}
{{</* tab "npm" */>}}
```bash
npm install @ejemplo/sdk
```
{{</* /tab */>}}
{{</* tab "yarn" */>}}
```bash
yarn add @ejemplo/sdk
```
{{</* /tab */>}}
{{</* /tabs */>}}
---
Este paquete requiere Node.js 18 o superior.
{{</* /annotated */>}}
````

{{< annotated >}}
{{< tabs >}}
{{< tab "npm" >}}
```bash
npm install @ejemplo/sdk
```
{{< /tab >}}
{{< tab "yarn" >}}
```bash
yarn add @ejemplo/sdk
```
{{< /tab >}}
{{< /tabs >}}
---
Este paquete requiere Node.js 18 o superior.
{{< /annotated >}}

## Tablas

También puedes combinar una tabla con una nota explicativa:

````markdown
{{</* annotated */>}}
| Parámetro | Tipo | Por defecto |
| :--- | :--- | :--- |
| `timeout` | number | `3000` |
| `retries` | number | `3` |
---
El valor de `timeout` se expresa en milisegundos.
{{</* /annotated */>}}
````

{{< annotated >}}
| Parámetro | Tipo | Por defecto |
| :--- | :--- | :--- |
| `timeout` | number | `3000` |
| `retries` | number | `3` |
---
El valor de `timeout` se expresa en milisegundos.
{{< /annotated >}}

## Separador alternativo

Puedes usar `<!-- split -->` en lugar de `---` si tu contenido contiene reglas horizontales:

````markdown
{{</* annotated */>}}
```yaml
key: value
```
<!-- split -->
El campo `key` acepta cualquier cadena de texto.
{{</* /annotated */>}}
````

El contenido debajo del separador se procesa mediante `.Page.RenderString`, por lo que admite Markdown.
