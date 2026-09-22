---
title: Personalización
weight: 6
---

Hudocs organiza sus estilos utilizando capas en cascada CSS (`@layer`) y tokens de diseño semánticos definidos mediante propiedades personalizadas de CSS en `_tokens.scss`. Puedes personalizar la apariencia visual de tu documentación sin modificar los archivos originales del tema.

## Sobrescribir  estilos  

Para personalizar los estilos, crea un archivo `assets/scss/_custom.scss` en tu proyecto de Hugo:

```text
mi-proyecto/
├── assets/
│   └── scss/
│       └── _custom.scss
└── hugo.toml
```

Debido a que Hudocs importa `_custom.scss` fuera de las capas de cascada, las reglas sin capa en tu archivo personalizado tienen precedencia natural sobre los estilos del tema sin requerir alta especificidad o `!important`.

## Variables SCSS

Hudocs define variables de color base utilizando la bandera `!default` de Sass. Puedes sobrescribir estas variables antes de que se compilen las reglas del tema:

| Variable     | Por defecto | Descripción                                  |
| :----------- | :---------- | :------------------------------------------- |
| `$primary`   | `#0f766e`   | Color primario de marca predeterminado.      |
| `$secondary` | `#4338ca`   | Color secundario de acento.                  |

```scss
// assets/scss/_custom.scss
$primary: #2563eb;
$secondary: #7c3aed;
```

## Tokens de Diseño CSS

Todas las propiedades visuales en Hudocs están vinculadas a propiedades personalizadas de CSS declaradas en `:root`. Puedes personalizarlas en tu `_custom.scss` apuntando a `:root` (para modo claro o valores universales) o a `:root.dark` (para modo oscuro).

### Dimensiones y Diseño

Estas variables controlan la cuadrícula de la página, los espaciados y las dimensiones de componentes:

| Token                  | Por defecto                             | Descripción                                 |
| :--------------------- | :-------------------------------------- | :------------------------------------------ |
| `--container-width`    | `1500px`                                | Ancho máximo del contenedor principal.      |
| `--container-padding`  | `clamp(1rem, 2.5vw, 1.5rem)`            | Relleno horizontal del contenedor.          |
| `--space-block`        | `clamp(1.5rem, 2vw, 1.75rem)`           | Separación vertical entre bloques.          |
| `--header-height`      | `70px`                                  | Altura de la barra de navegación superior.  |
| `--aside-width`        | `246px`                                 | Ancho de la barra lateral de navegación.    |
| `--timing`             | `cubic-bezier(0.7, 0.006, 0.2, 1)`      | Curva de aceleración para transiciones.     |

### Tipografía

| Token               | Por defecto                                                                            | Descripción                               |
| :------------------ | :------------------------- | :---------------------------------------- |
| `--font-primary`    | `'Inter', sans-serif`      | Familia tipográfica para interfaz y texto.|
| `--font-monospace`  | `SFMono-Regular, Menlo...` | Pila tipográfica monoespaciada de código. |

### Colores de Marca

Los tokens de marca definen los roles de acento primario y secundario junto con sus matices para contenedores:

| Token                      | Modo Claro      | Modo Oscuro    | Descripción                                           |
| :------------------------- | :-------------- | :------------- | :---------------------------------------------------- |
| `--primary`                | `#0f766e`       | `#2dd4bf`      | Color de marca primario.                              |
| `--on-primary`             | `#ffffff`       | `#09090b`      | Color del texto sobre fondo primario.                 |
| `--primary-container`      | `12% primary`   | `12% primary`  | Fondo sutil para elementos activos e insignias.       |
| `--on-primary-container`   | `var(--primary)`| `var(--primary)`| Color del texto sobre fondos de contenedor primario. |
| `--secondary`              | `#4338ca`       | `#818cf8`      | Color secundario de acento.                           |
| `--on-secondary`           | `#ffffff`       | `#09090b`      | Color del texto sobre fondo secundario.               |
| `--secondary-container`    | `12% secondary` | `12% secondary`| Fondo sutil para contenedores secundarios.            |
| `--on-secondary-container` | `var(--secondary)` | `var(--secondary)` | Texto sobre contenedor secundario.             |

### Superficies y Fondos

Las superficies definen los fondos de la página, contenedores de tarjetas, menús y elementos elevados:

