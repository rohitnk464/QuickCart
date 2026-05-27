## 2024-05-27 - [Stop Event Propagation in Clickable Cards]
**Learning:** Adding interactive elements (like wishlist or 'Buy now' buttons) inside clickable container elements (like a `ProductCard` div) creates nested interactive elements. Clicking the inner button can unexpectedly trigger the outer container's navigation event, causing frustration.
**Action:** Always add `onClick={(e) => e.stopPropagation()}` to inner buttons within clickable containers to isolate their interactions and prevent unintended navigation.
