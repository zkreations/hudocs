---
title: Deployment
description: Deploy your documentation to Netlify or Vercel
---

Tanto Netlify como Vercel pueden desplegar tu sitio de Hugo directamente desde un repositorio Git. Crea el archivo de configuración correspondiente en la raíz de tu proyecto. Este archivo define cómo se compila el sitio y qué versión de Hugo se utilizará.

## Seguridad y caché

Las configuraciones también incluyen varios encabezados HTTP opcionales que ayudan a mejorar la seguridad y el almacenamiento en caché de la documentación. Los cuales son:

* **Referrer-Policy** controla la información de referencia que se envía con las solicitudes.
* **Content-Security-Policy** ayuda a proteger contra ataques de secuencias de comandos.
* **X-Content-Type-Options** evita que los navegadores interpreten incorrectamente los tipos de contenido.
* **X-Frame-Options** evita que el sitio se cargue en un marco de otro sitio.
* **Strict-Transport-Security** obliga a los navegadores a usar HTTPS.
* **Permissions-Policy** desactiva funciones del navegador que el sitio no necesita.
* **Cache-Control** permite almacenar en caché los recursos estáticos durante un año.

## Ejemplo de configuración

A continuación se muestra un ejemplo de configuración para Netlify y Vercel. Si bien no es necesario que uses estos archivos, puede ser útil para configurar tu proyecto rápidamente:

{{< code >}}
{{< tab "toml" "netlify.toml" >}}
[build]
  command = "hugo"
  publish = "public"

[build.environment]
  HUGO_VERSION = "0.164.0"

[[headers]]
  for = "/*"
  [headers.values]
    Referrer-Policy = "strict-origin-when-cross-origin"
    Content-Security-Policy = "default-src 'self'; img-src 'self' data:; object-src 'none'; frame-ancestors 'self'; base-uri 'self';"
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "sameorigin"
    Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"
    Permissions-Policy = "geolocation=(self), microphone=(), camera=()"
    Cache-Control = "public, max-age=31536000"
{{< /tab >}}
{{< tab "json" "vercel.json" >}}
{
  "version": 2,
  "build": {
    "env": {
      "HUGO_VERSION": "0.164.0"
    }
  },
  "buildCommand": "hugo --gc --minify",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; img-src 'self' data:; object-src 'none'; frame-ancestors 'self'; base-uri 'self';"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "sameorigin"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains; preload"
        },
        {
          "key": "Permissions-Policy",
          "value": "geolocation=(self), microphone=(), camera=()"
        },
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000"
        }
      ]
    }
  ]
}
{{< /tab >}}
{{< /code >}}

### Versión de Hugo

Ambos ejemplos utilizan Hugo `0.164.0` ya que es la versión mínima requerida para que el tema funcione correctamente. Si deseas utilizar una versión diferente, asegúrate de actualizar el valor `HUGO_VERSION` en tus archivos de configuración.

