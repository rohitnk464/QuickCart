## 2026-05-05 - [Interactive Elements & Redundant Screen Reader Output]
**Learning:** Nested interactive elements (buttons inside clickable containers) trigger multiple navigations/actions unless `e.stopPropagation()` is used. Visual ratings (like stars) paired with text ratings cause redundant and confusing screen reader announcements.
**Action:** Use `e.stopPropagation()` on nested buttons inside clickable containers. Hide visual representations (like stars) using `aria-hidden="true"` on their container and empty `alt=""` tags when text equivalent is already present.
