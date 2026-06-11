## 2024-06-25 - Prevent Outer Div Navigation on Nested Buttons & Fix Rating Readability

**Learning:** When interactive elements (like a wishlist button or 'Buy now' button) are placed inside a clickable container element (like a ProductCard div with an onClick navigation), users who interact with the buttons will also trigger the container's navigation, leading to a jarring user experience. Additionally, visual star ratings combined with text-based ratings lead to redundant and confusing announcements for screen reader users.

**Action:** Add `onClick={(e) => e.stopPropagation()}` to all nested interactive elements within clickable containers to prevent unintended triggering of the parent container's click events. Also, add `aria-hidden="true"` to visual rating containers and use empty `alt` attributes (`alt=""`) for the individual star images to prevent screen readers from reading them out loud.
