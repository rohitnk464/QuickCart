## 2024-05-18 - [Preventing Unintended Navigation in Clickable Cards]
**Learning:** When interactive elements like "Add to wishlist" or "Buy now" buttons are placed inside a parent container that is also clickable (e.g., a product card that navigates to a detail page), clicking the inner button will trigger the parent's click event due to event propagation. This causes unintended navigation.
**Action:** Always add `onClick={(e) => e.stopPropagation()}` to interactive elements nested inside clickable parent containers.
