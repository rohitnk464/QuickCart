## 2024-05-04 - [Product Card Nested Interactions]
**Learning:** [When card containers have click handlers for navigation, internal action buttons like wishlist or purchase must explicitly stop click propagation, or users will be unintentionally navigated away when trying to interact with the buttons.]
**Action:** [Always verify and apply `onClick={(e) => e.stopPropagation()}` to interactive elements nested inside a larger clickable area.]
