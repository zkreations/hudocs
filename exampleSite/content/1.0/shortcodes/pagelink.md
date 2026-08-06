---
title: Enlace de página
description: Botones con enlaces. Si el botón contiene un enlace externo abrirá en una
  nueva pestaña.
---

Enlaces a paginas. Si el enlace es externo se abrirá en una nueva ventana, también obtiene el atributo rel con los valores noreferrer noopener y nofollow.

## Sintaxis

```go
{{</* pagelink title="Página de búsqueda" name="Google" href="https://google.com" */>}}
```

### Opciones

- **href**: Ruta absoluta o explicita del enlace. Si la ruta pertenece a un enlace externo se agregara el atributo `rel` y `target` automáticamente. (obligatorio)
- **title**: Titulo del enlace. Valor por defecto `undefined` (obligatorio)
- **icon**: El nombre de un icono de zkreations. (opcional)
- **name**: Nombre de la pagina de donde proviene el enlace. (opcional)

## Ejemplo

```go
{{</* pagelink title="Inicio de documentación" href="/1.0/starting" */>}}
{{</* pagelink title="Página de búsqueda" name="Google" href="https://google.com" */>}}
```

{{< pagelink title="Inicio de documentación" href="/1.0/starting" >}}

{{< pagelink title="Página de búsqueda" name="Google" href="https://google.com" >}}