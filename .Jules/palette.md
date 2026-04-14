## 2024-04-14 - Prevent nested event triggering in interactive cards
**Learning:** When using nested interactive elements (like a wishlist `<button>`) inside a clickable container element (like a card `<div>` with `onClick`), clicking the nested element also triggers the container's navigation event, leading to frustrating user experiences (adding to wishlist redirects user to product page).
**Action:** Always add `onClick={(e) => e.stopPropagation()}` to nested interactive elements like buttons within clickable cards to prevent event bubbling to the parent container.

## 2024-04-14 - Redundant visual rating announcements
**Learning:** Star rating images next to text ratings cause redundant announcements for screen readers (e.g., "4.5 star_icon star_icon...").
**Action:** Always add `aria-hidden="true"` to visual-only star rating containers and set individual star images' `alt` attributes to empty (`alt=""`) when accompanied by a text rating.