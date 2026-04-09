## 2024-05-24 - Interactive Div Accessibility
**Learning:** In React/Next.js apps, using a `div` as a clickable card wrapper causes keyboard accessibility issues. Nested buttons also bubble their click events to the parent div, breaking their specific actions and navigating away instead.
**Action:** Always add `role="link"` or `role="button"`, `tabIndex={0}`, and an `onKeyDown` handler (Enter/Space) to interactive divs. Ensure all nested buttons use `e.stopPropagation()` and have appropriate `aria-label`s.
