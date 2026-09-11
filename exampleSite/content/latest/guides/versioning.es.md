---
title: Versionado
weight: 4
---

Hudocs admite sitios de documentación multiversión mediante directorios independientes dentro de `content/`. Cada directorio representa una versión y mantiene su propio contenido y estructura de navegación.

## Arquitectura de versiones

En Hudocs, cada versión de la documentación corresponde a un directorio de primer nivel dentro de `content/`:

```text
content/
├── latest/         # Versión activa actual (por ejemplo, v2.0)
│   ├── _index.md
│   └── ...
├── 1.8/            # Versión archivada 1.8
│   ├── _index.md
│   └── ...
└── 1.0/            # Versión heredada 1.0
    ├── _index.md
    └── ...
```

Hugo gestiona cada directorio de versión como una sección independiente. Esto permite mantener separado el contenido y el árbol de navegación de cada versión.

## Selector de versiones

El selector de versiones de la cabecera muestra el identificador de la versión actual, por ejemplo, `latest` o `1.8`. Al seleccionarlo, se muestra la lista de versiones disponibles.

### Detección automática de versiones

Si no defines el parámetro `versions` en `hugo.toml`, Hudocs obtiene las versiones a partir de las secciones raíz de `site.Sections`:

```html
<!-- Generado a partir de las carpetas de content -->
<a href="/latest/">latest</a>
<a href="/1.8/">1.8</a>
<a href="/1.0/">1.0</a>
```

Las versiones se ordenan de forma cronológica inversa.

### Lista explícita de versiones

Para definir qué versiones aparecen en el selector y establecer su orden, configura el parámetro `versions` dentro de `[params]`:

```toml
[params]
  versions = ["latest", "1.8", "1.0"]
```

## Creación y archivado de versiones

Para publicar una nueva versión y conservar las anteriores:

{{% steps %}}
1. ### Archiva la versión anterior

   Duplica `latest/` y renómbrala con el identificador de la versión que finaliza:

   ```bash
   cp -R content/latest content/1.8
   ```

2. ### Actualiza la versión actual

   Modifica los archivos de `latest/` para documentar la nueva versión.

3. ### Verifica enlaces y redirecciones

   Comprueba que el archivo `_index.md` de cada versión apunte a la página de inicio correspondiente:

   ```markdown
   ---
   layout: redirect
   redirect: "/getting-started/installation"
   ---
   ```
{{% /steps %}}

## Página principal de versiones

Cuando un usuario accede a la raíz del sitio, Hudocs utiliza `layouts/index.html` para mostrar una página de bienvenida con la lista de versiones documentadas.
