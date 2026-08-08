---
title: Deployment
description: Deploy your documentation to Netlify or Vercel
---

Both Netlify and Vercel can deploy your Hugo site directly from a Git repository. Create the corresponding configuration file at the root of your project. This file defines how the site is built and which Hugo version will be used.

## Security and caching

The configurations also include several optional HTTP headers that help improve the security and caching of your documentation site:

* **Referrer-Policy** controls the referrer information sent with requests.
* **Content-Security-Policy** helps protect against cross-site scripting attacks.
* **X-Content-Type-Options** prevents browsers from incorrectly interpreting content types.
* **X-Frame-Options** prevents the site from being loaded inside a frame on another site.
* **Strict-Transport-Security** forces browsers to use HTTPS.
* **Permissions-Policy** disables browser features that the site does not need.
* **Cache-Control** allows static resources to be cached for one year.

## Configuration example

The following is an example configuration for Netlify and Vercel. While these files are not required, they can be useful for quickly configuring your project:

{{< code >}}
{{< tab "toml" "netlify.toml" >}}
[build]
  command = "hugo --minify"
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

### Hugo version

Both examples use Hugo `0.164.0` because it is the minimum version required for the theme to work correctly. If you want to use a different version, make sure to update the `HUGO_VERSION` value in your configuration files.


