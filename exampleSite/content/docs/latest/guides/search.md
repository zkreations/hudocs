---
title: Search Engine
weight: 3
---

Hudocs includes a client-side search engine based on [FlexSearch](https://github.com/nextapps-de/flexsearch). It does not require external services, accounts, or API keys, and allows users to search the documentation content from the browser.

## How It Works

1. **Index generation:** during `hugo build`, Hugo generates a JSON file containing the document index for each configured language. The indexes are generated at `/json/index.json` and `/[language]/json/index.json`.

2. **On-demand loading:** the index is downloaded when the user opens the search modal, so it is not loaded during the site's initial load.

3. **In-memory search:** FlexSearch loads the index into the browser's memory and uses it to search titles, summaries, parent sections, and URLs.

## Using the Search

Readers can interact with the search using the following controls:

* **Search button in the header:** opens the search modal.
* **Keyboard navigation:**
  * <kbd>↑</kbd> or <kbd>↓</kbd> changes the selected result.
  * <kbd>Enter</kbd> opens the selected page.
  * <kbd>Esc</kbd> closes the search modal.

## Search Index Structure

The index is generated from the `assets/json/index.json` template with the following structure:

```json
{
  "documents": [
    {
      "id": 0,
      "title": "Installation",
      "summary": "How to install and configure Hudocs.",
      "parent": "Getting Started",
      "url": "/en/docs/latest/getting-started/installation/"
    }
  ]
}
```

### Result Metadata

Each result uses the following data from the index:

* **Parent section:** section to which the page belongs.
* **Page title:** title of the page used for search and results.
* **Summary:** content excerpt used to provide context and display matches.

## Multilingual Support

Hudocs generates a separate index for each language configured in Hugo from `.Site.Pages`. Searches performed from a localized version use the index corresponding to that language. For example:

```text
/json/index.json
/es/json/index.json
```

Therefore, a search performed in Spanish returns documents included in the Spanish index.
