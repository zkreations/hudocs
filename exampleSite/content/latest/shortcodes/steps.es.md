---
title: Steps
weight: 6
---

El shortcode `steps` permite mostrar una lista ordenada de Markdown como una secuencia visual de pasos numerados.

## Uso básico

Envuelve una lista ordenada de Markdown dentro de `steps`:

```markdown
{{</* steps */>}}
1. **Descarga el paquete** desde la página de versiones.
2. **Extrae los archivos** en la raíz de tu proyecto.
3. **Verifica la instalación** revisando la salida en consola.
{{</* /steps */>}}
```

### Resultado

{{< steps >}}
1. **Descarga el paquete** desde la página de versiones.
2. **Extrae los archivos** en la raíz de tu proyecto.
3. **Verifica la instalación** revisando la salida en consola.
{{< /steps >}}


## Parámetros

| Parámetro | Posición | Tipo   | Requerido | Descripción                             |
| :-------- | :------: | :----- | :-------: | :-------------------------------------- |
| `class`   |    `0`   | string |     No    | Clase CSS adicional para el contenedor. |


## Listas complejas

Si deseas incluir contenido más complejo en cada paso, como encabezados, párrafos o bloques de código, puedes usar la sintaxis de Markdown dentro de cada elemento de la lista:

````markdown
{{</* steps */>}}
1. ### Crea tu sitio

   Ejecuta `hugo new site mi-sitio` para iniciar un nuevo proyecto de Hugo.

2. ### Agrega el tema

   Clona o añade Hudocs como submódulo en tu carpeta `themes/`:

   ```bash
   git clone https://github.com/zkreations/hudocs themes/hudocs
   ```

3. ### Configura e inicia

   Ejecuta el servidor de desarrollo.
{{</* /steps */>}}
````

### Resultado

{{< steps >}}
1. ### Crea tu sitio

   Ejecuta `hugo new site mi-sitio` para iniciar un nuevo proyecto de Hugo.

2. ### Agrega el tema

   Clona o añade Hudocs como submódulo en tu carpeta `themes/`:

   ```bash
   git clone https://github.com/zkreations/hudocs themes/hudocs
   ```

3. ### Configura e inicia

   Ejecuta el servidor de desarrollo.
{{< /steps >}}

## Contenido Markdown

El contenido de `steps` se procesa mediante `.Page.RenderString`, por lo que puede contener cualquier elemento Markdown compatible con Hugo, incluidos encabezados, listas, enlaces y bloques de código.
