## 2025-02-17 - Accessible Product Cards
**Learning:** Nested interactive elements (buttons inside clickable cards) are common but problematic for accessibility and event bubbling.
**Action:** Use `role="link"` with `tabIndex={0}` and explicit `onKeyDown` handlers on the card container, while adding `stopPropagation()` to inner buttons, to maintain "clickable card" behavior without invalid HTML nesting or accessibility failures.
