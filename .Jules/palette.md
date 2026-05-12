## 2026-05-12 - Nested Interactive Elements Accessibility
**Learning:** The ProductCard component uses a clickable `div` container with nested interactive buttons (wishlist, buy now). Adding `role="button"` to the outer container to make it accessible is a severe WCAG violation because interactive elements cannot be nested. Also, nested buttons must call `e.stopPropagation()` to prevent triggering the parent container's click events.
**Action:** Always verify if a container has nested interactive elements before applying `role="button"`. Use `e.stopPropagation()` on nested interactive elements to ensure expected behavior.

## 2026-05-12 - Redundant Star Rating Accessibility
**Learning:** Visual star ratings in the UI are often paired with a text-based rating (e.g., '4.5'). Screen readers will redundantly announce every individual star image's alt text if not hidden.
**Action:** Use `aria-hidden="true"` on the container of visual star ratings and set empty `alt=""` attributes on individual star images when a text equivalent is already present to prevent redundant announcements.
