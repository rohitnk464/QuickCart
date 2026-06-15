
## 2026-06-15 - Prevent Event Bubbling in Clickable Cards
**Learning:** When interactive elements (buttons) are nested inside a clickable container (like a ProductCard div with an onClick handler), it is critical to use e.stopPropagation() on the nested elements. Otherwise, interacting with the button unintentionally triggers the container's navigation event, causing a frustrating UX.
**Action:** Always check for clickable parent containers when adding buttons to cards or list items, and ensure e.stopPropagation() is applied to prevent event bubbling.
