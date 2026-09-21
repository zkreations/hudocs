---
title: Search Engine
weight: 4
---

Hudocs includes a client-side search engine based on [FlexSearch](https://github.com/nextapps-de/flexsearch). It does not require external services, accounts, or API keys, and allows users to search the documentation content from the browser.

## How It Works

1. **Index generation:** during `hugo build`, Hugo generates a minified JSON file containing the search index for each configured language and documentation version under `json/<lang>.<section>.<version>.index.json`.

2. **On-demand loading:** the index is downloaded when the user opens the search modal, so it is not loaded during the site's initial load.

3. **In-memory search:** FlexSearch loads the index into the browser's memory and uses it to search titles, summaries, parent sections, and URLs.

## Using the Search

Readers can interact with the search using the following controls:

* **Search button or shortcut:** opens the search modal by clicking the button in the header or pressing <kbd>Ctrl K</kbd> (<kbd>Cmd K</kbd> on macOS).
* **Keyboard navigation:**
  * <kbd>↑</kbd> or <kbd>↓</kbd> changes the selected result.
  * <kbd>Enter</kbd> opens the selected page.
  * <kbd>Esc</kbd> closes the search modal.

## Search Index Structure

The index is generated from the `assets/json/index.json` template as a compact array of tuples:

```json
[
  [
    0,
    "/docs/latest/getting-started/installation/",
    "Installation",
    "Getting Started",
    "How to install and configure Hudocs.",
    "Page content..."
  ]
]
```

### Result Metadata

Each entry in the tuple represents:

* **Index 0 (`id`):** document numeric identifier.
* **Index 1 (`url`):** relative URL of the page.
* **Index 2 (`title`):** document title.
* **Index 3 (`parent`):** parent section title.
* **Index 4 (`summary`):** content excerpt used to display matches.
* **Index 5 (`content`):** cleaned body text used for full-text indexing.

## Multilingual Support

Hudocs generates a separate index for each configured language and version. Searches performed from a localized version use the index corresponding to that language and version. For example:

```text
/json/en.docs.latest.index.<hash>.json
/json/es.docs.latest.index.<hash>.json
```

Therefore, a search performed in Spanish returns documents included in the Spanish index.
