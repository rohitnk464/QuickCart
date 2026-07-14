## 2024-06-12 - ProductCard Accessibility and Interaction Improvements
**Learning:** When interactive elements (like wishlist or buy buttons) are nested inside clickable card containers in Next.js, their click events bubble up and trigger the container's navigation, leading to unintended behavior. Also, rendering repetitive decorative elements (like star ratings) without `aria-hidden` and empty `alt` attributes causes severe screen reader noise (reading "star_icon" 5 times).
**Action:** Always use `onClick={(e) => e.stopPropagation()}` on nested buttons to prevent event bubbling. Always group decorative image arrays in a container with `aria-hidden="true"` and use empty `alt=""` attributes to ensure a clean screen reader experience.

## 2024-07-14 - Custom Cart Quantity Controls Accessibility
**Learning:** Custom increment/decrement buttons in cart quantity components often lack context for screen readers when they use icon-only images. If the internal `<Image>` has generic alt text (like "increase_arrow"), the screen reader announcement is suboptimal.
**Action:** Always add descriptive `aria-label`s (e.g., "Increase quantity of [Product Name]") to the wrapper `<button>`, set `alt=""` on the internal icon `<Image>`, and ensure focus states (`focus-visible:ring-2 outline-none`) are present for keyboard users.
