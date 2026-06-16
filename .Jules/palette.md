
## 2024-05-18 - Nested Interactive Elements in Clickable Cards
**Learning:** When interactive elements (like a "Buy now" or "Add to wishlist" button) are nested inside a clickable container (like a ProductCard that navigates to a detail page), users experience severe UX bugs where interacting with the nested element unintentionally triggers the parent's navigation due to event bubbling.
**Action:** Always add `onClick={(e) => e.stopPropagation()}` to any interactive buttons placed inside a clickable card container to ensure independent interactions do not trigger the parent container's routing.
