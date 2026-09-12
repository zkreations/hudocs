---
title: Anotaciones
weight: 2
---

Los shortcodes `annotated` y `explain` permiten combinar un elemento de contenido con una nota explicativa. Puedes utilizarlos con bloques de código, pestañas o tablas.

## Uso básico

El shortcode `annotated` actúa como contenedor y `explain` añade la nota explicativa. El shortcode `explain` debe utilizarse directamente dentro de `annotated`.

````markdown
{{%/* annotated */%}}
```javascript
console.log("Hola mundo");
```
{{%/* explain */%}}
Nota explicativa.
{{%/* /explain */%}}
{{%/* /annotated */%}}
````

### Resultado

{{% annotated %}}
```javascript
console.log("Hola mundo");
```
{{% explain %}}
Nota explicativa.
{{% /explain %}}
{{% /annotated %}}

## Parámetros

### annotated

| Parámetro | Posición | Tipo   | Requerido | Descripción                             |
| :-------- | :------: | :----- | :-------: | :-------------------------------------- |
| `class`   |    `0`   | string |     No    | Clase CSS adicional para el contenedor. |

### explain

| Parámetro | Posición | Tipo   | Requerido | Descripción                       |
| :-------- | :------: | :----- | :-------: | :-------------------------------- |
| `class`   |    `0`   | string |     No    | Clase CSS adicional para la nota. |

## Bloques de código

Utiliza `annotated` para agrupar un bloque de código con su explicación:

````markdown
{{%/* annotated */%}}
```bash
npm install @ejemplo/sdk
```
{{%/* explain */%}}
Este comando instala el paquete `@ejemplo/sdk` mediante npm.
{{%/* /explain */%}}
{{%/* /annotated */%}}
````

{{% annotated %}}
```bash
npm install @ejemplo/sdk
```
{{% explain %}}
Este comando instala el paquete `@ejemplo/sdk` mediante npm.
{{% /explain %}}
{{% /annotated %}}

## Tabs

Puedes combinar `annotated` con `tabs` para añadir una explicación común a varias pestañas:

```markdown
{{%/* annotated */%}}
{{%/* tabs */%}}
{{%/* tab "Saludo" */%}}
Hola, este es un ejemplo de explicación común a varias pestañas.
{{%/* /tab */%}}
{{%/* tab "Despedida" */%}}
Adiós, este es un ejemplo de explicación común a varias pestañas.
{{%/* /tab */%}}
{{%/* /tabs */%}}
{{%/* explain */%}}
Este es un ejemplo de explicación común a varias pestañas.
{{%/* /explain */%}}
{{%/* /annotated */%}}
```

{{% annotated %}}
{{% tabs %}}
{{% tab "Saludo" %}}
Hola, este es un ejemplo de explicación común a varias pestañas.
{{% /tab %}}
{{% tab "Despedida" %}}
Adiós, este es un ejemplo de explicación común a varias pestañas.
{{% /tab %}}
{{% /tabs %}}
{{% explain %}}
Este es un ejemplo de explicación común a varias pestañas.
{{% /explain %}}
{{% /annotated %}}

## Tabs de código

También puedes combinar `annotated` con `tabs` y `tab` para añadir una explicación común a varias pestañas de código:

````markdown
{{%/* annotated */%}}
{{%/* tabs */%}}
{{%/* tab "npm" */%}}
```bash
npm install @ejemplo/sdk
```
{{%/* /tab */%}}
{{%/* tab "yarn" */%}}
```bash
yarn add @ejemplo/sdk
```
{{%/* /tab */%}}
{{%/* /tabs */%}}
{{%/* explain */%}}
Este paquete requiere Node.js 18 o superior.
{{%/* /explain */%}}
{{%/* /annotated */%}}
````

{{% annotated %}}
{{% tabs %}}
{{% tab "npm" %}}
```bash
npm install @ejemplo/sdk
```
{{% /tab %}}
{{% tab "yarn" %}}
```bash
yarn add @ejemplo/sdk
```
{{% /tab %}}
{{% /tabs %}}
{{% explain %}}
Este paquete requiere Node.js 18 o superior.
{{% /explain %}}
{{% /annotated %}}

## Tablas

También puedes combinar una tabla con una nota explicativa:

```markdown
{{%/* annotated */%}}
| Parámetro | Tipo | Por defecto |
| :--- | :--- | :--- |
| `timeout` | number | `3000` |
| `retries` | number | `3` |
{{%/* explain */%}}
El valor de `timeout` se expresa en milisegundos.
{{%/* /explain */%}}
{{%/* /annotated */%}}
```

{{% annotated %}}
| Parámetro | Tipo | Por defecto |
| :--- | :--- | :--- |
| `timeout` | number | `3000` |
| `retries` | number | `3` |
{{% explain %}}
El valor de `timeout` se expresa en milisegundos.
{{% /explain %}}
{{% /annotated %}}

## Restricción de explain

El shortcode `explain` debe estar contenido directamente dentro de `annotated`. Si se utiliza fuera de este contenedor, Hugo detiene la compilación e informa del error correspondiente.

```markdown
{{%/* explain */%}}
Esta nota no es válida.
{{%/* /explain */%}}
```

El contenido de `explain` se procesa mediante `.Page.RenderString`, por lo que admite Markdown.
