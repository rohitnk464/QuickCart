## 2026-06-28 - Nested interactions and Star Rating Verbosity in ProductCards
**Learning:** Clicking action buttons inside clickable cards triggers both the button and the card navigation. Additionally, visual star ratings paired with numeric text cause screen readers to read repetitive "star_icon" strings.
**Action:** Always add `e.stopPropagation()` to buttons inside clickable cards. Use `aria-hidden="true"` on the star container and empty `alt=""` attributes on star icons to prevent redundant screen reader announcements.
