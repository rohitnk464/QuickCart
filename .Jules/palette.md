## 2024-03-23 - Interactive Elements in Clickable Cards
**Learning:** Adding interactive elements (like a wishlist button) inside clickable container elements (like the `ProductCard` div) causes unintended navigation when interacting with the nested button.
**Action:** Always use `onClick={(e) => e.stopPropagation()}` on nested interactive elements to prevent triggering the parent container 's click events.

## 2024-03-23 - Visual Star Ratings Accessibility
**Learning:** Visual star ratings in the UI are often paired with a text-based rating. If the stars are not hidden from screen readers, it causes redundant announcements.
**Action:** For proper accessibility, the image container for the stars should be hidden using `aria-hidden="true"` and individual star images should use empty `alt` attributes (`alt=""`) to prevent redundant announcements by screen readers.
