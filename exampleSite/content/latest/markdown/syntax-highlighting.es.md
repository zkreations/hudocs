---
title: Resaltado de sintaxis
weight: 4
---

HuDocs utiliza los bloques de código cercados de Hugo para mostrar ejemplos de código. Además del resaltado de sintaxis, estos bloques permiten modificar su presentación mediante diferentes opciones.

Esta página muestra algunas de las opciones más útiles. Para consultar todas las opciones disponibles, revisa la [documentación oficial de Hugo](https://gohugo.io/content-management/syntax-highlighting/).

## Nombre de archivo

Puedes mostrar el nombre del archivo en la parte superior del bloque de código utilizando `filename`.

```javascript {filename="main.js"}
const app = document.querySelector("#app");

app.textContent = "Hello, world!";
```

## Números de línea

Puedes mostrar números junto a las líneas del código.

```html {linenos=true}
<main class="hero">
  <h1>Welcome to HuDocs</h1>
  <p>Build beautiful documentation with Hugo.</p>
  <a href="/docs/">Read the documentation</a>
</main>
```

También puedes mostrarlos dentro del propio bloque utilizando `inline`.

```css {linenos=inline}
.hero {
  display: grid;
  gap: 1rem;
  max-width: 40rem;
}

.hero a {
  text-decoration: none;
}
```

## Resaltar líneas

La opción `hl_lines` permite destacar líneas específicas del bloque.

```javascript {hl_lines=[2]}
const greeting = "Hello World";
const name = "Daniel";

console.log(`${greeting}, ${name}`);
```

También puedes resaltar un rango de líneas.

```json {hl_lines=["2-4"]}
{
  "name": "hudocs",
  "version": "2.0.0",
  "license": "MIT"
}
```

## Cambiar la línea inicial

Cuando se muestran números de línea, `lineNoStart` permite establecer el número de la primera línea.

```go {linenos=true lineNoStart=10}
func main() {
    message := "Hello, world!"
    fmt.Println(message)
}
```

El bloque anterior comienza en la línea `10`.

## Enlaces para las líneas

Puedes convertir los números de línea en anclas utilizando `anchorLineNos`.

```bash {linenos=true anchorLineNos=true}
hugo new content/docs/getting-started.md
hugo server
```

`lineAnchors` permite añadir un prefijo a esos identificadores. Esto resulta útil cuando una página contiene varios bloques con números de línea.

```yaml {linenos=true anchorLineNos=true lineAnchors=config}
markup:
  highlight:
    noClasses: false
    lineNos: true
    lineNumbersInTable: true
```

Estas son solo algunas de las opciones disponibles para los bloques de código. Consulta la [documentación de Hugo sobre resaltado de sintaxis](https://gohugo.io/content-management/syntax-highlighting/) para conocer el resto.
