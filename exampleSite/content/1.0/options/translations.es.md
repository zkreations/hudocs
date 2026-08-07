---
title: Traducciones
description: Diferentes idiomas para tu documentación
---

De momento, la documentación soporta dos idiomas: español e inglés. Para cambiar el idioma de tu documentación. Las traducciones ayudan a tus lectores a entender mejor tu documentación mas allá de su idioma nativo.

## Usar

Para habilitar las traducciones, debes agregar en tu archivo de configuraciones los idiomas usados, ademas tienes que especificar el idioma por defecto y el idioma de la documentación.

```toml
languageCode = 'es'
defaultContentLanguage = 'es'

[languages]
  [languages.es]
    languageName = "Español"
    weight = 1

  [languages.en]
    languageName = "English"
    weight = 2
```

## Traducir

Crea un archivo con el mismo nombre de la página que deseas traducir, pero con la extensión del idioma. Por ejemplo, si deseas traducir la página `index.md` al inglés, debes crear un archivo llamado `index.en.md`.

```text
content
└── 1.0
    └── index.md
    └── index.en.md
```