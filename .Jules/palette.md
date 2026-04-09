## 2024-05-15 - [Initial]
**Learning:** Initialization
**Action:** Started tracking

## 2024-05-15 - [ProductCard Accessibility Fixes]
**Learning:** Adding empty `alt` attributes (`alt=""`) to icons within buttons, combined with `aria-label` on the button itself, prevents redundant screen reader announcements while ensuring full accessibility. Similarly, hiding visual star ratings using `aria-hidden="true"` and empty `alt` texts on the images prevents redundant announcements when a text-based rating is already present next to it.
**Action:** Always provide an `aria-label` for icon-only buttons and set the child icon's `alt` attribute to empty. When visual ratings (e.g., stars) are paired with text ratings, hide the visual representation from screen readers using `aria-hidden="true"` on the container and `alt=""` on individual star images.

## 2024-05-15 - [Prevent Event Propagation on Nested Interactions]
**Learning:** When interactive elements (like a wishlist or "Buy now" button) are nested inside a clickable container (like a Product Card div that navigates to a product detail page), clicking the nested element triggers the parent container's click event due to event bubbling, leading to unintended navigation.
**Action:** Always use `onClick={(e) => e.stopPropagation()}` on interactive elements nested within clickable containers to isolate their functionality and prevent triggering parent container events.
