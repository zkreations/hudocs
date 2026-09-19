---
title: Control de Versiones
weight: 5
---

Hudocs permite gestionar sitios de documentación multilingües con versiones separadas dentro de `content/docs/`. Cada directorio representa una versión aislada y mantiene su propio contenido, estructura de navegación e índice de búsqueda.

## Arquitectura de Versiones

En Hudocs, cada versión de la documentación corresponde a un subdirectorio dentro de `content/docs/`:

```text
content/
└── docs/
    ├── _index.md
    ├── latest/
    │   ├── _index.md
    │   └── ...
    ├── 1.8/
    │   ├── _index.md
    │   └── ...
    └── 1.0/
        ├── _index.md
        └── ...
```

Hugo gestiona cada directorio de versión como una subsección independiente bajo `docs`. Esto mantiene el contenido, el árbol de navegación del sidebar y el índice de búsqueda separados por versión.

## Selector de Versiones

El selector de versiones en el encabezado muestra el identificador de la versión actual, como `latest` o `1.8`. Al seleccionarlo se muestran las versiones disponibles.

### Detección Automática de Versiones

Si no defines el parámetro `versions`, Hudocs obtiene automáticamente las versiones a partir de las subsecciones dentro de `content/docs/`:

```html
<a href="/docs/latest/">latest</a>
<a href="/docs/1.8/">1.8</a>
<a href="/docs/1.0/">1.0</a>
```

### Lista Explícita de Versiones

Para definir qué versiones aparecen en el selector y establecer su orden, configura `docs_versions`:

```toml
docs_versions = ["latest", "1.8", "1.0"]
```

## Crear y Archivar Versiones

Para publicar una nueva versión manteniendo disponibles las versiones anteriores:

{{% steps %}}
1. ### Archivar la versión anterior

   Duplica `latest/` y renómbralo con el identificador de la versión que se va a publicar:

   ```bash
   cp -R content/docs/latest content/docs/1.8
   ```

2. ### Actualizar la versión actual

   Modifica los archivos en `content/docs/latest/` para documentar la nueva versión.

3. ### Verificar enlaces y redirecciones

   Comprueba que el archivo `_index.md` de cada versión apunte a la página de inicio correspondiente:

   ```markdown
   ---
   layout: redirect
   redirect: "/getting-started/installation"
   ---
   ```
{{% /steps %}}

## Página de Inicio de Documentación

Cuando un usuario accede a `/docs/`, Hudocs utiliza `layouts/docs/list.html` para mostrar un directorio de versiones con los enlaces correspondientes.
