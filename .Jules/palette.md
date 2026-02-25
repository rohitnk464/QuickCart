## 2025-02-14 - Accessible Cards with Nested Actions
**Learning:** Using the "Stretched Link" pattern (e.g., `before:absolute before:inset-0` on a primary link inside a `relative` container) is the most robust way to make an entire card clickable while maintaining semantic validity (avoiding buttons inside anchors).
**Action:** When implementing card components with nested interactive elements (like "Wishlist" or "Add to Cart"), use a Stretched Link for the card's main action and `relative z-10` for nested buttons to ensure they remain clickable and accessible.
