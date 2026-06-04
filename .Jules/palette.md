## 2026-04-17 - Prevent parent click handlers from firing when interacting with nested interactive elements
**Learning:** When using nested interactive elements (like a wishlist `<button>` inside a clickable `<div onClick={...}>` for product navigation), screen readers and mouse users can inadvertently trigger the parent container's click action.
**Action:** Add `onClick={(e) => e.stopPropagation()}` to the nested interactive element to ensure only its specific action is executed without unintended navigation, keeping the UI intuitive and accessible.
