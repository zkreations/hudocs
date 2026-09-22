---
title: "Búsqueda Rápida en el Cliente con FlexSearch"
date: 2026-07-10T11:00:00Z
description: "Cómo Hudocs ofrece búsqueda instantánea en la documentación sin bases de datos externas ni servidores dedicados."
tags: ["Búsqueda", "Rendimiento"]
---

Hudocs implementa un sistema de búsqueda en el navegador impulsado por FlexSearch, ofreciendo resultados instantáneos de forma local.

## Generación Estática del Índice

Durante la compilación, Hugo genera índices JSON compactos segmentados por idioma y versión de documentación.

## Ejecución en el Navegador

Al presionar el atajo de búsqueda (`Ctrl + K`), el índice se carga bajo demanda y se consulta en memoria sin depender de un servidor externo.