| Token                      | Modo Claro      | Modo Oscuro    | Descripción                                           |
| :------------------------- | :-------------- | :------------- | :---------------------------------------------------- |
| `--surface`                | `#ffffff`       | `#18181b`      | Fondo principal de la página.                         |
| `--surface-container`      | `#f4f4f5`       | `#222225`      | Fondo de tarjetas, campos de entrada y barra lateral. |
| `--surface-container-hover`| `#e4e4e7`       | `#2e2e33`      | Estado hover para contenedores interactivos.          |
| `--surface-inverse`        | `#18181b`       | `#f4f4f5`      | Fondo de alto contraste para tooltips.                |
| `--on-surface-inverse`     | `#ffffff`       | `#18181b`      | Color de texto sobre superficies inversas.            |
| `--surface-mark`           | `30% #fbbf24`   | `25% #fbbf24`  | Fondo de resaltado para coincidencias de búsqueda.    |

### Textos y Bordes

| Token                  | Modo Claro      | Modo Oscuro    | Descripción                                           |
| :--------------------- | :-------------- | :------------- | :---------------------------------------------------- |
| `--on-surface`         | `#27272a`       | `#ffffff`      | Color principal del texto del cuerpo.                 |
| `--on-surface-variant` | `#52525b`       | `#d4d4d8`      | Etiquetas secundarias, subtítulos e iconos.           |
| `--on-surface-muted`   | `#71717a`       | `#a1a1aa`      | Texto atenuado o deshabilitado.                       |
| `--outline`            | `#d4d4d8`       | `#27272a`      | Divisores, bordes de tablas y contornos de inputs.    |
| `--scrim`              | `rgb(0 0 0 / 50%)` | `rgb(0 0 0 / 50%)` | Fondo oscuro superpuesto para ventanas modales.    |

### Notificaciones y Estados

Estos tokens dan estilo a alertas (shortcode `hint`), estados y validaciones:

| Token       | Modo Claro      | Modo Oscuro    | Uso                            |
| :---------- | :-------------- | :------------- | :----------------------------- |
| `--info`    | `#0369a1`       | `#38bdf8`      | Notas informativas.            |
| `--success` | `#047857`       | `#34d399`      | Estados exitosos e insignias.  |
| `--warning` | `#b45309`       | `#fbbf24`      | Alertas y avisos de precaución.|
| `--error`   | `#be123c`       | `#fb7185`      | Errores críticos y peligros.   |

### Insignias de Tipos de Datos

Utilizados por el shortcode `type` para clasificar tipos de datos de programación:

| Token               | Modo Claro          | Modo Oscuro         | Uso                            |
| :------------------ | :------------------ | :------------------ | :----------------------------- |
| `--type-textual`    | `var(--info)`       | `var(--info)`       | Cadenas, caracteres y bytes.   |
| `--type-numeric`    | `var(--warning)`    | `var(--warning)`    | Números, enteros y decimales.  |
| `--type-logical`    | `var(--primary)`    | `var(--primary)`    | Valores booleanos.             |
| `--type-structural` | `var(--secondary)`  | `var(--secondary)`  | Objetos, arreglos y mapas.     |
| `--type-custom`     | `#7e22ce`           | `#c084fc`           | Tipos y clases personalizados. |

### Bloques de Código y Sintaxis

Controlan el fondo, tipografía y selección dentro de bloques de código:

| Token                | Modo Claro            | Modo Oscuro           | Descripción                            |
| :------------------- | :-------------------- | :-------------------- | :------------------------------------- |
| `--syntax-bg`        | `#18181b`             | `#09090b`             | Fondo principal del bloque de código.  |
| `--syntax-bg-deep`   | `#09090b`             | `#000000`             | Fondo más profundo para cabeceras.     |
| `--syntax-fg`        | `var(--syntax-uno-2)` | `var(--syntax-uno-2)` | Color de texto por defecto.            |
| `--syntax-comment`   | `var(--syntax-uno-5)` | `var(--syntax-uno-5)` | Líneas de comentarios.                 |
| `--syntax-keyword`   | `var(--syntax-duo-1)` | `var(--syntax-duo-1)` | Palabras clave del lenguaje.           |
| `--syntax-string`    | `var(--syntax-duo-1)` | `var(--syntax-duo-1)` | Literales de texto entre comillas.     |
| `--syntax-selection` | `color-mix(...)`      | `color-mix(...)`      | Selección de texto dentro del bloque.  |

## Ejemplo de Personalización

A continuación se muestra un ejemplo completo de `assets/scss/_custom.scss` que establece una tipografía personalizada, adapta la paleta principal y ajusta las superficies de fondo:

```scss
// 1. Sobrescribir variables SCSS
$primary: #0284c7;

// 2. Sobrescribir tokens CSS
:root {
  --font-primary: 'Poppins', sans-serif;
  --header-height: 64px;

  // Superficies personalizadas en modo claro
  --surface: #ffffff;
  --surface-container: #f8fafc;
}

:root.dark {
  // Superficies personalizadas en modo oscuro
  --surface: #0f172a;
  --surface-container: #1e293b;
  --primary: #38bdf8;
}
```

