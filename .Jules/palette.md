## 2024-05-15 - Screen Reader Redundancy in Star Ratings
**Learning:** Visual star ratings that are paired with a text-based rating (e.g., "4.5" next to 5 star icons) create redundant and noisy announcements for screen readers if each star has an `alt` attribute.
**Action:** The image container for the stars should be hidden using `aria-hidden="true"` and the individual star images should use empty `alt` attributes (`alt=""`) to prevent redundant announcements.

## 2024-05-15 - Event Propagation on Nested Interactive Elements
**Learning:** Adding interactive elements (like a wishlist button or "Buy now" button) inside clickable container elements (like a product card `div` that handles navigation) leads to unintended triggering of the parent container's click events when the nested element is interacted with.
**Action:** Always use `onClick={(e) => e.stopPropagation()}` on the nested interactive elements to prevent the event from bubbling up to the parent container.
