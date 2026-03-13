## 2024-05-18 - Visual Star Ratings Accessibility
**Learning:** Visual star ratings (e.g. `ProductCard.jsx`) paired with a text-based rating can cause redundant announcements by screen readers.
**Action:** The image container for the stars should be hidden using `aria-hidden="true"` and the individual star images should use empty `alt` attributes (`alt=""`) to prevent redundant announcements.
