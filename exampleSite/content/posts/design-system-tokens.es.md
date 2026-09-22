---
title: "Diseño con Tokens en Capas CSS"
date: 2026-08-15T14:30:00Z
description: "Cómo Hudocs organiza los estilos utilizando capas en cascada CSS y tokens de diseño semánticos."
tags: ["Diseño", "CSS"]
---

Las capas de cascada modernas en CSS ofrecen una encapsulación limpia de estilos sin conflictos de especificidad.

## Capas en Cascada

Hudocs divide los estilos en cinco capas estándar:

1. `reset`: Normalización base.
2. `base`: Elementos globales y variables CSS.
3. `layout`: Estructura de cuadrícula y layout.
4. `components`: Componentes modulares de interfaz.
5. `utilities`: Clases atómicas de utilidad.

## Tokens Semánticos

Todos los roles de color se definen en `:root` y se adaptan automáticamente al modo oscuro.

