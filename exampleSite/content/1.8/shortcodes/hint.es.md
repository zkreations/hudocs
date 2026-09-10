---
title: Avisos
description: Destaca diferentes tipos de mensajes con estilos según el contexto.
---

Destaca diferentes tipos de mensajes con estilos según el contexto.

## Sintaxis

```go
{{</* hint */>}}
...content
{{</* /hint */>}}
```

### Opciones

- **Get 0**: Estilo de alerta. Valores válidos:  `info`, `success`, `danger`, `warning` (opcional)

## Ejemplo

```go
{{</* hint */>}}
Mensaje con información normal, sin estilos
{{</* /hint */>}}
```

{{< hint >}}
Mensaje con información normal, sin estilos
{{< /hint >}}


```go
{{</* hint "info" */>}}
Mensaje con información estilo consejo o dato
{{</* /hint */>}}
```

{{< hint "info" >}}
Mensaje con información estilo consejo o dato
{{< /hint >}}


```go
{{</* hint "success" */>}}
Mensaje para indicar acciones buenas o bien realizadas
{{</* /hint */>}}
```

{{< hint "success" >}}
Mensaje para indicar acciones buenas o bien realizadas
{{< /hint >}}


```go
{{</* hint "warning" */>}}
Mensaje de advertencia o prestar atención
{{</* /hint */>}}
```

{{< hint "warning" >}}
Mensaje de advertencia o prestar atención
{{< /hint >}}


```go
{{</* hint "danger" */>}}
Mensaje de error o de acciones en las cuales se debe tener cuidado
{{</* /hint */>}}
```

{{< hint "danger" >}}
Mensaje de error o de acciones en las cuales se debe tener cuidado
{{< /hint >}}