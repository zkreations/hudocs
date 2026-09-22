---
title: Motor de Búsqueda
weight: 4
---

Hudocs incluye un motor de búsqueda del lado del cliente basado en [FlexSearch](https://github.com/nextapps-de/flexsearch). No requiere servicios externos, cuentas ni claves de API, y permite buscar en el contenido de la documentación desde el navegador.

## Funcionamiento

1. **Generación del índice:** durante `hugo build`, Hugo genera un archivo JSON minificado con el índice de búsqueda para cada idioma y versión de documentación configurada bajo `json/<idioma>.<sección>.<versión>.index.json` (o `json/<idioma>.<sección>.index.json` en modo monoversión).

2. **Carga bajo demanda:** el índice se descarga cuando el usuario abre el modal de búsqueda, por lo que no se carga durante la carga inicial del sitio.

3. **Búsqueda en memoria:** FlexSearch carga el índice en la memoria del navegador y lo utiliza para consultar títulos, resúmenes, secciones padre y URLs.

## Uso del buscador

Los lectores pueden interactuar con el buscador mediante los siguientes controles:

* **Botón o atajo de búsqueda:** abre el modal de búsqueda haciendo clic en el botón de la cabecera, pulsando <kbd>Ctrl K</kbd> (<kbd>Cmd K</kbd> en macOS), o pulsando <kbd>/</kbd> cuando no se esté escribiendo en un campo de formulario.
* **Navegación por teclado:**
  * <kbd>↑</kbd> o <kbd>↓</kbd> cambia la selección entre los resultados.
  * <kbd>Enter</kbd> abre el artículo seleccionado.
  * <kbd>Esc</kbd> cierra el modal de búsqueda.

## Estructura del índice de búsqueda

El índice se genera a partir de la plantilla `assets/json/index.json` como un array compacto de tuplas:

```json
[
  [
    0,
    "/es/docs/latest/getting-started/installation/",
    "Instalación",
    "Primeros Pasos",
    "Cómo instalar y configurar Hudocs.",
    "Contenido del artículo..."
  ]
]
```

### Metadatos de los resultados

Cada elemento de la tupla representa:

* **Índice 0 (`id`):** identificador numérico del documento.
* **Índice 1 (`url`):** URL relativa del artículo.
* **Índice 2 (`title`):** título del documento.
* **Índice 3 (`parent`):** título de la sección padre.
* **Índice 4 (`summary`):** extracto del contenido utilizado para mostrar coincidencias.
* **Índice 5 (`content`):** texto limpio del cuerpo utilizado para la indexación de texto completo.

## Soporte multilingüe

Hudocs genera un índice independiente para cada idioma y versión configurada. Las búsquedas realizadas desde una versión localizada utilizan el índice correspondiente a ese idioma y versión. Por ejemplo:

```text
/json/en.docs.latest.index.<hash>.json
/json/es.docs.latest.index.<hash>.json
```

Por lo tanto, una búsqueda realizada en español devuelve documentos incluidos en el índice español.
