
## 2024-06-26 - Accessible Product Cards
**Learning:** In navigational cards (like `ProductCard` where the whole `div` routes to a product page), nested interactive elements like 'Add to wishlist' or 'Buy now' buttons must use `onClick={(e) => e.stopPropagation()}` to prevent unintended navigation. Additionally, visual star ratings paired with a numeric text rating must be hidden with `aria-hidden="true"` and empty `alt=""` text to avoid redundant screen reader announcements.
**Action:** Always stop propagation on nested buttons within clickable cards and hide decorative paired visuals from screen readers.
