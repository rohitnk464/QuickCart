## 2026-05-10 - [Accessibility fixes in ProductCard]
**Learning:** Adding interactive elements (like a wishlist button or 'Buy now' button) inside clickable container elements (like the ProductCard div) causes unintended triggering of the parent container's click events, which can be disorienting.
**Action:** Always use onClick={(e) => e.stopPropagation()} on interactive child elements within a clickable container.
