## 2024-03-09 - [Accessibility Enhancements in ProductCard]
**Learning:** Found an accessibility issue where icon-only buttons (like wishlist "heart" button) lack an `aria-label`, preventing screen readers from understanding their purpose. Also missing `aria-label` for "star" icons and some images are used purely for visual effects without `alt` or specific `role`.
**Action:** Adding `aria-label` to these interactive icon-only elements such as the wishlist button and modifying other elements for better accessibility.
