## 2024-04-22 - Nested Interactive Elements inside Clickable Containers
**Learning:** Adding interactive elements (like an "Add to wishlist" button) inside clickable container elements (like the `ProductCard` div) requires `onClick={(e) => e.stopPropagation()}` to prevent unintended triggering of the parent container's click events. This is a common pattern in e-commerce product cards.
**Action:** When adding or modifying buttons within clickable cards, always ensure event propagation is stopped to prevent conflicting navigation events.

## 2024-04-22 - Hiding Decorative Rating Stars
**Learning:** Visual star ratings (like in `ProductCard`) are often paired with a text-based numeric rating. Providing both can result in redundant and confusing screen reader announcements if the images are not properly hidden.
**Action:** Use `aria-hidden="true"` on the star rating container and set `alt=""` on individual decorative star images to optimize the screen reader experience when a text alternative is already present.
