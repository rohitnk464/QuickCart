## 2024-05-03 - Nested Interactive Elements in Product Cards
**Learning:** Adding interactive buttons (like wishlist or 'add to cart') inside a container that handles main navigation (e.g., an outer `div` with an `onClick` navigating to product details) causes event bubbling issues where both actions trigger simultaneously.
**Action:** Always use `onClick={(e) => e.stopPropagation()}` on nested interactive buttons to prevent parent click handlers from firing.

## 2024-05-03 - Redundant Screen Reader Output on Ratings
**Learning:** Visual star ratings alongside numeric ratings (e.g., "4.5 [5 star icons]") cause screen readers to read "star icon" repeatedly, leading to verbose and confusing output.
**Action:** Always use `aria-hidden="true"` on the parent container of visual-only ratings and ensure child images use empty `alt=""` text when the information is conveyed elsewhere via text.
