![cover](https://raw.githubusercontent.com/zkreations/hudocs/main/images/cover.png)

<p align="center">
  <a href="https://github.com/zkreations/hudocs/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-teal" alt="License"></a>
  <a href="https://github.com/zkreations/hudocs/releases"><img src="https://img.shields.io/github/v/release/zkreations/hudocs" alt="Last Release"></a>
</p>

<p align="center">
  <a href="https://hudocs.com/"><strong>View a live demo →</strong></a>
</p>

---

I made this project to easily document my own projects, but I thought it would be great to share it, so you will save the time it took me to learn everything that finally resulted in this documentation. I hope you do a lot of work!

## Features

- Optimized compatible with [Core Web Vitals](https://pagespeed.web.dev/report?url=https://hudocs.com)
- A+ Security Level on [Mozilla Observatory](https://observatory.mozilla.org/analyze/hudocs.com)
- Support for multiple languages
- Advanced automated searcher
- Light and dark theme
- Shortcodes for alerts, notes, tables, etc.
- Advanced code blocks
- High customization

## Requirements

- Hugo 0.164.0 or higher (extended version)
- Git - [Install Git](https://git-scm.com/downloads)
- Desire to document


## Install

Go to the root of your Hugo project and run the following command:

```bash
git submodule add https://github.com/zkreations/hudocs themes/hudocs
```

## Recommended structure

I made this documentation thinking that you could generate multiple versions of the same project, that's why the recommended structure should first contain a version number, for example:

```bash
content
└── 1.0
    └── index.md
```

If you want to start quickly, use the example I have left in the **exampleSite** folder, which is the same one you are reading right now. Run the following command:

```bash
cp -R themes/hudocs/exampleSite/content .
```

## Configure

The theme contains some useful options that can help you further customize your documents. Copy the **exampleSite/hugo.toml** file and replace the information with your data. Finally start the local server by running:

```bash
hugo serve
```

## Contributions

Contributions are welcome, I will take time to review any request as long as you keep the following in mind when making them:

- Do not add more options that can increase complexity.
- Avoid JavaScript as much as possible if you can do it with CSS.
- Do not interfere with users' custom options.

## Final note

If you like this project, consider rating me with a [star on github](https://github.com/zkreations/hudocs/stargazers), it costs nothing and means a lot to me. You can also [buy me a coffee](https://ko-fi.com/zkreations) so I can continue creating things like this.

Start documenting!


## License

**HuDocs** is licensed under the MIT License