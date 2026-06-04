
## 2024-04-09 - Nested Interactive Elements Stop Propagation
**Learning:** Nested interactive elements like "Buy Now" and "Add to Wishlist" buttons within a clickable card container will trigger the parent's navigation unless `e.stopPropagation()` is used.
**Action:** Always add `onClick={(e) => e.stopPropagation()}` to buttons nested inside clickable navigation containers to prevent unexpected routing behavior.

## 2024-04-09 - Redundant Star Rating Announcements
**Learning:** Visual star ratings alongside numeric ratings cause screen readers to repetitively announce decorative images (e.g., "star_icon, star_icon...").
**Action:** Wrap purely decorative repeating icons in a container with `aria-hidden="true"` and use empty `alt=""` text to streamline the screen reader experience.
