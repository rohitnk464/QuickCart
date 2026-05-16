## 2024-05-16 - Stop Propagation on Clickable Cards
**Learning:** When a whole container (like a ProductCard) is clickable for navigation, any interactive elements nested inside it (like wishlist or add to cart buttons) must have `e.stopPropagation()` on their `onClick` handlers. Otherwise, clicking the button triggers both the button action and the card's navigation.
**Action:** Always check for parent `onClick` handlers when adding new interactive elements to card components, and apply `e.stopPropagation()` if they exist.

## 2024-05-16 - Screen Reader Experience for Visual Ratings
**Learning:** Visual star ratings alongside numeric ratings (e.g., "4.5" next to 5 stars) create redundant and noisy screen reader experiences if the star icons have alt text (e.g., "star_icon star_icon...").
**Action:** Always add `aria-hidden="true"` to the container holding visual-only ratings, and ensure individual rating images have empty `alt=""` attributes.
