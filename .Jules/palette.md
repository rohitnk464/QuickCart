## 2025-02-18 - Nested Interactive Elements & Screen Reader Redundancy
**Learning:** Found nested interactive elements (wishlist/buy buttons inside a clickable div) and redundant screen reader announcements for star ratings in ProductCard.
**Action:** Applied e.stopPropagation() to nested buttons to prevent unintended parent navigation, added aria-hidden="true" to star ratings, and provided aria-labels for icon-only buttons.
