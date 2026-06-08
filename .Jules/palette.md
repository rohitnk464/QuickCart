## 2024-06-08 - Fixing Nested Interactive Elements & Redundant A11y Announcements

**Learning:**
1. The `ProductCard` component places multiple interactive elements (wishlist button, "Buy now" button) inside a large container `div` that handles navigation to the product detail page via an `onClick` event. This is an accessibility violation (nested interactives) and creates a bad UX where clicking a button also triggers the parent navigation.
2. The visual 5-star rating system consists of individual `Image` components that each have an `alt="star_icon"` attribute, paired with a text rating summary (`4.5`). This causes screen readers to read "star_icon" 5 times consecutively, creating a noisy and poor experience for visually impaired users.

**Action:**
1. When fixing nested interactive elements, ensure `onClick={(e) => e.stopPropagation()}` is added to all child buttons (wishlist, add to cart) to prevent the event from bubbling up to the parent container. Also ensure they have `aria-label` and `focus-visible` states.
2. For visual rating systems that also have text summaries, hide the entire image container from screen readers using `aria-hidden="true"`, set the individual image `alt` attributes to empty strings (`alt=""`), and ensure the text summary has a descriptive `aria-label` (e.g., `aria-label="Rating 4.5 out of 5"`).
