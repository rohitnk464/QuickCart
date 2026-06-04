## 2024-05-18 - [Accessibility for Star Ratings]
**Learning:** Visual star ratings paired with numeric text lead to redundant screen reader announcements if stars aren't hidden.
**Action:** Always add `aria-hidden="true"` to the star container and use `alt=""` for individual star images when a text equivalent exists.

## 2024-05-18 - [Nested Interactive Elements]
**Learning:** Interactive elements nested inside a clickable container element (e.g. wishlist button inside a product card div) trigger the parent's click event when clicked.
**Action:** Always use `onClick={(e) => e.stopPropagation()}` on the inner interactive elements to prevent unintended event bubbling and navigation.
