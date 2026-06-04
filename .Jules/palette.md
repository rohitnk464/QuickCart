## 2024-05-14 - Interactive Element Nesting in Next.js/React

**Learning:** Adding interactive elements (like a wishlist `<button>`) inside of a parent component (like the `ProductCard` `<div>`) that also has an `onClick` navigation handler can lead to unexpected navigation events being triggered when the nested button is clicked. Additionally, omitting specific ARIA labels on these icon-only buttons severely degrades the screen reader experience.

**Action:** Whenever adding clickable nested elements within a navigable container, always apply `onClick={(e) => e.stopPropagation()}` to prevent the click event from bubbling up to the parent. Also, immediately accompany any icon-only button with a descriptive `aria-label`.
