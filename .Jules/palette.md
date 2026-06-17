## 2024-06-17 - Prevent Event Propagation for Nested Interactive Elements
**Learning:** Adding interactive elements like wishlist or "Buy now" buttons inside a clickable card component (`div` with `onClick`) causes unintended triggering of the card's navigation event when the buttons are clicked.
**Action:** Always use `onClick={(e) => e.stopPropagation()}` on nested interactive elements to prevent them from triggering parent click handlers.

## 2024-06-17 - Hide Redundant Visual Ratings from Screen Readers
**Learning:** Visual star ratings that are paired with a text-based rating (e.g., "4.5" next to 5 stars) create redundant and noisy announcements for screen reader users if each star has alt text like "star_icon".
**Action:** Use `aria-hidden="true"` on the visual star rating container and empty `alt=""` attributes on the individual star images when a text equivalent is already present.
