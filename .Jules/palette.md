## 2026-04-12 - Prevent Event Bubbling on Nested Interactive Elements
**Learning:** In clickable container elements (like product cards), nested interactive elements (like a wishlist button) must stop event propagation. Otherwise, users attempting to interact with the nested element will unintentionally trigger the parent container's action (e.g., navigating away).
**Action:** Always implement `onClick={(e) => e.stopPropagation()}` on interactive elements nested within clickable parents.

## 2026-04-12 - Manage Redundant Screen Reader Announcements
**Learning:** Components often use both a text value (e.g., "4.5") and a visual representation (e.g., 5 star icons) to display information. Without proper ARIA attributes, screen readers will redundantly announce both the text and the individual visual elements (e.g., reading "star_icon" five times).
**Action:** Use `aria-hidden="true"` on containers of visual-only representations when the equivalent information is already provided as accessible text, and ensure decorative inner images use empty `alt=""` attributes.
