## 2024-10-24 - Accessible Star Ratings
**Learning:** Visual star ratings paired with a text-based rating should be hidden from screen readers using `aria-hidden="true"` and empty `alt=""` attributes on the star images to prevent redundant announcements.
**Action:** Always hide visual rating components (like stars) when a text equivalent is already present next to it, and use empty alt text for the decorative star images.
