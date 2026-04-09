## 2024-05-18 - [ProductCard Accessibility & Interaction]
**Learning:**
1. Interactive elements (like a wishlist button) inside clickable container elements (like the ProductCard div) must use `onClick={(e) => e.stopPropagation()}` to prevent unintended navigation or triggering of the parent container's click events.
2. Visual star ratings paired with a text-based rating should have their container hidden using `aria-hidden="true"` and individual star images should use empty `alt` attributes (`alt=""`) to prevent redundant and verbose announcements by screen readers.
**Action:** Always verify interaction and accessibility of interactive elements nested inside clickable containers. Always consider the screen reader experience when displaying both text and visual representations of the same information (like ratings).
