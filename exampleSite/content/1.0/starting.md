---
title: Empezando
icon: coffee
weight: 1
---

¡Hola! Este es un ejemplo de tu nueva documentación. Realicé este proyecto para documentar fácilmente mis propios proyectos, pero pense que estaría genial compartirlo, asi te ahorrarás el tiempo que me tomó aprender todo lo que finalmente, resultó en esta documentación. ¡Ojala realices muchos trabajos!

## Características

- Optimizado compatible con [Core Web Vitals](https://pagespeed.web.dev/report?url=https://hudocs.com)
- Nivel de Seguridad A+ en [Mozilla Observatory](https://observatory.mozilla.org/analyze/hudocs.com)
- Soporte para múltiples idiomas
- Sin dependencias
- Buscador avanzado automatizado
- Tema claro y oscuro
- Shortcodes para alertas, notas, tablas, etc.
- Bloques de código avanzados
- Alta personalización


## Requisitos

- Hugo 0.138.0 o superior (versión extendida)
- Git - [Instalar Git](https://git-scm.com/downloads)
- Ganas de documentar


## Instalar

Ve a la raíz de tu proyecto de Hugo y ejecuta el siguiente comando:

```bash
git submodule add https://github.com/zkreations/docs themes/docs
```

## Estructura recomendada

Realicé esta documentación pensando en que podrías generar multiples versiones de un mismo proyecto, es por eso que la estructura recomendada debería contener primero un número de versión, por ejemplo:

```bash
content
└── 1.0
    └── index.md
```

Si quieres empezar rápidamente, utiliza el ejemplo que he dejado en la carpeta **demo**, la cual es la misma que estas leyendo justo ahora. Ejecuta el siguiente comando:

```bash
cp -R themes/docs/demo/content .
```

## Configurar

El tema contiene algunas opciones útiles que te pueden ayudar a personalizar aún mas tus documentos. Copia el archivo **demo/config.toml** y reemplazar la información con tus datos. Por ultimo inicia el servidor local ejecutando:

```bash
hugo serve
```


## Contribuciones

Las contribuciones son bienvenidas, sacaré tiempo para revisar cualquier solicitud siempre y cuando tengas en cuenta lo siguiente al realizarlas:

- No agregar más opciones que puedan incrementar la complejidad.
- Evitar JavasScript en lo posible si lo puedes realizar con CSS.
- No intervenir con las opciones personalizadas de los usuarios.

## Nota final

Si te gusta este proyecto, considera calificarme con una [estrella en github](https://github.com/zkreations/docs/stargazers), no cuesta nada y para mi significa mucho. También puedes [invitarme un café](https://ko-fi.com/zkreations) para que pueda seguir creando cosas como esta.

¡Empieza a documentar!

