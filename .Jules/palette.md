## 2026-04-27 - Prevent Navigation on Inner Elements
**Learning:** When adding interactive elements (like a wishlist button or a 'Buy now' button) inside clickable container elements (like the ProductCard div), using `onClick={(e) => e.stopPropagation()}` is crucial to prevent unintended triggering of the parent container's click events.
**Action:** Always use `e.stopPropagation()` for nested interactive elements within clickable containers.
