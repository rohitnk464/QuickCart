## 2024-05-18 - Paired Visual/Text Ratings Screen Reader Redundancy
**Learning:** Visual star ratings in the UI paired with a text-based rating causes redundant announcements by screen readers.
**Action:** The image container for the stars should be hidden using `aria-hidden="true"` and the individual star images should use empty `alt` attributes (`alt=""`) to prevent redundant announcements by screen readers.
