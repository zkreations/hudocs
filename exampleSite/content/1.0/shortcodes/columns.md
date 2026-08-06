---
title: Columnas
description: Crea fácilmente columna de contenido, útil para agrupan en un mismo segmento
  más información.
---

Crea fácilmente columna de contenido, útil para agrupan en un mismo segmento más información.

## Sintaxis

```go
{{</* columns */>}}
...content
<---->
...content
<---->
...content
{{</* /columns */>}}
```

### Opciones

- **Get 0**: Clases adicionales CSS. (opcional)

## Ejemplo

```go
{{</* columns */>}}
### Medicina
Como médicos jóvenes que trabajan...
<---->
### Países
Todo esto desde una isla de apenas...
<---->
### Historia
El artista Christo, conocido por envolver edificios...
{{</* /columns */>}}
```

{{< columns >}}
### Medicina
Como médicos jóvenes que trabajan en salas psiquiátricas para pacientes hospitalizados agudos, las enfermedades mentales graves son nuestra realidad diaria. 
<---->
### Países
Todo esto desde una isla de apenas tres millones y medio de almas, más los otros cinco millones de puertorriqueños que viven en EE.UU.
<---->
### Historia
El artista Christo, conocido por envolver edificios, incluido el Reichstag de Berlín, murió a los 84 años. 
{{< /columns >}}