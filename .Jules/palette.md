## 2024-04-16 - Stop Propagation on Interactive Children
**Learning:** When interactive elements (like a wishlist button) are nested inside a clickable container (like ProductCard), the nested element triggers both its own action and the parent's action, leading to unexpected navigation.
**Action:** Always use `onClick={(e) => e.stopPropagation()}` on interactive child elements within clickable containers to isolate their behavior.
