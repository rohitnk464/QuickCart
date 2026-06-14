## 2024-06-14 - Nested Interactions in Clickable Containers
**Learning:** Adding interactive elements (like a "Buy now" or wishlist button) inside a container that acts as a link (e.g., a card `div` with an `onClick` router push) causes severe usability issues where interacting with the sub-element inadvertently triggers the main container's action, taking the user away from their current flow.
**Action:** Always apply `onClick={(e) => e.stopPropagation()}` to any interactive sub-elements nested within a broader clickable container to isolate their events.

## 2024-06-14 - Visual Star Rating Accessibility
**Learning:** Visual star ratings composed of individual image elements cause redundant and confusing screen reader output (e.g., "star, star, star, star, star") when paired alongside a text-based representation of the rating (e.g., "4.5").
**Action:** Apply `aria-hidden="true"` to the container grouping the visual star images to completely hide them from the accessibility tree, relying solely on the text-based rating for screen readers.
