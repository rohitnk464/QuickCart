## 2024-03-14 - Nested Interactive Elements Pattern

**Learning:** In e-commerce product cards where the entire card is clickable for navigation, adding nested interactive elements (like a wishlist `<button>` or a "Buy now" `<button>`) creates complex interaction states. While these buttons might function visually, clicking them often triggers the parent container's click event unintentionally. Additionally, relying on `cursor-pointer` on a `div` does not inherently convey interactivity to assistive technologies.

**Action:** When adding interactive elements inside clickable container elements, always use `onClick={(e) => e.stopPropagation()}` to prevent event bubbling. Furthermore, avoid adding `role="button"` to the outer wrapper if it contains nested interactive elements, as this violates WCAG accessibility guidelines. Ensure nested elements have clear ARIA labels (e.g., `aria-label="Add to wishlist"`) and distinct focus states (`focus-visible:ring-2`) for keyboard navigation.
