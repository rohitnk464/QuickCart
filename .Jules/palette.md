## 2024-03-27 - Initialization\n**Learning:** Started tracking UX learnings.\n**Action:** Create more entries when specific UX/a11y insights are found.

## 2024-03-27 - Nesting Interactive Elements and ARIA best practices
**Learning:** Found a severe WCAG accessibility violation where a "Buy now" button and wishlist button were nested inside a clickable ProductCard `div`. Screen readers announce nested interactive elements poorly, and it violates HTML validation. Also, visual star ratings paired with numerical text shouldn't announce 'star_icon' redundantly.
**Action:** Always use `onClick={(e) => e.stopPropagation()}` on interactive elements inside clickable containers to prevent bubbling and triggering the parent. Use `aria-hidden="true"` on wrapper containers of decorative elements (like stars) and `alt=""` on the individual images to prevent redundant screen reader announcements when the information is already conveyed via text.
