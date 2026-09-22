---
title: "Fast Client-Side Search with FlexSearch"
date: 2026-07-10T11:00:00Z
description: "How Hudocs delivers instant documentation search without external databases or server runtimes."
tags: ["Search", "Performance"]
---

Hudocs implements client-side search powered by FlexSearch, providing instantaneous query results directly in the browser.

## Static Index Generation

At build time, Hugo generates lightweight JSON index files segmented by language and documentation version.

## Browser-Side Execution

When a user triggers search (`Ctrl + K`), the corresponding index is fetched on demand and queried locally with zero backend dependencies.

