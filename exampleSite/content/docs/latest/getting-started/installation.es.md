---
title: Instalación
weight: 1
---

**Hudocs** es un tema de documentación para [Hugo](https://gohugo.io/) enfocado en la documentación multiversión, lo que permite documentar varias versiones de un proyecto dentro de un mismo sitio.

Ultra ligero — configuración inicial cero.

## Requisitos previos

Antes de instalar Hudocs, asegúrate de tener:

* **Hugo Extended** `0.164.0` o superior.
  * Hudocs utiliza Sass para compilar sus hojas de estilos.
  * Verifica la versión instalada con `hugo version`
  * La salida debe incluir `extended`.
* **Git** instalado y disponible en la terminal para clonar el repositorio o gestionar submódulos.

## Instalación

### Submódulo Git

Un submódulo permite mantener el código de Hudocs separado del repositorio del sitio y actualizarlo cuando sea necesario.

```bash
git submodule add https://github.com/zkreations/hudocs themes/hudocs
```

Para actualizar el submódulo:

```bash
git submodule update --remote --merge
```

### Hugo Modules

Hugo Modules permite gestionar Hudocs como una dependencia de Go.

{{% steps %}}
1. ### Inicializa el módulo

   Inicializa el módulo de tu sitio, reemplazando la ruta por la de tu repositorio:

   ```bash
   hugo mod init github.com/tu-usuario/mis-docs
   ```

2. ### Añade Hudocs

   Añade Hudocs a `hugo.toml`:

   ```toml
   theme = "github.com/zkreations/hudocs"
   ```

3. ### Descarga el módulo

   Descarga Hudocs y sus dependencias:

   ```bash
   hugo mod get github.com/zkreations/hudocs
   ```
{{% /steps %}}

### Clon directo

Puedes clonar Hudocs directamente en `themes/` si necesitas modificar su código fuente:

```bash
git clone https://github.com/zkreations/hudocs themes/hudocs
```

## Sitio de ejemplo

El directorio `exampleSite` contiene una configuración y contenido que puedes utilizar como punto de partida.

{{% steps %}}
1. ### Copia los archivos de ejemplo

   Copia la configuración y el contenido de ejemplo a la raíz de tu proyecto:

   ```bash
   cp themes/hudocs/exampleSite/hugo.toml .
   cp -R themes/hudocs/exampleSite/content .
   ```

2. ### Inicia el servidor

   Inicia el servidor de desarrollo:

   ```bash
   hugo server
   ```

3. ### Abre el sitio

   Abre `http://localhost:1313/` en el navegador.
{{% /steps %}}

## Siguientes pasos

Consulta la guía de [Configuración](/es/docs/latest/getting-started/configuration/) para configurar las opciones del tema, la marca y el soporte multilingüe.
