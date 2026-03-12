## 2026-03-12 - Visual Star Ratings
**Learning:** Visual star ratings in the UI (such as in `ProductCard.jsx`) are paired with a text-based rating. For proper accessibility, the image container for the stars should be hidden using `aria-hidden="true"` and the individual star images should use empty `alt` attributes (`alt=""`) to prevent redundant announcements by screen readers.
**Action:** Always check star ratings and similar decorative icons paired with text-based scores to ensure they are hidden from screen readers using `aria-hidden="true"`.
