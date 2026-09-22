---
title: "Designing with CSS Layer Tokens"
date: 2026-08-15T14:30:00Z
description: "How Hudocs organizes styles using CSS cascade layers and semantic design tokens."
tags: ["Design", "CSS"]
---

Modern CSS cascade layers provide clean style encapsulation without high-specificity wars.

## Cascade Layers

Hudocs splits styles into five standard layers:

1. `reset`: Baseline normalization.
2. `base`: Global elements and CSS variables.
3. `layout`: Grid and layout structure.
4. `components`: Modular UI components.
5. `utilities`: Atomic helper classes.

## Semantic Tokens

All color roles are defined in `:root` and adapted automatically for dark mode.

