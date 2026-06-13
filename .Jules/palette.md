## 2026-06-13 - Prevent click propagation on nested buttons
**Learning:** In the `ProductCard` component, nested interactive elements (like the wishlist button) were causing unintended navigation because click events propagated to the parent clickable container.
**Action:** Always add `onClick={(e) => e.stopPropagation()}` to interactive elements inside clickable cards to prevent event bubbling.
