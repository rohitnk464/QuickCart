## 2024-05-18 - Nested Interactions & A11y
**Learning:** Adding interactive elements (like `button`) inside a clickable container (like `div`) causes nested click events to bubble up. Additionally, repetitive visual representations of textual data (like star icons next to a "4.5" text) create noise for screen reader users.
**Action:** Always use `onClick={(e) => e.stopPropagation()}` on interactive elements inside a clickable container to prevent unintended parent navigation. For redundant visual data, hide the parent container with `aria-hidden="true"` and give inner images `alt=""`.
