---
title: Motor de Búsqueda
weight: 3
---

Hudocs incluye un motor de búsqueda del lado del cliente basado en [FlexSearch](https://github.com/nextapps-de/flexsearch). No requiere servicios externos, cuentas ni claves de API, y permite buscar en el contenido de la documentación desde el navegador.

## Funcionamiento

1. **Generación del índice:** durante `hugo build`, Hugo genera un archivo JSON con el índice de documentos para cada idioma configurado. Los índices se generan en `/json/index.json` y `/[idioma]/json/index.json`.

2. **Carga bajo demanda:** el índice se descarga cuando el usuario abre el modal de búsqueda, por lo que no se carga durante la carga inicial del sitio.

3. **Búsqueda en memoria:** FlexSearch carga el índice en la memoria del navegador y lo utiliza para consultar títulos, resúmenes, secciones padre y URLs.

## Uso del buscador

Los lectores pueden interactuar con el buscador mediante los siguientes controles:

* **Botón de búsqueda en la cabecera:** abre el modal de búsqueda.
* **Navegación por teclado:**
  * <kbd>↑</kbd> o <kbd>↓</kbd> cambia la selección entre los resultados.
  * <kbd>Enter</kbd> abre el artículo seleccionado.
  * <kbd>Esc</kbd> cierra el modal de búsqueda.

## Estructura del índice de búsqueda

El índice se genera a partir de la plantilla `assets/json/index.json` con la siguiente estructura:

```json
{
  "documents": [
    {
      "id": 0,
      "title": "Instalación",
      "summary": "Cómo instalar y configurar Hudocs.",
      "parent": "Primeros Pasos",
      "url": "/es/docs/latest/getting-started/installation/"
    }
  ]
}
```

### Metadatos de los resultados

Cada resultado utiliza los siguientes datos del índice:

* **Sección padre:** categoría a la que pertenece el artículo.
* **Título del artículo:** título de la página utilizada para la búsqueda y los resultados.
* **Resumen:** fragmento de contenido utilizado para mostrar contexto y coincidencias.

## Soporte multilingüe

Hudocs genera un índice independiente para cada idioma configurado en Hugo a partir de `.Site.Pages`. Las búsquedas realizadas desde una versión localizada utilizan el índice correspondiente a ese idioma. Por ejemplo:

```text
/json/index.json
/es/json/index.json
```

Por lo tanto, una búsqueda realizada en español devuelve documentos incluidos en el índice español.
