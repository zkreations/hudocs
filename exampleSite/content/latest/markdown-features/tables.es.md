---
title: Tablas
weight: 1
---

Hudocs 2.0 admite tablas de Markdown mediante el render hook integrado de Hugo. Las tablas utilizan la sintaxis estándar de Markdown y no requieren shortcodes personalizados.

## Sintaxis nativa de Markdown

Escribe las tablas utilizando la sintaxis estándar de GitHub Flavored Markdown (GFM). La tabla se procesa automáticamente al generar el sitio:

```markdown
| Columna 1 | Columna 2 | Columna 3 |
| :-------- | :-------- | :-------- |
| Fila 1    | Valor A   | Valor B   |
| Fila 2    | Valor C   | Valor D   |
```

## Desplazamiento horizontal

En Hudocs 2.0, cada tabla de Markdown se procesa mediante el render hook `render-table.html`, que agrega el contenedor `.article-table` para permitir el desplazamiento horizontal cuando la tabla supera el ancho disponible:

```html
<div class="article-table">
  {{- .WrappedTable -}}
</div>
```

## Alineación de columnas

Alinea el contenido de cada columna utilizando dos puntos en la fila separadora:

* **Alineado a la izquierda:** `:---`
* **Centrado:** `:---:`
* **Alineado a la derecha:** `---:`

```markdown
| Izquierda | Centrado | Derecha |
| :-------- | :------: | ------: |
| Alpha     | Beta     | 1,000   |
| Gamma     | Delta    | 25,000  |
```

El resultado es:

| Izquierda | Centrado | Derecha |
| :-------- | :------: | ------: |
| Alpha     | Beta     | 1,000   |
| Gamma     | Delta    | 25,000  |

## Eliminación del shortcode `table`

En Hudocs 1.x, las tablas debían envolverse en el shortcode `table`. En Hudocs 2.0, el shortcode `table` fue eliminado.

Si tu documentación contiene tablas, elimina las etiquetas de apertura y cierre del shortcode `table` y conserva la sintaxis estándar de Markdown.
