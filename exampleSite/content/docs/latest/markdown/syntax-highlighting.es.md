---
title: Resaltado de sintaxis
weight: 4
---

Hudocs utiliza los bloques de código cercados de Hugo para mostrar ejemplos de código. Además del resaltado de sintaxis, estos bloques permiten modificar su presentación mediante diferentes opciones.

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
<!-- Comments -->
<main class="hero">
  <h1>Welcome to Hudocs</h1>
  <p>Build beautiful documentation with Hugo.</p>
</main>
```

También puedes mostrarlos dentro del propio bloque utilizando `inline`.

```css {linenos=inline}
.hero {
  display: grid;
  gap: 1rem;
  max-width: 40rem;
}
```

## Resaltar líneas

La opción `hl_lines` permite destacar líneas específicas del bloque.

```python {hl_lines=[2]}
greeting = "Hello World"
name = "Daniel"

print(f"{greeting}, {name}")
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

## Copiar al portapapeles

Hudocs inyecta automáticamente un botón de copiado en todos los bloques de código con resaltado de sintaxis.

* El botón ofrece confirmación visual localizada (`¡Copiado!` o `¡Error al copiar!`) mediante mensajes emergentes (tooltips).
* Al copiar desde bloques con números de línea activos, los prefijos de número (`.ln`) se retiran automáticamente, asegurando que solo se copie código limpio al portapapeles.

## Tema de código

Hudocs incluye temas Duotone para los bloques de código. El tema se selecciona en el archivo `hugo.toml` del sitio y se aplica a todo el código resaltado generado por Hugo y Chroma.

```toml
[params]
  code_theme = "duotone-dark-sea"
```

Los temas disponibles son `duotone-dark`, `duotone-dark-sky`, `duotone-dark-sea`, `duotone-dark-space`, `duotone-dark-earth` y `duotone-dark-forest`. El valor predeterminado es `duotone-dark`, que utiliza la paleta Sky. Un valor desconocido vuelve al tema predeterminado.

El tema del código es independiente del modo claro u oscuro de la interfaz del sitio. Es una opción de configuración del sitio, no un selector para visitantes, y no modifica el motor de resaltado de Hugo ni las opciones de los bloques de código descritas anteriormente.

Estas son solo algunas de las opciones disponibles para los bloques de código. Consulta la [documentación de Hugo sobre resaltado de sintaxis](https://gohugo.io/content-management/syntax-highlighting/) para conocer el resto.